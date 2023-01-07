import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album';
import  Intro  from "./pages/intro";
import './App.css';
import { Link } from "react-router-dom";
import Player from "./components/AudioPlayer";
import { Layout } from "antd";
import Spotify from "./images/Spotify.png";
import Token from "./images/25498.png";
import { SearchOutlined } from "@ant-design/icons";
// import {Player} from './components/AudioPlayer.js'
const { Content, Sider, Footer } = Layout;




const App = () => {

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

  function SetTokenData(tokens){
    localStorage.setItem('CadenceToken', tokens)
  }
  SetTokenData(200)
  const [nftAlbum, setNftAlbum] = useState();
  return (
    <>
      <Layout>
        <Layout>
          <Sider width={300} className="sideBar">
            <div className='header-container'>
              <img src={Spotify} alt="Logo" className="logo"></img>
              <FetchTokenData></FetchTokenData>
              <label class="switch size-m">
                  <input type="checkbox" name="LCase" id=""/>
                  <span class="slider round"></span>
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
            {/* <p> Your Music </p> */}
            <div className="recentPlayed">
              <p className="recentTitle">RECENTLY PLAYED</p>
            </div>
          </Sider>
          <Content className="contentWindow">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/album" element={<Album setNftAlbum={setNftAlbum}/>} />
            <Route path='/App' element={<Home/>}/>
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
