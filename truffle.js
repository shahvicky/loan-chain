// Allows us to use ES6 in our migrations and tests.
require('babel-register')

var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "erode local sign file float toward lunar improve twin goat loop devote"

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/G4It7F4mwc04USJdbpF9")
      },
      network_id: 3,
      gas: 970000
    }
  }
}
