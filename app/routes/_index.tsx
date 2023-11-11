import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import globalStyle from "~/styles/global.css";
import bannerImage from "app/assets/banner.jpg"

import Headliner from "~/components/Headliner";
import productsData from "~/productsData";
import ProductCard from "~/components/elements/ProductCard";
import RedirectButton from "~/components/elements/RedirectButton";
import SectionHeader from "~/components/SectionHeader";

// export const links: LinksFunction = () => [
//   { rel: "stylesheet", href: globalStyle }
// ];

// FIX this for SEO
export const meta: V2_MetaFunction = () => {
  return [
    { title: "Karisma.Co" },
    { name: "Home", content: "Welcome to Karisma.Co!" },
  ];
};


export default function Index() {
  const products = productsData
  .slice(0,4)  
  .map((product) => {
      return (
        <ProductCard 
          key={product.id}
          {...product}
        />
      )
    }
  )
  return (
    <>
      <div className="banner">
        <img className="banner-img" src={bannerImage} alt="banner-image" />
        <h1>Bring Out The<br />Confidence In Women</h1>
        <RedirectButton 
          href="/products"
          text="Shop Now"
        />
      </div>
      {/* To fix responsiveness later */}
      <SectionHeader headerTitle="Featured Collection" />
      <div className="featured">
        <div className="products px-100px flex flex-wrap gap-50px justify-center">
          {products}
        </div>
        <div className="mt-50px">
          <RedirectButton 
            href="/products"
            text="See More"
          />
        </div>
      </div>
      <SectionHeader headerTitle="About Us" />
      <div className="about">
        <iframe
          id="video"
          src="https://www.youtube.com/embed/L6OClv7Sd5c"
        // frameBorder="0"
        // allowfullscreen
        ></iframe>
        <div className="about-content">
          <h1>For Women,<br />Made By Women</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className="section-liner footer" />
      <Headliner />
    </>
  );
}
