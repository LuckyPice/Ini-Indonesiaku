import React, { Component } from "react";
import Header from "../parts/Header";

import pageHotel from "../json/PageHotel.json"
import Hero from "../parts/Hero"
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Footer from "parts/Footer";

export default class PageHotel extends Component {
    render() {
        return (
          <>
            <Header {...this.props}></Header>
            <Hero data={pageHotel.hero}/>
            <MostPicked data={pageHotel.mostPicked}/>
            <Categories data={pageHotel.categories}/>
            <Footer />
          </>
        );
      }
    }
