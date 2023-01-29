import React from "react";
import { useAlbum } from "../hooks/useAlbum";
import { useLocation } from "react-router";

import "./Album.css";

import Opensea from "../images/opensea.png";
import Discord from "../images/discord.png";
import { ClockCircleOutlined } from "@ant-design/icons";



const bears = 
    [
      {
          "token_address": "0x6e98f571a9595c0d4f9a2b638d01cea8d90d0f6a",
          "token_id": "2",
          "amount": "1",
          "contract_type": "ERC721",
          "name": "Me & Me",
          "symbol": "CT",
          "token_uri": "https://ipfs.moralis.io:2053/ipfs/QmVViuPPwg4f7fXWSuskyERAay4d8gQDbFtDd5NeT8tm7o/metadata/1.json",
          "metadata":  "{\"image\":\"ipfs://QmSr2LtHKd59DURtC2KcZEZFz7my4C9WzEwVP1vWVPogGZ/media/0\",\"name\":\"Me & Me\",\"animation_url\":\"ipfs://QmSr2LtHKd59DURtC2KcZEZFz7my4C9WzEwVP1vWVPogGZ/media/2\",\"duration\":\"4:35\",\"artist\":\"King\",\"year\":\"2022\"}",
          "synced_at": "2022-12-28T17:38:59.691Z",
      },
      {
          "token_address": "0x2FA0Bc72316057e9CE31874EA631155FFB09442a",
          "token_id": "1",
          "amount": "1",
          "contract_type": "ERC721",
          "name": "Maan Meri Jaan",
          "symbol": "CT",
          "token_uri": "https://ipfs.moralis.io:2053/ipfs/Qmd8yiDjJpQSyr9V28hUCmogA8Jh9vtEFL6wwiEwwAeqmz/metadata/0.json",
          "metadata": "{\"image\":\"ipfs://QmSr2LtHKd59DURtC2KcZEZFz7my4C9WzEwVP1vWVPogGZ/media/0\",\"name\":\"Maan Meri Jaan\",\"animation_url\":\"ipfs://QmSr2LtHKd59DURtC2KcZEZFz7my4C9WzEwVP1vWVPogGZ/media/1\",\"duration\":\"3:14\",\"artist\":\"King\",\"year\":\"2022\"}",
          "synced_at": "2022-12-28T17:38:59.691Z",
      }
      
];

// async function holdsToken(contractAddress) {
//   const ERC721 = require()
//   const provider = await web3Modal.connect() /* This example uses the web3Modal package */
//   const web3 = new Web3(provider)
//   const accounts = await web3.eth.getAccounts()
//   const currentWallet = Web3.utils.toChecksumAddress(accounts[0])

//   const contract = new web3.eth.Contract(ERC721.abi, contractAddress)

//   const result = await contract.methods.balanceOf(currentWallet).call()

//   return parseInt(result) && parseInt(result) > 0
// }

const Album = ({ setNftAlbum }) => {
  const { state: albumDetails } = useLocation();
  const { album } = useAlbum(albumDetails.contract);

  return (
    <>
      <div className="albumContent">
        <div className="topBan">
          <img
            src={albumDetails.image}
            alt="albumcover"
            className="albumCover"
          ></img>
          <div className="albumDeets">
            <div>ALBUM</div>
            <div className="title">{albumDetails.title}</div>
            <div className="artist">
              {album && JSON.parse(album[0].metadata).artist}
            </div>
            <div>
              {album && JSON.parse(album[0].metadata).year} •{" "}
              {album && album.length} Songs
            </div>
          </div>
        </div>
        <div className="topBan">
          <div className="playButton" onClick={() => setNftAlbum(bears)}>
            PLAY
          </div>
          <div
            className="openButton"
            onClick={() =>
              window.open(
                `https://testnets.opensea.io/assets/mumbai/0x6e98f571a9595c0d4f9a2b638d01cea8d90d0f6a/1`
              )
            }
          >
            OpenSea
            <img src={Opensea} className="openLogo" />
          </div>
          <div
            className="joinButton"
            onClick={() =>

              window.open(

                `https://discord.gg/3xDZ6bSs`
              )
            }
          >
            Join Discord
            <img src={Discord} className="joinLogo" />
          </div>
        </div>
        <div className="tableHeader">
          <div className="numberHeader">#</div>
          <div className="titleHeader">TITLE</div>
          <div className="numberHeader">
            <ClockCircleOutlined />
          </div>
        </div>
        {bears &&
          bears.map((nft, i) => {
            nft = JSON.parse(nft.metadata);
            return (
                <div className={`tableContent ${i}`} key={i}>
                  <div className="numberHeader">{i+1}</div>
                  <div
                    className="titleHeader"
                    style={{ color: "#33004d" }}
                  >
                    {nft.name}
                  </div>
                  <div className="numberHeader">{nft.duration}</div>
                </div>
            );
          })}
      </div>
    </>
  );
};

export default Album;
