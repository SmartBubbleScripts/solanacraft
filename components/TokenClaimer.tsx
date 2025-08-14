'use client';

import { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useConnection } from '@solana/wallet-adapter-react';
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  Transaction,
  SystemProgram,
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
  const [isLoading, setIsLoading] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [claimStatus, setClaimStatus] = useState<
    'idle' | 'processing' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [closedAccounts, setClosedAccounts] = useState<ClosedAccountInfo[]>([]);
  const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);
  const [totalRentAvailable, setTotalRentAvailable] = useState(0);

  const scanForClosedAccounts = async () => {
    if (!publicKey || !connection) return;
    setIsScanning(true);
    setErrorMessage('');

    try {
      console.log('🔍 Starting enhanced closeable account scan...');

      const closedAccountsList: ClosedAccountInfo[] = [];
      let totalRent = 0;

      // Method 1: Get all token accounts owned by the wallet
      console.log('📡 Method 1: Getting all token accounts...');
      const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
        publicKey,
        { programId: TOKEN_PROGRAM_ID }
      );

      console.log(`Found ${tokenAccounts.value.length} token accounts`);

      // Method 2: Check each account for closeability
      console.log('📡 Method 2: Analyzing accounts for closeability...');

      for (const { account, pubkey } of tokenAccounts.value) {
        try {
          const accountInfo = account.data.parsed.info;
          const tokenAmount = accountInfo.tokenAmount.uiAmount;
          const mint = accountInfo.mint;

          console.log(
            `🔍 Checking account ${pubkey.toString()}: ${tokenAmount} tokens`
          );

          // Check if account can be closed (has rent to reclaim)
          if (tokenAmount === 0) {
            console.log(`💰 Found empty account: ${pubkey.toString()}`);

            const standardTokenAccountSize = 165;
            const rentExemption =
              await connection.getMinimumBalanceForRentExemption(
                standardTokenAccountSize
              );
            const rentAmount = rentExemption / LAMPORTS_PER_SOL;

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
                `✅ Added closeable account: ${
                  tokenInfo.symbol
                } - ${rentAmount.toFixed(4)} SOL rent`
              );
            }
          }

          // Check for dust accounts (very small amounts that are essentially worthless)
          else if (tokenAmount > 0 && tokenAmount < 0.000001) {
            console.log(
              `💰 Found dust account: ${pubkey.toString()} with ${tokenAmount} tokens`
            );

            const standardTokenAccountSize = 165;
            const rentExemption =
              await connection.getMinimumBalanceForRentExemption(
                standardTokenAccountSize
              );
            const rentAmount = rentExemption / LAMPORTS_PER_SOL;

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

              // Check if this account is not already in our list
              const existingAccount = closedAccountsList.find(
                (acc) => acc.accountAddress === pubkey.toString()
              );
              if (!existingAccount) {
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
                  `✅ Added dust account: ${
                    tokenInfo.symbol
                  } - ${rentAmount.toFixed(4)} SOL rent`
                );
              }
            }
          }

          // Check for frozen/deactivated accounts
          else if (
            accountInfo.state === 'frozen' ||
            accountInfo.state === 'deactivated'
          ) {
            console.log(
              `❄️ Found frozen/deactivated account: ${pubkey.toString()}`
            );

            const standardTokenAccountSize = 165;
            const rentExemption =
              await connection.getMinimumBalanceForRentExemption(
                standardTokenAccountSize
              );
            const rentAmount = rentExemption / LAMPORTS_PER_SOL;

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

              // Check if this account is not already in our list
              const existingAccount = closedAccountsList.find(
                (acc) => acc.accountAddress === pubkey.toString()
              );
              if (!existingAccount) {
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
                  `✅ Added frozen account: ${
                    tokenInfo.symbol
                  } - ${rentAmount.toFixed(4)} SOL rent`
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

      console.log(
        `🎯 Scan complete! Found ${
          closedAccountsList.length
        } closeable accounts with ${totalRent.toFixed(4)} SOL total rent`
      );

      // If still no accounts found, try alternative scanning method
      if (closedAccountsList.length === 0) {
        console.log(
          '🔄 No closeable accounts found, trying alternative method...'
        );

        try {
          // Try using getProgramAccounts to find more accounts
          const allAccounts = await connection.getProgramAccounts(
            TOKEN_PROGRAM_ID,
            {
              filters: [
                {
                  dataSize: 165, // Standard token account size
                },
                {
                  memcmp: {
                    offset: 32, // Owner offset in token account
                    bytes: publicKey.toBase58(),
                  },
                },
              ],
            }
          );

          console.log(
            `Alternative method found ${allAccounts.length} accounts`
          );

          for (const account of allAccounts) {
            try {
              const accountInfo = await connection.getAccountInfo(
                account.pubkey
              );

              if (accountInfo && accountInfo.data.length > 0) {
                // Parse the account data to check if it's closeable
                // This is a more advanced method to find accounts
                console.log(
                  `🔍 Alternative: Found account ${account.pubkey.toString()}`
                );
              }
            } catch (error) {
              console.log(`⚠️ Error in alternative method:`, error);
            }
          }
        } catch (alternativeError) {
          console.error('❌ Alternative method failed:', alternativeError);
        }
      }

      setClosedAccounts(closedAccountsList);
      setTotalRentAvailable(totalRent);

      if (closedAccountsList.length === 0) {
        setErrorMessage(
          'No closeable token accounts found. This might mean: 1) All your token accounts have balances, 2) RPC endpoint issue, or 3) Network configuration problem. Check console for detailed logs.'
        );
      }
    } catch (error) {
      console.error('❌ Error during scanning:', error);
      setErrorMessage(
        `Scanning failed: ${
          error instanceof Error ? error.message : 'Unknown error'
        }. Check console for details.`
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
    setSelectedAccounts((prev) =>
      prev.includes(accountAddress)
        ? prev.filter((a) => a !== accountAddress)
        : [...prev, accountAddress]
    );
  };

  const handleClaimRent = async () => {
    if (!publicKey || selectedAccounts.length === 0 || !connection) return;
    setIsLoading(true);
    setClaimStatus('processing');
    setErrorMessage('');
    try {
      const selectedAccountInfos = closedAccounts.filter((a) =>
        selectedAccounts.includes(a.accountAddress)
      );
      const transaction = new Transaction();
      for (const accountInfo of selectedAccountInfos) {
        const closeInstruction = createCloseAccountInstruction(
          new PublicKey(accountInfo.accountAddress),
          publicKey,
          publicKey,
          []
        );
        transaction.add(closeInstruction);
      }
      const commissionWallet =
        process.env.NEXT_PUBLIC_COMMISSION_WALLET_ADDRESS;
      if (commissionWallet) {
        // New fee structure: 0.0007 SOL per wallet + 5% of client receive amount if >5 accounts
        const accountCount = selectedAccounts.length;
        let commissionAmount = 0.0007; // Base fee per wallet

        if (accountCount > 5) {
          // Calculate 5% of what the client will receive
          const totalRent = getTotalSelectedRent();
          const additionalCommission = totalRent * 0.05; // 5% of total rent
          commissionAmount += additionalCommission;
        }

        const transferInstruction = SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(commissionWallet),
          lamports: commissionAmount * LAMPORTS_PER_SOL,
        });
        transaction.add(transferInstruction);
      }
      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'confirmed');
      setClaimStatus('success');
      setClosedAccounts((prev) =>
        prev.filter((a) => !selectedAccounts.includes(a.accountAddress))
      );
      setSelectedAccounts([]);
    } catch (error) {
      setClaimStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to claim rent'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const getTotalSelectedRent = () => {
    return closedAccounts
      .filter((a) => selectedAccounts.includes(a.accountAddress))
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

      {/* SCAN BUTTON */}
      <div className='mb-6 flex justify-between items-center'>
        <button
          onClick={scanForClosedAccounts}
          disabled={isScanning}
          className='flex items-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#58a6ff] to-[#1f6feb] text-white font-semibold shadow-lg hover:opacity-90 disabled:opacity-50'
        >
          <RefreshCw
            className={`w-5 h-5 ${isScanning ? 'animate-spin' : ''}`}
          />
          <span>{isScanning ? 'Scanning...' : 'Scan Accounts'}</span>
        </button>
        {totalRentAvailable > 0 && (
          <div className='flex items-center space-x-2 text-[#7ee787]'>
            <DollarSign className='w-5 h-5' />
            <span className='font-mono text-lg'>
              {totalRentAvailable.toFixed(4)} SOL available
            </span>
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
        <h3 className='text-lg font-semibold mb-4 text-white flex items-center space-x-2'>
          <Coins className='w-5 h-5 text-[#58a6ff]' />
          <span>Closed Token Accounts</span>
          {closedAccounts.length > 0 && (
            <span className='text-sm text-gray-400'>
              ({closedAccounts.length} found)
            </span>
          )}
        </h3>
        {closedAccounts.length === 0 ? (
          <div className='text-center py-8 text-gray-500'>
            {isScanning ? (
              <div className='flex items-center justify-center space-x-2'>
                <Loader2 className='w-5 h-5 animate-spin' />
                <span>Scanning for closed accounts...</span>
              </div>
            ) : (
              <div>
                <p>No closed token accounts found with rent to reclaim.</p>
                <p className='text-sm mt-2'>
                  Try scanning again or check if you have any empty token
                  accounts.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className='space-y-4'>
            {closedAccounts.map((account) => (
              <label
                key={account.accountAddress}
                className='flex items-center p-5 rounded-xl border border-gray-700 hover:border-[#58a6ff] hover:bg-gray-900 transition cursor-pointer'
              >
                <input
                  type='checkbox'
                  checked={selectedAccounts.includes(account.accountAddress)}
                  onChange={() =>
                    handleAccountSelection(account.accountAddress)
                  }
                  className='w-5 h-5 text-[#58a6ff] rounded focus:ring-[#58a6ff]'
                />
                <div className='ml-4 flex-1 flex justify-between items-center'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-12 h-12 bg-gradient-to-r from-[#58a6ff] to-[#1f6feb] rounded-lg flex items-center justify-center text-white font-bold'>
                      {account.symbol[0]}
                    </div>
                    <div>
                      <div className='font-semibold text-white'>
                        {account.symbol}
                      </div>
                      <div className='text-gray-400 text-sm'>
                        {account.name}
                      </div>
                      <div className='text-xs text-gray-500'>
                        {account.isAssociated
                          ? 'Associated Token Account'
                          : 'Token Account'}
                      </div>
                    </div>
                  </div>
                  <div className='text-right'>
                    <span className='text-[#7ee787] font-mono'>
                      {account.rentAmount.toFixed(4)} SOL
                    </span>
                    <p className='text-xs text-gray-500'>Locked Rent</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* SUMMARY */}
      {selectedAccounts.length > 0 && (
        <div className='mt-8 p-6 rounded-xl border border-gray-700 bg-gray-800/50'>
          <h3 className='text-lg font-semibold mb-4 text-white flex items-center space-x-2'>
            <Shield className='w-5 h-5 text-[#7ee787]' />
            <span>Claim Summary</span>
          </h3>
          <div className='space-y-3'>
            <div className='flex justify-between items-center py-2 border-b border-gray-600'>
              <span className='text-gray-400'>Accounts to Close:</span>
              <span className='text-[#58a6ff] font-semibold'>
                {selectedAccounts.length}
              </span>
            </div>
            <div className='flex justify-between items-center py-2 border-b border-gray-600'>
              <span className='text-gray-400'>Total Rent Available:</span>
              <span className='text-white font-semibold'>
                {getTotalSelectedRent().toFixed(4)} SOL
              </span>
            </div>
            <div className='flex justify-between items-center py-2 border-b border-gray-600'>
              <span className='text-gray-400'>Platform Fee:</span>
              <span className='text-white font-semibold'>
                {(() => {
                  const accountCount = selectedAccounts.length;
                  if (accountCount <= 5) {
                    return '0.0007 SOL';
                  } else {
                    const totalRent = getTotalSelectedRent();
                    const additionalCommission = totalRent * 0.05;
                    const totalFee = 0.0007 + additionalCommission;
                    return `${totalFee.toFixed(4)} SOL`;
                  }
                })()}
              </span>
            </div>
            <div className='flex justify-between items-center py-2 border-b border-gray-600'>
              <span className='text-gray-400'>Network Fee:</span>
              <span className='text-white font-semibold'>~0.000005 SOL</span>
            </div>
            <div className='pt-2'>
              <div className='flex justify-between items-center'>
                <span className='text-white font-semibold'>
                  You'll Receive:
                </span>
                <span className='text-[#7ee787] text-lg font-bold'>
                  {(() => {
                    const accountCount = selectedAccounts.length;
                    let commissionAmount = 0.0007; // Base fee per wallet
                    if (accountCount > 5) {
                      const totalRent = getTotalSelectedRent();
                      const additionalCommission = totalRent * 0.05;
                      commissionAmount += additionalCommission;
                    }
                    return (
                      getTotalSelectedRent() -
                      commissionAmount -
                      0.000005
                    ).toFixed(4);
                  })()}{' '}
                  SOL
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STATUS MESSAGES */}
      {claimStatus === 'success' && (
        <div className='mt-6 p-4 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center space-x-3'>
          <CheckCircle className='w-5 h-5 text-green-400' />
          <span className='text-green-200'>
            Rent claimed successfully! Your SOL has been returned to your
            wallet.
          </span>
        </div>
      )}

      {claimStatus === 'error' && (
        <div className='mt-6 p-4 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center space-x-3'>
          <AlertCircle className='w-5 h-5 text-red-400' />
          <span className='text-red-200'>{errorMessage}</span>
        </div>
      )}

      {errorMessage && !claimStatus && (
        <div className='mt-6 p-4 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center space-x-3'>
          <AlertCircle className='w-5 h-5 text-red-400' />
          <span className='text-red-200'>{errorMessage}</span>
        </div>
      )}

      {/* CLAIM BUTTON */}
      {selectedAccounts.length > 0 && (
        <div className='mt-8'>
          <button
            onClick={handleClaimRent}
            disabled={
              isLoading ||
              selectedAccounts.length === 0 ||
              claimStatus === 'success'
            }
            className='w-full flex items-center justify-center space-x-3 px-6 py-4 rounded-xl bg-gradient-to-r from-[#7ee787] to-green-500 text-gray-900 font-bold shadow-lg hover:opacity-90 disabled:opacity-50'
          >
            {isLoading ? (
              <>
                <Loader2 className='w-5 h-5 animate-spin' />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Zap className='w-5 h-5' />
                <span>
                  Claim Rent ({getTotalSelectedRent().toFixed(4)} SOL)
                </span>
              </>
            )}
          </button>
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
