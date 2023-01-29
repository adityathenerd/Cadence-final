import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Alchemy, Network } from "alchemy-sdk";

import seat from "../images/area.png"
import Select from "react-select";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ticket.css";
// import ERC721 from "./ERC721.json"
// import Web3 from 'web3';


import Opensea from "../images/opensea.png";
import { ticketData } from "../helpers/ticketList";

import { setWalletAddress} from "../App";



// const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
// web3.eth.getAccounts().then(console.log);

// async function holdsToken(contractAddress) {
//   const ERC721 = require()
//   const provider = await web3Modal.connect() /* This example uses the web3Modal package */
//   const web3 = new Web3(provider)
//   const accounts = await Web3.eth.getAccounts()
//   const currentWallet = Web3.utils.toChecksumAddress(accounts[0])

//   const contract = new web3.eth.Contract(ERC721.abi, contractAddress)

//   const result = await contract.methods.balanceOf(currentWallet).call()

//   return parseInt(result) && parseInt(result) > 0

const walletAddress = "0xdB91ca1d742067F6084aE8B7043f5dA554153458";
const walletAddress1 = "0x3014587De8A581fEc5A5cf6DA4f26F556A3E53bD";
const settings = {
    apiKey: "arfKaf-TaBVCJ2ppMWVYs8W0BEoW7pTf",
    network: Network.MATIC_MUMBAI,
  };
  const alchemy = new Alchemy(settings);

const Seats = [
    { label: "AAS PAAS", value: 445 },
    { label: "VIP", value: 34 },
    { label: "MEHFOOZ", value: 67 }
  ];

let res = Seats[0].value;

const Ticket = () => {
    const {state: ticket} = useLocation();

    return(
        <>
        <div className="topBan"></div>
        <div className="ticketContent">
        <img
        src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-ritviz-mimmi-album-launch-tour-0-2022-11-24-t-5-44-12.jpg"
        alt="ticketCover"
        className="ticketCover"
        ></img>
        <div className="ticketDeets">
            <div className="title">Ritviz Mimmi Album Launch Tour</div>
            <div className="artist">Ritviz</div>

            <img
            src={ seat }
            className="seatCover"></img>
            <div className="drop">
                <Select options={Seats} />
            <div className="bookButton"
            onClick={()=> alchemy.nft.getNftsForOwner(walletAddress).then(
                window.open("https://testnets.opensea.io/assets/mumbai/0x2953399124f0cbb46d2cbacd8a89cf0599974963/19192082966102074047977884455194935086086912924478455273719047670259142099144")
            )}
            >BOOK</div>        
        </div>
        </div>
        </div>
        
        </>
    );
};

export default Ticket;