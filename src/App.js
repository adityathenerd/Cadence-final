import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album';
import './App.css';
import { Link } from "react-router-dom";
import Player from "./components/AudioPlayer";
import { Layout } from "antd";
import Spotify from "./images/Spotify.png";
import { SearchOutlined, DownCircleOutlined } from "@ant-design/icons";
// import {Player} from './components/AudioPlayer.js'
const { Content, Sider, Footer } = Layout;




const App = () => {

  function FetchTokenData(){
    // setInterval(() => {
      
    // }, 1000);
    var ct = localStorage.getItem('CadenceToken')

    const [token, UpdateTokens] = useState(ct);
    useEffect(()=>{
      setInterval(() => {
        UpdateTokens(localStorage.getItem('CadenceToken')
        )
      }, 10*1000);
    })
    return (
      <>
        {Math.trunc(token)}
      </>
    )
  }

  function SetTokenData(tokens){
    localStorage.setItem('CadenceToken', tokens)
  }

  // function 
  // setInterval(() => {
  // console.log(Player.duration)
  // }, 1000);

  SetTokenData(200)

  const [nftAlbum, setNftAlbum] = useState();
  return (
    <>
      <Layout>
        <Layout>
          <Sider width={300} className="sideBar">
            <div className='header-container'>
              <img src={Spotify} alt="Logo" className="logo"></img>
              <div className='Token-Container'>
                <FetchTokenData></FetchTokenData>
              </div>

            </div>
            <div className="searchBar">
              <span> Search </span>
              <SearchOutlined style={{ fontSize: "30px" }} />
            </div>
            <Link to="/">
            <p style={{ color: "#67deff" }}> Home </p>
            </Link>
            <p> Your Music </p>
            <div className="recentPlayed">
              <p className="recentTitle">RECENTLY PLAYED</p>
              <div className="install">
                <span> Install App </span>
                <DownCircleOutlined style={{ fontSize: "30px" }} />
              </div>
            </div>
          </Sider>
          <Content className="contentWindow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/album" element={<Album setNftAlbum={setNftAlbum}/>} />
          </Routes>
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
