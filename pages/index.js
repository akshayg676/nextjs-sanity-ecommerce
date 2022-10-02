import React from "react";
import { FooterBanner, HeroBanner, Product } from "../components";
import { client } from "../lib/client";
const Home = ({ productData, bannerData }) => {
  console.log(productData, bannerData);
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>speaker There are many variations passages</p>
      </div>

      <div className="products-container">
        {/* {products?.map((product) => <Product key={product._id} product={product} />)} */}
        {productData?.map((product) => product.name)}
      </div>

      {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
      <FooterBanner />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const productData = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      productData,
      bannerData,
    },
  };
};
