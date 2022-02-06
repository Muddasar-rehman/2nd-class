
import { ethers } from "hardhat";
import { Greeter, Greeter__factory } from "../typechain";

async function main() {

  const Greeter:Greeter__factory = await ethers.getContractFactory("Greeter");
  const greeter:Greeter = await Greeter.deploy("Hello, Hardhat!");

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);

const result =  await greeter.greet();

console.log("Result = ", result);


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
