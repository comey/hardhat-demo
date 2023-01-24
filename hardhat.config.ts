import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import {node_url, accounts} from './utils/network';
const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.17',
  },
  networks: {
    mumbai: {
      url: node_url('mumbai'),
      accounts: accounts('mumbai'),
    },
  },
  namedAccounts: {
    deployer: 0,
    tokenOwner: 1,
  },
  paths: {
    sources: 'src',
  },
};
export default config;