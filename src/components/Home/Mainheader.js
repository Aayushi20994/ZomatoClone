import React, { useEffect, useState } from "react";
import axios from "axios";
//we will se use navigate hook for navigation from on page to another
import Header from "../Filter folder/Header";
export default function Mainheader() {
  let [locationlist, setLocationList] = useState([]);

  let getlocationlist = async () => {
    let url = "http://localhost:3003/getrestro";
    let { data } = await axios.get(url);
    //console.log(data);
    setLocationList([...data.restrolist]);
  };
  useEffect(() => {
    getlocationlist();
  }, []);
  return (
    <>
      <div className="container-fluid backimg">
        <Header bg="" />

        <div className="row pt-4 mx-auto text-center">
          <div className="col-12">
            <span className="px-4 py-2" id="eh">
              {" "}
              e!{" "}
            </span>
          </div>
        </div>
        <br />
        <div className="row pt-4 text-center">
          <div className="col-12">
            <h2 id="h">Find the best restaurants,cafe and bars</h2>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-4 m-auto text-center">
              <select id="select" placeholder="Please type a location">
                {locationlist.map((item, index) => {
                  return (
                    <option key={index}>
                      {item.locality},{item.city}
                    </option>
                  );
                })}
              </select>

              <input id="search" placeholder="Search for restaurants" />

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
