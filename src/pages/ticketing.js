import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import { Link } from "react-router-dom";
import "./ticketing.css";
import { Tabs } from "antd";
import { ticketData } from "../helpers/ticketList";



const { TabPane } = Tabs;

const Ticketing = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" centered>
              <TabPane tab="RECENT" key="1">
                <h1 className="featuredTitle">Live it Large</h1>
                <div className="tickets">
                {ticketData.map((e,index) => (
    
                    <Link to="/ticket" key={index} state={e} className="ticketSelection">
                      <img
                        src={e.image}                                             
                        alt="bull"
                        style={{ width: "500px", marginBottom: "10px" }}
                      ></img>
                      <p>{e.name}</p>
                      <p>
                        {e.price}
                      </p>
                    </Link>
                  ))}

                </div>
              </TabPane>

              <TabPane tab="UPCOMING" key="2">
                <h1 className="featuredTitle">Watch Out</h1>
                
              </TabPane>

              <TabPane tab="PAST" key="3">
                <h1 className="featuredTitle">Gone!</h1>
                
              </TabPane>
            </Tabs>
    </>
  );
};

export default Ticketing;
