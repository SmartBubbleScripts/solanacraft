import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js'
import { getAssociatedTokenAddress, createAssociatedTokenAccountInstruction, createTransferInstruction, TOKEN_PROGRAM_ID } from '@solana/spl-token'

export interface TokenBalance {
  mint: string
  balance: number
  decimals: number
  symbol?: string
  name?: string
}

export interface ClaimTransaction {
  userWallet: PublicKey
  tokenMint: PublicKey
  amount: number
  commission: number
}

export class SolanaService {
  private connection: Connection

  constructor(rpcUrl: string) {
    this.connection = new Connection(rpcUrl, 'confirmed')
  }

  async getBalance(walletAddress: PublicKey): Promise<number> {
    try {
      const balance = await this.connection.getBalance(walletAddress)
      return balance / LAMPORTS_PER_SOL
    } catch (error) {
      console.error('Error getting balance:', error)
      throw error
    }
  }

  async getTokenBalance(walletAddress: PublicKey, tokenMint: PublicKey): Promise<TokenBalance | null> {
    try {
      const tokenAccount = await getAssociatedTokenAddress(tokenMint, walletAddress)
      const accountInfo = await this.connection.getTokenAccountBalance(tokenAccount)
      
      if (!accountInfo.value) return null

      return {
        mint: tokenMint.toString(),
        balance: Number(accountInfo.value.amount) / Math.pow(10, accountInfo.value.decimals),
        decimals: accountInfo.value.decimals
      }
    } catch (error) {
      console.error('Error getting token balance:', error)
      return null
    }
  }

  async createClaimTransaction(claimData: ClaimTransaction): Promise<Transaction> {
    const transaction = new Transaction()
    
    try {
      // Get the user's token account
      const userTokenAccount = await getAssociatedTokenAddress(
        claimData.tokenMint,
        claimData.userWallet
      )

      // Check if user has token account, if not create it
      const accountInfo = await this.connection.getAccountInfo(userTokenAccount)
      if (!accountInfo) {
        transaction.add(
          createAssociatedTokenAccountInstruction(
            claimData.userWallet,
            userTokenAccount,
            claimData.userWallet,
            claimData.tokenMint
          )
        )
      }

      // Add transfer instruction (this would be from your treasury to user)
      // In real implementation, you'd get the treasury account and add proper transfer logic
      
      return transaction
    } catch (error) {
      console.error('Error creating claim transaction:', error)
      throw error
    }
  }

  async sendTransaction(transaction: Transaction, wallet: any): Promise<string> {
    try {
      const latestBlockhash = await this.connection.getLatestBlockhash()
      transaction.recentBlockhash = latestBlockhash.blockhash
      transaction.feePayer = wallet.publicKey

      const signedTx = await wallet.signTransaction(transaction)
      const signature = await this.connection.sendRawTransaction(signedTx.serialize())
      
      await this.connection.confirmTransaction(signature, 'confirmed')
      return signature
    } catch (error) {
      console.error('Error sending transaction:', error)
      throw error
    }
  }

  async validateWallet(walletAddress: string): Promise<boolean> {
    try {
      const pubKey = new PublicKey(walletAddress)
      return PublicKey.isOnCurve(pubKey)
    } catch {
      return false
    }
  }
}

// Commission calculation
export function calculateCommission(amount: number, rate: number = 0.05): number {
  return amount * rate
}

// Network configuration
export const NETWORKS = {
  devnet: {
    name: 'Devnet',
    rpcUrl: 'https://api.devnet.solana.com',
    explorer: 'https://explorer.solana.com/?cluster=devnet'
  },
  testnet: {
    name: 'Testnet',
    rpcUrl: 'https://api.testnet.solana.com',
    explorer: 'https://explorer.solana.com/?cluster=testnet'
  },
  mainnet: {
    name: 'Mainnet',
    rpcUrl: 'https://api.mainnet-beta.solana.com',
    explorer: 'https://explorer.solana.com'
  }
}
