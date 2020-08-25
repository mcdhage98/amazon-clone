import React from "react";
import "./Home.scss";
import AmazonBanner from "./images/ama.png";
import Product from "./Product";
import doItToday from "./images/book_do_it_today.jpg";
import ikigai from "./images/ikigai.png"
import nameless from "./images/nameless.png"
import attitude from "./images/attitude.png"
import think from "./images/think.jpg"
import babylon from "./images/babylon.jpg"
function Home() {
  return (
    <div className="home">
      <img className="home__image" src={AmazonBanner}></img>
      <div className="home__row">
        <Product
          id="1"
          title="Do It Today: Overcome Procrastination, Improve Productivity, and Achieve More Meaningful Things Kindle Edition"
          image={doItToday}
          price={18}
          rating={4}
        ></Product>

		<Product
          id="7"
          title="The Nameless Relationship Kindle Edition"
          image={nameless}
          price={18}
          rating={4}
        ></Product>
      </div>

	  <div className="home__row">
        <Product
          id="2"
          key="2"
          title="Attitude Is Everything: Change Your Attitude ... Change Your Life! Kindle Edition"
          image={attitude}
          price={18}
          rating={4}
        ></Product>

		<Product
          id="3"
          title="Ikigai: The Japanese secret to a long and happy life Kindle Edition"
          image={ikigai}
          price={8}
          rating={5}
        ></Product>
		<Product
          id="4"
          title="Do It Today: Overcome Procrastination, Improve Productivity, and Achieve More Meaningful Things Kindle Edition"
          image={doItToday}
          price={9}
          rating={4}
        ></Product>
      </div>
	  <div className="home__row">
        <Product
          id="5"
          title="The Richest Man In Babylon Kindle Edition"
          image={babylon}
          price={18}
          rating={4}
        ></Product>

		<Product
          id="6"
          title="Think And Grow Rich Kindle Edition"
          image={think}
          price={20}
          rating={5}
        ></Product>
		
      </div>
    </div>
  );
}

export default Home;
