import React from "react";
import { useState } from "react";
import { ethers } from "ethers";
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/0ed5f47c1bd24b2b92a8ecf2c6e06296`
);
const Home = () => {
  const [ethBalance, setEthBalance] = useState(0);
  const [block, setBlock] = useState(0);
  const [getBlock, setgetBlock] = useState({});

  let time=getBlock.timestamp;
 
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const getBal = () => {
    // console.log(`this is`, text);
    const querryBlockchain = async () => {
        const block = await provider.getBlockNumber();
        console.log("Current Block_number", block);
        setBlock(block);

      const balance = await provider.getBalance(text.toString());
      console.log("Account balance in BN:", balance);
      
      const gasPrice = await provider.getGasPrice();
      console.log("Account balance in BN:", gasPrice);

      const balanceEth = ethers.utils.formatEther(balance);
      console.log("Account balance in ether:", balanceEth);
      setEthBalance(balanceEth);

      const blockDet = await provider.getBlockWithTransactions();
      console.log(blockDet);
      setgetBlock(blockDet);
    };
    querryBlockchain();
  };

  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h1 id="MainHeading">Enter your Address Here</h1>
      
      <input
        style={{ textAlign: "center", fontSize: "25px", marginTop: "5px" }}
        type="text"
        id="inputPassword5"
        value={text}
        onChange={handleOnChange}
        class="form-control"
        aria-describedby="passwordHelpBlock"
      />
      <div id="passwordHelpBlock" class="form-text">
        Your Address must be 42 characters long, A private key is like a
        password — a string of letters and numbers — that allows you to access
        and manage your crypto funds.
      </div>
      <button
        style={{ marginTop: "15px" }}
        type="button"
        onClick={getBal}
        className="btn btn-primary"
      >
        Load Balance
      </button>
      <div class="alert alert-success my-3" role="alert"><i class="far fa-check-circle"></i> Account Balance for Address: <a href="/" className="alert-link" >{text}</a></div>
      {/* Information here */}

      <div class="row row-cols-1 row-cols-md-3 my-5 mb-3 text-center">
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">TOKEN QUANTITY</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
              {ethBalance} <small class="text-muted fw-light"></small>
              </h1>
              
             
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Block Number</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
               {block}<small class="text-muted fw-light"></small>
              </h1>
             
              
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm border-primary">
            <div class="card-header py-3 text-bg-primary border-primary">
              <h4 class="my-0 fw-normal">Timestamp</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
             {time==null ? 0 :time}<small class="text-muted fw-light"></small>
              </h1>
              
              
            </div>
          </div>
        </div>
      </div>

      {/* <h1 style={{ marginTop: "25px" }}>Enter your Address Here</h1> */}
     

      
      <h5>Preview: "{text}"</h5>
    </div>
  <footer>
    <h5>Copyright © 2023 Dhaval Saxena</h5>
  </footer>
    </>    
  );
};
export default Home;
