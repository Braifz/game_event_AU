// add the game address here and update the contract name if necessary
const gameAddr = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const contractName = "Game5";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  //contract game1
  // const tx = await game.win();

  //contract game2
  // const setX = await game.setX(25);
  // const setY = await game.setY(25);
  // const tx = await game.win();

  //contract game3
  // const tx = await game.win(45);

  // contract game4
  //const tx = await game.win(56);

  //contract game5
  const allowance = await game.giveMeAllowance(10000);
  const mint = await game.mint(10000);
  const tx = await game.win();

  // do whatever you need to do to win the game here:
  // const tx = await game.win();

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
