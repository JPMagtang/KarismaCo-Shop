import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import globalStyle from "~/styles/global.css";
import productsBanner from "app/assets/banner-products.jpg"

import Headliner from "~/components/Headliner";
import Navigation from "~/components/Navigation";
import ProductCard from "~/components/Product-Card";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyle }
];

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Karisma.Co" },
    { name: "Products", content: "Shop with us at Karisma.Co." },
  ];
};

export default function OurProducts() {
  return (
    <>
      <Headliner />
      <Navigation />
      <div className="products-banner">
        <div className="products-banner-backing">
          <div>
            <h1>Where Style<br />Meets Comfort!</h1>
            <p>Check out our prized selections. Time to shop, ladies!</p>
          </div>
        </div>
        <img className="products-banner-image" src={productsBanner} alt="" />
      </div>

      <div className="shop">
        <div className="shop-filters">
          <div className="filter">
            <label htmlFor="">Filter By:</label>
            <select name="type" id="">
              <option value="" selected disabled hidden>Type</option>
              <option value="">Headwear</option>
              <option value="">Dresses</option>
              <option value="">Skirts</option>
            </select>
            <select name="color" id="">
              <option value="" selected disabled hidden>Color</option>
              <option value="">Red</option>
              <option value="">Blue</option>
              <option value="">Yellow</option>
            </select>
          </div>
          <div className="filter">
          <label htmlFor="">Sort By:</label>
            <select name="type" id="">
              <option value="">Featured</option>
              <option value="">Release: New to Dated</option>
              <option value="">Release: Dated to New</option>
              <option value="">Price: Low to High</option>
              <option value="">Price: High to Low</option>
            </select>
          </div>
        </div>
        <div className="products">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        {/* <div className="button-container">
          <button type="button">See More</button>
        </div> */}
      </div>
      <div className="section-liner footer" />
      <Headliner />
    </>
  );
}