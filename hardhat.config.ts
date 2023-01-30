import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import '@nomiclabs/hardhat-etherscan';
import {node_url, accounts, apiKey} from './utils/network';
const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.17',
  },
  networks: {
    polygonMumbai: {
      url: node_url('mumbai'),
      accounts: accounts('mumbai'),
    },
  },
  etherscan: {
    apiKey: {
        polygonMumbai: apiKey('mumbai'),
    }
  },
  namedAccounts: {
    deployer: 0,
    tokenOwner0: 1,
    tokenOwner1: 2,
  },
  paths: {
    sources: 'src',
  },
};
export default config;