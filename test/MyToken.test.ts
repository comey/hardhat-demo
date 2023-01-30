import {expect} from "./chai-setup";

import {ethers, deployments, getNamedAccounts, getUnnamedAccounts} from 'hardhat';

describe("Token contract", function() {
  it("Deployment should assign the total supply of tokens to the owner", async function() {
    await deployments.fixture(["EECE571G2022W2"]);
    const {tokenOwner1} = await getNamedAccounts();
    const myToken = await ethers.getContract("MyToken");
    const ownerBalance = await myToken.balanceOf(tokenOwner1);
    const supply = await myToken.totalSupply();
    expect(ownerBalance).to.equal(supply);
  });

  it("Deployment should assign the total supply of tokens to the owner", async function() {
    await deployments.fixture(["EECE571G2022W2"]);
    const {tokenOwner1} = await getNamedAccounts();
    const users = await getUnnamedAccounts();
    const TokenAsOwner = await ethers.getContract("MyToken", tokenOwner1);
    await TokenAsOwner.transfer(users[0], 50);
    expect(await TokenAsOwner.balanceOf(users[0])).to.equal(50);

    const TokenAsUser0 = await ethers.getContract("MyToken", users[0]);
    await TokenAsUser0.transfer(users[1], 50);
    expect(await TokenAsOwner.balanceOf(users[1])).to.equal(50);
  });
});