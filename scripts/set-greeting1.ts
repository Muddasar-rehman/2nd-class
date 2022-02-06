
import { ContractTransaction } from "ethers";
import { ethers } from "hardhat";
import { Greeter, Greeter__factory } from "../typechain";

async function main() {

  const Greeter:Greeter__factory = await ethers.getContractFactory("Greeter");
  const greeter:Greeter = await Greeter.attach("0x2E1742766F9B74dC046E9069eBfd78aE0412B710")



  console.log("Greeter Address:", greeter.address);

const txt:ContractTransaction =  await greeter.setGreeting("New Greetings")


console.log("Result = ", txt);


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
