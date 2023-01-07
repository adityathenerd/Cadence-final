
import  Image1  from "../images/1.png"
import  Image2  from "../images/2.png"
import  Image3  from "../images/3.png"
import  Image4  from "../images/4.png"
import './intro.css'

const Header = () =>{
    return(
        <div className="header">
            <h1 className="heading">
                Cadence
            </h1>
            <div className="header-content">
                A Completely Decentralised Music Streaming Platform with Time as a Currency.
            </div>        
        </div>
    )
}
const Section1 = () =>{
    return(
        <div className="content-section">
            <img className="" src={Image1} alt='g'></img>
            {/* <div className="header">
                <h1>hi</h1>
            </div> */}
            <div className="content-section-text">
            <h1>Plunge into Time</h1>
            Time is a very interesting asset. When you listen to music, watch movies, or talk to your best friend, you pay attention! We can express this as a transaction of attention. And we can quantify attention with time. So, time can act as a currency and be applied in so many cases.

            </div>
        </div>
    )
}
const Section2 = () =>{
    return(
        <div className="content-section">
            <img src={Image2} alt='g'></img>
            <div className="content-section-text">
            <h1>Decentralised Music Streaming</h1>
            We applied this mechanism to a music streaming platform. It's completely web3-based, which means each song is an NFT, and the album is an NFT collection deployed to IPFS. So, listening to music; completely decentralized.
            </div>
        </div>
    )
}
const Section3 = () =>{
    return(
        <div className="content-section">
            <img src={Image3} alt='g'></img>
            <div className="content-section-text">
            <h1>Cadence?</h1>
            You are paying attention to the artist through “time” when you listen to music. So, logically, some of your tokens will be expended. That's exactly what happens! This can be your key to interacting and engaging with your favourite artists in future!
            </div>
        </div>
    )
}
const Section4 = () =>{
    return(
        <div className="content-section">
            <img src={Image4} alt='g'></img>
            <div className="content-section-text">
                <h1>Wait! There's More</h1>
                You can keep ads under YOUR control, thanks to the Cadence Tokens. When you click on the ads toggle, only then will you receive ads, and you will be credited cadence coins! Use these coins for more and more music streaming.
            </div>
        </div>
    )
}



function Intro(){
    return (
        <>
            <Header></Header>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            <Section4></Section4>
        </> 
    )
};


export default Intro;