const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/0ed5f47c1bd24b2b92a8ecf2c6e06296`
);
 
const querryBlockchain=async()=>{
    const block=await provider.getBlockNumber();
    console.log("Current Block_number",block);

    const balance= await provider.getBalance("0xd22b8c233111dba79674bb274520bd9a4bc6e6d0");
    console.log("Account balance in BN:",balance);

    const balanceEth =ethers.utils.formatEther(balance);
    console.log("Account balance in ether:",balanceEth);
}
querryBlockchain()
// 0x0c840a67f229df4346625aad53ed802525ef5e2f

// abi 
