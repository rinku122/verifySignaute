import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "hardhat-typechain";
import "hardhat-gas-reporter";
import "@nomiclabs/hardhat-etherscan";

import dotenv from "dotenv";
dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

export default {
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: {
        mnemonic: process.env.TESTNET_MNEMONIC,
      },
    },
    testnet: {
      url: process.env.BINANCE_RPC,
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {
        mnemonic: process.env.TESTNET_MNEMONIC,
      },
    },
    hardhat: {
      accounts: {
        mnemonic: process.env.TESTNET_MNEMONIC,
        count: 1500,
      },
      chainId: 1337,
      gas: 10000000,
      gasPrice: 1,
      blockGasLimit: 10000000,
      allowUnlimitedContractSize: true,
    },
  },
  solidity: {
    version: "0.8.13",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
  gasReporter: {
    enabled: false,
  },
  mocha: {
    timeout: 2000000,
  },
};
