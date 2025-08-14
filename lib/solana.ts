import {
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';
import {
  getAssociatedTokenAddress,
  createAssociatedTokenAccountInstruction,
  createTransferInstruction,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';

export interface TokenBalance {
  mint: string;
  balance: number;
  decimals: number;
  symbol?: string;
  name?: string;
}

export interface ClaimTransaction {
  userWallet: PublicKey;
  tokenMint: PublicKey;
  amount: number;
  commission: number;
}

export class SolanaService {
  private connection: Connection;

  constructor(rpcUrl: string) {
    this.connection = new Connection(rpcUrl, 'confirmed');
  }

  async getBalance(walletAddress: PublicKey): Promise<number> {
    try {
      const balance = await this.connection.getBalance(walletAddress);
      return balance / LAMPORTS_PER_SOL;
    } catch (error) {
      console.error('Error getting balance:', error);
      throw error;
    }
  }

  async getTokenBalance(
    walletAddress: PublicKey,
    tokenMint: PublicKey
  ): Promise<TokenBalance | null> {
    try {
      const tokenAccount = await getAssociatedTokenAddress(
        tokenMint,
        walletAddress
      );
      const accountInfo = await this.connection.getTokenAccountBalance(
        tokenAccount
      );

      if (!accountInfo.value) return null;

      return {
        mint: tokenMint.toString(),
        balance:
          Number(accountInfo.value.amount) /
          Math.pow(10, accountInfo.value.decimals),
        decimals: accountInfo.value.decimals,
      };
    } catch (error) {
      console.error('Error getting token balance:', error);
      return null;
    }
  }

  async createClaimTransaction(
    claimData: ClaimTransaction
  ): Promise<Transaction> {
    const transaction = new Transaction();

    try {
      // Get the user's token account
      const userTokenAccount = await getAssociatedTokenAddress(
        claimData.tokenMint,
        claimData.userWallet
      );

      // Check if user has token account, if not create it
      const accountInfo = await this.connection.getAccountInfo(
        userTokenAccount
      );
      if (!accountInfo) {
        transaction.add(
          createAssociatedTokenAccountInstruction(
            claimData.userWallet,
            userTokenAccount,
            claimData.userWallet,
            claimData.tokenMint
          )
        );
      }

      // Add transfer instruction (this would be from your treasury to user)
      // In real implementation, you'd get the treasury account and add proper transfer logic

      return transaction;
    } catch (error) {
      console.error('Error creating claim transaction:', error);
      throw error;
    }
  }

  async sendTransaction(
    transaction: Transaction,
    wallet: any
  ): Promise<string> {
    try {
      const latestBlockhash = await this.connection.getLatestBlockhash();
      transaction.recentBlockhash = latestBlockhash.blockhash;
      transaction.feePayer = wallet.publicKey;

      const signedTx = await wallet.signTransaction(transaction);
      const signature = await this.connection.sendRawTransaction(
        signedTx.serialize()
      );

      await this.connection.confirmTransaction(signature, 'confirmed');
      return signature;
    } catch (error) {
      console.error('Error sending transaction:', error);
      throw error;
    }
  }

  async validateWallet(walletAddress: string): Promise<boolean> {
    try {
      const pubKey = new PublicKey(walletAddress);
      return PublicKey.isOnCurve(pubKey);
    } catch {
      return false;
    }
  }
}

// Fixed commission per closed account (0.0007 SOL)
export const FIXED_COMMISSION_PER_ACCOUNT = 0.0007;
export function calculateCommission(accountCount: number): number {
  return accountCount * FIXED_COMMISSION_PER_ACCOUNT;
}

// Network configuration with production-ready RPC endpoints
export const NETWORKS = {
  devnet: {
    name: 'Devnet',
    rpcUrl: 'https://api.devnet.solana.com',
    explorer: 'https://explorer.solana.com/?cluster=devnet',
  },
  testnet: {
    name: 'Testnet',
    rpcUrl: 'https://api.testnet.solana.com',
    explorer: 'https://explorer.solana.com/?cluster=testnet',
  },
  mainnet: {
    name: 'Mainnet',
    // Production RPC endpoints with fallbacks
    rpcUrls: [
      // Primary: Helius (free tier - 100M requests/month)
      process.env.NEXT_PUBLIC_HELIUS_RPC_URL ||
        'https://rpc.helius.xyz/?api-key=YOUR_API_KEY',
      // Fallback 1: QuickNode (free tier - 3M requests/month)
      process.env.NEXT_PUBLIC_QUICKNODE_RPC_URL ||
        'https://your-endpoint.solana-mainnet.quiknode.pro/YOUR_QUICKNODE_API_KEY/',
      // Fallback 2: Alchemy (free tier - 300M compute units/month)
      process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL ||
        'https://solana-mainnet.g.alchemy.com/v2/pdo98slNo1UDfhpnC-r7J',
      // Last resort: Public RPC (not recommended for production)
      'https://api.mainnet-beta.solana.com',
    ],
    explorer: 'https://explorer.solana.com',
  },
};

// Production-ready connection manager
export class ProductionConnectionManager {
  private connections: Connection[] = [];
  private currentIndex = 0;
  private lastSwitchTime = 0;
  private switchThreshold = 60000; // 1 minute

  constructor(network: 'mainnet' | 'testnet' | 'devnet' = 'mainnet') {
    const config = NETWORKS[network];

    if (network === 'mainnet' && 'rpcUrls' in config) {
      // Create connections for all RPC endpoints
      config.rpcUrls.forEach((url) => {
        if (url && !url.includes('YOUR_API_KEY')) {
          this.connections.push(new Connection(url, 'confirmed'));
        }
      });
    } else if ('rpcUrl' in config) {
      // Single RPC for devnet/testnet
      this.connections.push(new Connection(config.rpcUrl, 'confirmed'));
    }
  }

  getConnection(): Connection {
    if (this.connections.length === 0) {
      throw new Error('No RPC connections available');
    }
    return this.connections[this.currentIndex];
  }

  async switchConnection(): Promise<void> {
    if (this.connections.length <= 1) return;

    const now = Date.now();
    if (now - this.lastSwitchTime < this.switchThreshold) return;

    this.currentIndex = (this.currentIndex + 1) % this.connections.length;
    this.lastSwitchTime = now;
    console.log(`Switched to RPC endpoint ${this.currentIndex + 1}`);
  }

  async testConnections(): Promise<Connection[]> {
    const workingConnections: Connection[] = [];

    for (const connection of this.connections) {
      try {
        await connection.getLatestBlockhash();
        workingConnections.push(connection);
      } catch (error) {
        console.warn('RPC endpoint failed:', error);
      }
    }

    return workingConnections;
  }
}

// Enhanced Solana service with production features
export class ProductionSolanaService {
  private connectionManager: ProductionConnectionManager;
  private retryAttempts = 3;
  private retryDelay = 1000; // 1 second

  constructor(network: 'mainnet' | 'testnet' | 'devnet' = 'mainnet') {
    this.connectionManager = new ProductionConnectionManager(network);
  }

  private async executeWithRetry<T>(
    operation: (connection: Connection) => Promise<T>
  ): Promise<T> {
    let lastError: Error;

    for (let attempt = 1; attempt <= this.retryAttempts; attempt++) {
      try {
        const connection = this.connectionManager.getConnection();
        return await operation(connection);
      } catch (error) {
        lastError = error as Error;
        console.warn(`Attempt ${attempt} failed:`, error);

        if (attempt < this.retryAttempts) {
          await this.connectionManager.switchConnection();
          await new Promise((resolve) =>
            setTimeout(resolve, this.retryDelay * attempt)
          );
        }
      }
    }

    throw lastError!;
  }

  async getBalance(walletAddress: PublicKey): Promise<number> {
    return this.executeWithRetry(async (connection) => {
      const balance = await connection.getBalance(walletAddress);
      return balance / LAMPORTS_PER_SOL;
    });
  }

  async getTokenAccountsByOwner(
    owner: PublicKey,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ) {
    return this.executeWithRetry(async (connection) => {
      return connection.getParsedTokenAccountsByOwner(owner, { programId });
    });
  }

  async getAccountInfo(pubkey: PublicKey) {
    return this.executeWithRetry(async (connection) => {
      return connection.getAccountInfo(pubkey);
    });
  }

  async getMinimumBalanceForRentExemption(dataLength: number): Promise<number> {
    return this.executeWithRetry(async (connection) => {
      return connection.getMinimumBalanceForRentExemption(dataLength);
    });
  }

  async getProgramAccounts(programId: PublicKey, configOrCommitment?: any) {
    return this.executeWithRetry(async (connection) => {
      return connection.getProgramAccounts(programId, configOrCommitment);
    });
  }
}
