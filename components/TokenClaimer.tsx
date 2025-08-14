'use client';

import { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useConnection } from '@solana/wallet-adapter-react';
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  Transaction,
  SystemProgram,
  Connection,
} from '@solana/web3.js';
import {
  getAssociatedTokenAddress,
  createCloseAccountInstruction,
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import {
  X,
  Wallet,
  Coins,
  AlertCircle,
  CheckCircle,
  Loader2,
  Zap,
  Shield,
  RefreshCw,
  Info,
  DollarSign,
} from 'lucide-react';

interface TokenClaimerProps {
  onClose: () => void;
}

interface ClosedAccountInfo {
  mint: string;
  symbol: string;
  name: string;
  accountAddress: string;
  rentAmount: number;
  isAssociated: boolean;
  canClose: boolean;
}

export const TokenClaimer = ({ onClose }: TokenClaimerProps) => {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [isScanning, setIsScanning] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [closedAccounts, setClosedAccounts] = useState<ClosedAccountInfo[]>([]);
  const [selectedAccounts, setSelectedAccounts] = useState<Set<string>>(
    new Set()
  );
  const [isClaiming, setIsClaiming] = useState(false);
  const [claimError, setClaimError] = useState<string>('');
  const [claimSuccess, setClaimSuccess] = useState<string>('');
  const [includeATAs, setIncludeATAs] = useState(false); // New state for ATA handling
  const [totalRentAvailable, setTotalRentAvailable] = useState(0);

  // Auto-select accounts based on ATA checkbox
  useEffect(() => {
    if (closedAccounts.length > 0) {
      if (includeATAs) {
        // Select all accounts (including ATAs)
        const allAccountAddresses = closedAccounts.map(
          (account) => account.accountAddress
        );
        setSelectedAccounts(new Set(allAccountAddresses));
      } else {
        // Select only non-ATA accounts
        const nonATAAccounts = closedAccounts
          .filter((account) => !account.isAssociated)
          .map((account) => account.accountAddress);
        setSelectedAccounts(new Set(nonATAAccounts));
      }
    }
  }, [includeATAs, closedAccounts]);

  const scanForClosedAccounts = async () => {
    if (!publicKey || !connection) return;
    setIsScanning(true);
    setErrorMessage('');

    try {
      console.log('🔍 Starting Sol Incinerator-style scan...');
      console.log('Wallet address:', publicKey.toString());

      const closedAccountsList: ClosedAccountInfo[] = [];
      let totalRent = 0;

      // Method 1: Get parsed token accounts (Sol Incinerator's main approach)
      console.log('📡 Getting parsed token accounts...');
      const parsedAccounts = await connection.getParsedTokenAccountsByOwner(
        publicKey,
        { programId: TOKEN_PROGRAM_ID }
      );

      console.log(`Found ${parsedAccounts.value.length} token accounts`);

      // Check each account for closeability (Sol Incinerator logic)
      for (const { account, pubkey } of parsedAccounts.value) {
        try {
          const accountInfo = account.data.parsed.info;
          const tokenAmount = accountInfo.tokenAmount;
          const mint = accountInfo.mint;
          const isFrozen = accountInfo.state === 'frozen';
          const isNative = accountInfo.isNative;

          console.log(`\n--- Account: ${pubkey.toString()} ---`);
          console.log(`Mint: ${mint}`);
          console.log(
            `Amount: ${tokenAmount.uiAmount} (${tokenAmount.amount})`
          );
          console.log(`State: ${accountInfo.state}`);
          console.log(`Is Native: ${isNative}`);

          // Sol Incinerator's criteria for closeable accounts:
          // 1. tokenAmount.amount === "0" (empty account)
          // 2. Not native SOL
          // 3. Not frozen
          if (tokenAmount.amount === '0' && !isNative && !isFrozen) {
            console.log(`💰 EMPTY ACCOUNT FOUND!`);

            // Get actual lamports from the account (not static calculation)
            const accountInfoRaw = await connection.getAccountInfo(pubkey);
            if (accountInfoRaw) {
              const actualLamports = accountInfoRaw.lamports;
              const rentAmount = actualLamports / LAMPORTS_PER_SOL;

              console.log(`Actual lamports: ${actualLamports}`);
              console.log(`Rent amount: ${rentAmount.toFixed(6)} SOL`);

              if (rentAmount > 0) {
                // Check if this is an ATA
                const associatedTokenAddress = await getAssociatedTokenAddress(
                  new PublicKey(mint),
                  publicKey,
                  false,
                  TOKEN_PROGRAM_ID,
                  ASSOCIATED_TOKEN_PROGRAM_ID
                );

                const isAssociated = associatedTokenAddress.equals(pubkey);
                const tokenInfo = await getTokenInfo(mint);

                closedAccountsList.push({
                  mint,
                  symbol: tokenInfo.symbol,
                  name: tokenInfo.name,
                  accountAddress: pubkey.toString(),
                  rentAmount,
                  isAssociated,
                  canClose: true,
                });

                totalRent += rentAmount;
                console.log(
                  `✅ ADDED EMPTY ACCOUNT: ${
                    tokenInfo.symbol
                  } - ${rentAmount.toFixed(6)} SOL rent`
                );
              }
            }
          } else if (
            tokenAmount.uiAmount > 0 &&
            tokenAmount.uiAmount < 0.000001
          ) {
            // Check for dust accounts (very small amounts)
            console.log(
              `💰 DUST ACCOUNT FOUND: ${tokenAmount.uiAmount} tokens`
            );

            const accountInfoRaw = await connection.getAccountInfo(pubkey);
            if (accountInfoRaw) {
              const actualLamports = accountInfoRaw.lamports;
              const rentAmount = actualLamports / LAMPORTS_PER_SOL;

              if (rentAmount > 0) {
                const associatedTokenAddress = await getAssociatedTokenAddress(
                  new PublicKey(mint),
                  publicKey,
                  false,
                  TOKEN_PROGRAM_ID,
                  ASSOCIATED_TOKEN_PROGRAM_ID
                );

                const isAssociated = associatedTokenAddress.equals(pubkey);
                const tokenInfo = await getTokenInfo(mint);

                closedAccountsList.push({
                  mint,
                  symbol: tokenInfo.symbol,
                  name: tokenInfo.name,
                  accountAddress: pubkey.toString(),
                  rentAmount,
                  isAssociated,
                  canClose: true,
                });

                totalRent += rentAmount;
                console.log(
                  `✅ ADDED DUST ACCOUNT: ${
                    tokenInfo.symbol
                  } - ${rentAmount.toFixed(6)} SOL rent`
                );
              }
            }
          }
        } catch (error) {
          console.log(
            `⚠️ Error processing account ${pubkey.toString()}:`,
            error
          );
        }
      }

      console.log(`\n🎯 FINAL RESULTS:`);
      console.log(`Total token accounts: ${parsedAccounts.value.length}`);
      console.log(`Closeable accounts found: ${closedAccountsList.length}`);
      console.log(`Total rent available: ${totalRent.toFixed(6)} SOL`);

      if (closedAccountsList.length === 0) {
        console.log('❌ NO CLOSEABLE ACCOUNTS FOUND');
        console.log('This means either:');
        console.log('1. All accounts are active with balances');
        console.log('2. All accounts are native SOL or frozen');
        console.log('3. No empty accounts exist');
      }

      setClosedAccounts(closedAccountsList);
      setTotalRentAvailable(totalRent);

      if (closedAccountsList.length === 0) {
        setErrorMessage(
          `No closeable accounts found. Scanned ${parsedAccounts.value.length} token accounts.`
        );
      }
    } catch (error) {
      console.error('❌ Error during scan:', error);
      setErrorMessage(
        `Scan failed: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`
      );
    } finally {
      setIsScanning(false);
    }
  };

  const getTokenInfo = async (
    mint: string
  ): Promise<{ symbol: string; name: string }> => {
    const knownTokens: { [key: string]: { symbol: string; name: string } } = {
      So11111111111111111111111111111111111111112: {
        symbol: 'SOL',
        name: 'Solana',
      },
      EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: {
        symbol: 'USDC',
        name: 'USD Coin',
      },
      '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R': {
        symbol: 'RAY',
        name: 'Raydium',
      },
      Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: {
        symbol: 'USDT',
        name: 'Tether',
      },
      DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263: {
        symbol: 'BONK',
        name: 'Bonk',
      },
    };
    return knownTokens[mint] || { symbol: 'Unknown', name: 'Unknown Token' };
  };

  const handleAccountSelection = (accountAddress: string) => {
    setSelectedAccounts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(accountAddress)) {
        newSet.delete(accountAddress);
      } else {
        newSet.add(accountAddress);
      }
      return newSet;
    });
  };

  const handleClaimRent = async () => {
    if (!publicKey || selectedAccounts.size === 0 || !connection) return;
    setIsClaiming(true);
    setClaimError('');
    setClaimSuccess('');

    try {
      const selectedAccountInfos = closedAccounts.filter((a) =>
        selectedAccounts.has(a.accountAddress)
      );

      console.log(
        `🚀 Starting claim for ${selectedAccountInfos.length} accounts...`
      );

      // Batch accounts into chunks of 8 to avoid transaction size limits
      const batchSize = 8;
      const batches = [];
      for (let i = 0; i < selectedAccountInfos.length; i += batchSize) {
        batches.push(selectedAccountInfos.slice(i, i + batchSize));
      }

      console.log(`📦 Processing ${batches.length} batches...`);

      let totalClaimed = 0;
      const commissionWallet =
        process.env.NEXT_PUBLIC_COMMISSION_WALLET_ADDRESS;

      // Process each batch separately
      for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
        const batch = batches[batchIndex];
        console.log(
          `📦 Processing batch ${batchIndex + 1}/${batches.length} with ${
            batch.length
          } accounts`
        );

        const transaction = new Transaction();

        // Add close instructions for this batch
        for (const account of batch) {
          const closeInstruction = createCloseAccountInstruction(
            new PublicKey(account.accountAddress),
            publicKey, // Destination for rent
            publicKey, // Authority
            []
          );
          transaction.add(closeInstruction);
        }

        // Calculate total rent for this batch
        const batchRent = batch.reduce(
          (sum, account) => sum + account.rentAmount,
          0
        );

        // Calculate commission for this batch
        let batchCommission = 0.0007; // Base fee per wallet
        if (batch.length > 5) {
          batchCommission = Math.max(0.0007, batchRent * 0.05);
        }

        // Send commission to your wallet (if configured)
        if (commissionWallet && batchCommission > 0) {
          const commissionInstruction = SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: new PublicKey(commissionWallet),
            lamports: Math.floor(batchCommission * LAMPORTS_PER_SOL),
          });
          transaction.add(commissionInstruction);

          console.log(`💰 Commission: ${batchCommission.toFixed(6)} SOL`);
        }

        // User gets the full batch rent (commission is sent separately)
        totalClaimed += batchRent;

        console.log(
          `💰 Batch ${batchIndex + 1}: Rent ${batchRent.toFixed(
            6
          )} SOL, Commission ${batchCommission.toFixed(6)} SOL`
        );

        // Send the transaction
        const signature = await sendTransaction(transaction, connection);
        console.log(`✅ Batch ${batchIndex + 1} processed: ${signature}`);

        // Wait for confirmation with longer timeout
        try {
          const confirmation = await connection.confirmTransaction(
            signature,
            'confirmed'
          );
          if (confirmation.value.err) {
            throw new Error(`Transaction failed: ${confirmation.value.err}`);
          }
          console.log(`✅ Batch ${batchIndex + 1} confirmed`);
        } catch (confirmError) {
          console.error(
            `❌ Batch ${batchIndex + 1} confirmation failed:`,
            confirmError
          );
          throw new Error(
            `Batch ${batchIndex + 1} failed to confirm: ${confirmError}`
          );
        }

        // Small delay between batches to avoid rate limiting
        if (batchIndex < batches.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }

      console.log(`🎯 Total claimed by user: ${totalClaimed.toFixed(6)} SOL`);

      setClaimSuccess(
        `Successfully claimed SOL from ${selectedAccountInfos.length} accounts! Your SOL has been returned to your wallet.`
      );

      // Update the UI
      setClosedAccounts((prev) =>
        prev.filter((a) => !selectedAccounts.has(a.accountAddress))
      );
      setSelectedAccounts(new Set());
      setTotalRentAvailable((prev) => prev - totalClaimed);
    } catch (error) {
      console.error('❌ Claim failed:', error);
      setClaimError(
        `Claim failed: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`
      );
    } finally {
      setIsClaiming(false);
    }
  };

  const getTotalSelectedRent = () => {
    return closedAccounts
      .filter((a) => selectedAccounts.has(a.accountAddress))
      .reduce((sum, account) => sum + account.rentAmount, 0);
  };

  useEffect(() => {
    if (publicKey && connection) {
      scanForClosedAccounts();
    }
  }, [publicKey, connection]);

  if (!publicKey) {
    return (
      <div className='text-center py-12 px-6'>
        <div className='w-20 h-20 bg-gradient-to-r from-[#58a6ff] to-[#1f6feb] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg'>
          <Wallet className='w-10 h-10 text-white' />
        </div>
        <h3 className='text-3xl font-extrabold text-white mb-3'>
          Connect Your Wallet
        </h3>
        <p className='text-gray-400 mb-8 max-w-md mx-auto'>
          Please connect your Solana wallet to scan for closed token accounts
          and reclaim your locked rent.
        </p>
        <button
          onClick={onClose}
          className='px-6 py-3 rounded-xl border border-gray-600 text-white hover:bg-gray-700 transition'
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className='relative max-w-4xl mx-auto p-6 bg-[#0d1117]/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800'>
      {/* HEADER */}
      <div className='flex justify-between items-center mb-8'>
        <div className='flex items-center space-x-4'>
          <div className='w-20 h-20 rounded-xl flex items-center justify-center shadow-md'>
            <img src='/logochecksvg.svg' alt='Logo' className='w-14 h-14' />
          </div>
          <div>
            <h2 className='text-3xl font-bold text-white'>
              Claim Closed Tokens
            </h2>
            <p className='text-gray-400 text-sm'>
              Reclaim SOL rent from closed token accounts
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className='p-3 hover:bg-gray-800 rounded-xl text-gray-400 hover:text-white transition'
        >
          <X className='w-5 h-5' />
        </button>
      </div>

      {/* ACTION BAR */}
      <div className='flex items-center justify-between mb-6'>
        <button
          onClick={scanForClosedAccounts}
          disabled={isScanning}
          className='bg-[#58a6ff] hover:bg-[#4a9eff] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center space-x-2'
        >
          {isScanning ? (
            <Loader2 className='w-5 h-5 animate-spin' />
          ) : (
            <RefreshCw className='w-5 h-5' />
          )}
          <span>{isScanning ? 'Scanning...' : 'Scan Accounts'}</span>
        </button>

        {totalRentAvailable > 0 && (
          <div className='text-right'>
            <p className='text-sm text-gray-400'>Available to Claim</p>
            <p className='text-[#7ee787] text-xl font-bold'>
              {totalRentAvailable.toFixed(6)} SOL
            </p>
          </div>
        )}
      </div>

      {/* INFO BOX */}
      <div className='p-6 rounded-xl border border-blue-500/30 bg-blue-500/10 mb-8 flex space-x-4'>
        <Info className='w-6 h-6 text-blue-400 flex-shrink-0' />
        <div>
          <p className='font-semibold text-blue-200 mb-1'>How it works:</p>
          <p className='text-blue-300 text-sm leading-relaxed'>
            When you create token accounts on Solana, a small amount of SOL is
            locked as rent. If you close empty token accounts, you can reclaim
            this locked SOL back to your wallet.
          </p>
        </div>
      </div>

      {/* LIST */}
      <div>
        {/* ACCOUNT LIST */}
        {closedAccounts.length > 0 && (
          <div className='mt-6 space-y-4'>
            {/* ATA Filter Checkbox */}
            <div className='flex items-center space-x-3 p-4 rounded-lg border border-gray-700 bg-gray-800/30'>
              <input
                type='checkbox'
                id='includeATAs'
                checked={includeATAs}
                onChange={(e) => setIncludeATAs(e.target.checked)}
                className='w-4 h-4 text-[#58a6ff] bg-gray-700 border-gray-600 rounded focus:ring-[#58a6ff] focus:ring-2'
              />
              <label htmlFor='includeATAs' className='text-sm text-gray-300'>
                Include Associated Token Accounts (ATAs) - Auto-selects all
                accounts when checked
              </label>
            </div>

            {/* Selection Helper Text */}
            <div className='text-center text-xs text-gray-500 mb-4'>
              {selectedAccounts.size > 0 ? (
                <span>
                  {selectedAccounts.size} of {closedAccounts.length} accounts
                  selected
                  {!includeATAs &&
                    closedAccounts.filter((acc) => acc.isAssociated).length >
                      0 && (
                      <span className='text-[#58a6ff]'> (ATAs excluded)</span>
                    )}
                </span>
              ) : (
                <span>No accounts selected</span>
              )}
            </div>

            <h3 className='text-lg font-semibold text-white flex items-center space-x-2'>
              <Coins className='w-5 h-5 text-[#58a6ff]' />
              <span>Closeable Accounts</span>
              <span className='text-sm text-gray-400'>
                (
                {
                  closedAccounts.filter(
                    (account) => includeATAs || !account.isAssociated
                  ).length
                }{' '}
                found)
              </span>
            </h3>

            {closedAccounts
              .filter((account) => includeATAs || !account.isAssociated) // Filter ATAs based on checkbox
              .map((account) => (
                <label
                  key={account.accountAddress}
                  className='flex items-center space-x-3 p-4 rounded-lg border border-gray-700 bg-gray-800/30 hover:bg-gray-800/50 cursor-pointer transition-colors'
                >
                  <input
                    type='checkbox'
                    checked={selectedAccounts.has(account.accountAddress)}
                    onChange={() =>
                      handleAccountSelection(account.accountAddress)
                    }
                    className='w-4 h-4 text-[#58a6ff] bg-gray-700 border-gray-600 rounded focus:ring-[#58a6ff] focus:ring-2'
                  />
                  <div className='flex-1'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <p className='text-white font-medium'>
                          {account.name} ({account.symbol})
                        </p>
                        <p className='text-sm text-gray-400'>
                          {account.accountAddress}
                        </p>
                        {account.isAssociated && (
                          <span className='inline-block px-2 py-1 text-xs bg-blue-900/30 text-blue-400 rounded mt-1'>
                            ATA
                          </span>
                        )}
                      </div>
                      <div className='text-right'>
                        <p className='text-[#7ee787] font-semibold'>
                          {account.rentAmount.toFixed(6)} SOL
                        </p>
                        <p className='text-xs text-gray-400'>Rent</p>
                      </div>
                    </div>
                  </div>
                </label>
              ))}
          </div>
        )}

        {/* EMPTY STATE */}
        {closedAccounts.length === 0 && !isScanning && (
          <div className='text-center py-8 text-gray-500'>
            <p>No closeable token accounts found with rent to reclaim.</p>
            <p className='text-sm mt-2'>
              Try scanning again or check if you have any empty token accounts.
            </p>
          </div>
        )}

        {/* SCANNING STATE */}
        {isScanning && (
          <div className='text-center py-8 text-gray-500'>
            <div className='flex items-center justify-center space-x-2'>
              <Loader2 className='w-5 h-5 animate-spin' />
              <span>Scanning for closeable accounts...</span>
            </div>
          </div>
        )}
      </div>

      {/* SUMMARY */}
      {selectedAccounts.size > 0 && (
        <div className='mt-8 p-6 rounded-xl border border-gray-700 bg-gray-800/50'>
          <h3 className='text-lg font-semibold mb-4 text-white flex items-center space-x-2'>
            <Shield className='w-5 h-5 text-[#7ee787]' />
            <span>Claim Summary</span>
          </h3>

          <div className='space-y-3 text-sm'>
            <div className='flex justify-between'>
              <span className='text-gray-400'>Accounts to Close:</span>
              <span className='text-[#58a6ff] font-semibold'>
                {selectedAccounts.size}
              </span>
            </div>

            <div className='flex justify-between'>
              <span className='text-gray-400'>Total Rent Available:</span>
              <span className='text-white font-semibold'>
                {getTotalSelectedRent().toFixed(6)} SOL
              </span>
            </div>

            <div className='pt-3 border-t border-gray-600'>
              <div className='flex justify-between'>
                <span className='text-white font-semibold'>
                  You'll Receive:
                </span>
                <span className='text-[#7ee787] text-lg font-bold'>
                  {getTotalSelectedRent().toFixed(6)} SOL
                </span>
              </div>
              <p className='text-xs text-gray-500 mt-1'>
                Full amount after network fees
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SUCCESS MESSAGE */}
      {claimSuccess && (
        <div className='mt-6 p-4 rounded-xl border border-green-700 bg-green-900/20'>
          <div className='flex items-center space-x-2 text-green-400'>
            <CheckCircle className='w-5 h-5' />
            <span className='font-medium'>Success!</span>
          </div>
          <p className='mt-2 text-green-300'>{claimSuccess}</p>
        </div>
      )}

      {/* ERROR MESSAGE */}
      {claimError && (
        <div className='mt-6 p-4 rounded-xl border border-red-700 bg-red-900/20'>
          <div className='flex items-center space-x-2 text-red-400'>
            <AlertCircle className='w-5 h-5' />
            <span className='font-medium'>Error</span>
          </div>
          <p className='mt-2 text-red-300'>{claimError}</p>
        </div>
      )}

      {/* GENERAL ERROR MESSAGE */}
      {errorMessage && !claimSuccess && !claimError && (
        <div className='mt-6 p-4 rounded-xl border border-red-700 bg-red-900/20'>
          <div className='flex items-center space-x-2 text-red-400'>
            <AlertCircle className='w-5 h-5' />
            <span className='font-medium'>Scan Error</span>
          </div>
          <p className='mt-2 text-red-300'>{errorMessage}</p>
        </div>
      )}

      {/* CLAIM BUTTON */}
      {selectedAccounts.size > 0 && (
        <div className='mt-8'>
          <button
            onClick={handleClaimRent}
            disabled={
              isClaiming || selectedAccounts.size === 0 || claimSuccess !== ''
            }
            className='w-full bg-gradient-to-r from-[#58a6ff] to-[#7ee787] hover:from-[#4a9eff] hover:to-[#6dd877] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2'
          >
            {isClaiming ? (
              <>
                <Loader2 className='w-5 h-5 animate-spin' />
                <span>Claiming Rent...</span>
              </>
            ) : (
              <>
                <Zap className='w-5 h-5' />
                <span>Claim {getTotalSelectedRent().toFixed(6)} SOL</span>
              </>
            )}
          </button>

          {/* Success Message */}
          {claimSuccess && (
            <div className='mt-4 p-4 rounded-lg bg-green-900/20 border border-green-700 text-green-400 flex items-center space-x-2'>
              <CheckCircle className='w-5 h-5' />
              <span>{claimSuccess}</span>
            </div>
          )}

          {/* Error Message */}
          {claimError && (
            <div className='mt-4 p-4 rounded-lg bg-red-900/20 border border-red-700 text-red-400 flex items-center space-x-2'>
              <AlertCircle className='w-5 h-5' />
              <span>{claimError}</span>
            </div>
          )}

          {/* Fee Information (Subtle) */}
          <div className='mt-3 text-center'>
            <p className='text-xs text-gray-500'>
              Platform fees apply to support development and maintenance
            </p>
          </div>
        </div>
      )}

      {/* FOOTER INFO */}
      <div className='mt-8 text-center'>
        <p className='text-sm text-gray-500'>
          Powered by{' '}
          <span className='text-[#58a6ff] font-medium'>SolanaCraft</span> -{' '}
          Professional Solana Platform
        </p>
      </div>
    </div>
  );
};
