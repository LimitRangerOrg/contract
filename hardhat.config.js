require("@nomiclabs/hardhat-waffle");
// require('hardhat-dependency-compiler');
require("@tenderly/hardhat-tenderly")
require('hardhat-abi-exporter');
require('hardhat-docgen');
require("@nomiclabs/hardhat-etherscan");

const RINKEBY_PK = process.env.RINKEBY_PK || "d0000000d0000000d0000000d0000000d0000000d0000000d0000000d0000000";
const ARBONE_PK = process.env.MAINK || "d0000000d0000000d0000000d0000000d0000000d0000000d0000000d0000000"
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY || ""
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      }
    }
  },
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${RINKEBY_PK}`]
    },
    rinkebyArb: {
      url: 'https://rinkeby.arbitrum.io/rpc',
      accounts: [`${RINKEBY_PK}`],
      chainId: 421611
    },
    arbitrum: {
      url: 'https://arb1.arbitrum.io/rpc',
      accounts: [`${ARBONE_PK}`],
      chainId: 42161
    },
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
        blockNumber: 13776523
      },
      mining: {
        auto: true,
        //interval: 6000
      }
    }  
  }, 
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
      arbitrumTestnet: `${ETHERSCAN_API_KEY}`
    }
  },
  tenderly: {
    username: "limitranger",
    project: "limitranger"
  },
  docgen: {
    path: './docs',
    clear: true,
    runOnCompile: true,
  },
};
