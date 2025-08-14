// Test script to verify Alchemy RPC endpoint
// Run with: node test-rpc.js

const https = require('https');

const ALCHEMY_RPC_URL =
  'https://solana-mainnet.g.alchemy.com/v2/pdo98slNo1UDfhpnC-r7J';

const testRequest = {
  id: 1,
  jsonrpc: '2.0',
  method: 'getBlockProduction',
};

const postData = JSON.stringify(testRequest);

const options = {
  hostname: 'solana-mainnet.g.alchemy.com',
  port: 443,
  path: '/v2/pdo98slNo1UDfhpnC-r7J',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': postData.length,
  },
};

console.log('🧪 Testing Alchemy RPC endpoint...');
console.log('URL:', ALCHEMY_RPC_URL);
console.log('Request:', testRequest);

const req = https.request(options, (res) => {
  console.log('📡 Response Status:', res.statusCode);
  console.log('📡 Response Headers:', res.headers);

  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const response = JSON.parse(data);
      console.log('✅ Success! Response:');
      console.log(JSON.stringify(response, null, 2));

      if (response.result) {
        console.log('🎉 Your Alchemy RPC endpoint is working perfectly!');
      } else {
        console.log('⚠️  Response received but no result data');
      }
    } catch (error) {
      console.log('❌ Failed to parse response:', error);
      console.log('Raw response:', data);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Request failed:', error);
});

req.write(postData);
req.end();
