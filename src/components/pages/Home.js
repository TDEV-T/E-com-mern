import React from "react";
import NewProduct from "../home/NewProduct";
import BestSeller from "../home/BestSeller";
import HeaderSlide from "../home/HeaderSlide";
const Home = () => {
  return (
    <div>
      {/* Header */}

      <HeaderSlide />

      {/* New Product */}
      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        New Product
      </h4>
      <NewProduct />

      {/* Best Seller */}
      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Best Seller
      </h4>
      <BestSeller />
    </div>
  );
};

export default Home;
