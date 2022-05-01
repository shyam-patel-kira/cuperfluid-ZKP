const hre = require("hardhat");

async function main() {
	const Test = await hre.ethers.getContractFactory("Test");
	const host = "0xEB796bdb90fFA0f28255275e16936D25d3418603";
	const cfa = "0x49e565Ed1bdc17F3d220f72DF0857C26FA83F873";
	const test = await Test.deploy(host, cfa);
	await test.deployed();
	console.log("Test deployed to: ", test.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
