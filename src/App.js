import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album';
import  Intro  from "./pages/intro";
import  Ticketing  from "./pages/ticketing";
import Ticket from './pages/ticket';
import './App.css';
import { Link } from "react-router-dom";
import Player from "./components/AudioPlayer";
import { Layout } from "antd";
import Spotify from "./images/Spotify.png";
import Token from "./images/25498.png";
import Metamask from "./images/metamask.png";
import { SearchOutlined } from "@ant-design/icons";
import { ethers } from 'ethers';
// import {Player} from './components/AudioPlayer.js'
const { Content, Sider, Footer } = Layout;




const App = () => {

  const [walletAddress, setWalletAddress] = useState("");

  function FetchTokenData(){
    var ct = localStorage.getItem('CadenceToken')

    const [token, UpdateTokens] = useState(ct);
    useEffect(()=>{
      setInterval(() => {
        UpdateTokens(localStorage.getItem('CadenceToken')
        )
      }, 10*1000);
    })
    return (
      <div className='Token-Container'>
        <img src={Token} alt='token' ></img>
        {Math.trunc(token)}
      </div>
    )
  }

  async function requestAccount(){
    if(window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  }

  async function connectWallet() {
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
    console.log(walletAddress)
  }

  function SetTokenData(tokens){
    localStorage.setItem('CadenceToken', tokens)
  }
  if (!localStorage.getItem('CadenceToken')){
    SetTokenData(200)
  }
  const [nftAlbum, setNftAlbum] = useState();
  return (
    <>
      <Layout>
        <Layout>
          <Sider width={300} className="sideBar">
            <div className='header-container'>
              <img src={Spotify} alt="Logo" className="logo"></img>
              <FetchTokenData></FetchTokenData>
              <label className="switch size-m">
                  <input type="checkbox" name="" id=""/>
                  <span className="slider round"></span>
              </label>
            </div>

            <div className="searchBar">
              <span> Search </span>
              <SearchOutlined style={{ fontSize: "30px" }} />
            </div>

            <Link to="/">
            <p style={{ color: "#67deff" }}> Cadence </p>
            </Link>

            <Link to="/App">
            <p style={{ color: "#67deff" }}> Home </p>
            </Link>

            <Link to="/Ticketing">
            <p style={{ color: "#67deff" }}> Ticketing </p>
            </Link>

            <div className='Address-Container'>
              <p>{walletAddress}</p>
            </div>

            <div className='connectButton'
              onClick={connectWallet}
            >
              <img src={Metamask} alt={'logo'} className="connectLogo"/>
            </div>
          </Sider>

          <Content className="contentWindow">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/album" element={<Album setNftAlbum={setNftAlbum}/>} />
            <Route path='/App' element={<Home/>}/> 
            <Route path="/ticket" element={<Ticket/>}/> 
            <Route path='/Ticketing' element={<Ticketing/>}/>
          </Routes>
          {/* <Intro></Intro> */}
          </Content>
        </Layout>

        <Footer className="footer">
          {nftAlbum &&
          <Player
            url={nftAlbum}
          />
          }
        </Footer>


      </Layout>
    </>
  );
}


export default App;
