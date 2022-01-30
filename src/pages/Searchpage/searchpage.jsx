import React, { useState } from "react";

import data from "../../Components/data/data";
import Navbare from "../../Components/Navbars/Navbar";
import Sidebar from "../../Components/Sidebar/sidebar";
import Footer from "../../Components/Footer/footer";
import "./searchpage.css";

const Searchpage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [filter, setFilter] = useState("");

  const searchText = (e) => {
    setFilter(e.target.value);
  };

  let dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  return (
    <section className="pt-4 ">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbare toggle={toggle} />
      <div className="container margin">
        <div className="row justify-content-center">
          <div className="col-12 mb-5">
            <h1
              className="form-label h1_search_page"
              style={{ color: "white" }}
            >
              {" "}
              Search Competitor{" "}
            </h1>
            <input
              type="text"
              className="form-control search_form"
              placeholder="Search here"
              value={filter}
              onChange={searchText.bind(this)}
            />
          </div>
        </div>
      </div>

      {dataSearch.map((item, index) => {
        return (
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-8 col-12">
                <div className="card">
                  <img src={item.img} className="card-img-top " />
                  <div className="card-body">
                    <h5 className="card-title tcolor"> {item.title}</h5>
                    <p className="card-text dcolor">{item.desc1}</p>
                    <p className="card-text dcolor">{item.desc2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Footer />
    </section>
  );
};

export default Searchpage;
