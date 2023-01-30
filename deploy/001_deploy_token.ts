// This adds the type from hardhat runtime environment.
import {HardhatRuntimeEnvironment} from 'hardhat/types';
// This adds the type that a deploy function is expected to fulfill.
import {DeployFunction} from 'hardhat-deploy/types'; 

// the deploy function receives the hardhat runtime env as an argument
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    // we get the deployments and getNamedAccounts which are provided by hardhat-deploy. 
    const {deployments, getNamedAccounts} = hre;
    // The deployments field itself contains the deploy function. 
    const {deploy} = deployments; 
    // Fetch the accounts. These can be configured in hardhat.config.ts as explained above.
    const {deployer, tokenOwner0, tokenOwner1} = await getNamedAccounts(); 
    console.log('Argument List: '+tokenOwner1);
    // This will create a deployment called 'Token'. 
    // By default it will look for an artifact with the same name. 
    // The 'contract' option allows you to use a different artifact.
    await deploy('MyToken'  /* This is the name of the deployed smart contract, refer to getContract("MyToken") in test*/, { 
        contract: 'Token',  // name of the token source
        from: deployer,     // Deployer will be performing the deployment transaction.
        args: [tokenOwner1], // tokenOwner is the address used as the first argument to the Token contract's constructor.
        log: true,          // Display the address and gas used in the console (not when run in test though).
    });
};
export default func;
func.tags = ['EECE571G2022W2']; // This sets up a tag so you can use it in fixture. Refer to deployments.fixture(["ABC"])