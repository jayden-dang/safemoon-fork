const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKeys = ['0x + PRIVATE_KEY'];
module.exports = {
  networks: {
    bsc: {
      provider: () => new HDWalletProvider(
        privateKeys,
        'https://bsc-dataseed.binance.org/'
      ),
      gasPrice: 5 * 10 ** 9,
      gas: 8164631,
      network_id: 56,
      skipDryRun: true
    },
    bscTestnet: {
      provider: () => new HDWalletProvider(
        privateKeys,
        'https://data-seed-prebsc-1-s1.binance.org:8545'
      ),
      gas: 6897127,
      network_id: 97,
      skipDryRun: true
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.12",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan: 'BSCSCAN API KEY'
  }
};
