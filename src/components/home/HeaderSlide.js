import React from "react";
import Carousel from "react-bootstrap/Carousel";

const imageaddress = [
  {
    name: "image1",
    address:
      "https://www.bechtle.com/dam/jcr:aea3c9ac-559f-4164-b82c-83519803fd2d/cw12_mainbanner_logitech-workplace-de.jpg",
  },
  {
    name: "image2",
    address:
      "https://www.bechtle.com/dam/jcr:704d8953-8503-4a14-90f8-bc40ad180086/cw25_mainbanner_samsung-fr.jpg",
  },
  {
    name: "image3",
    address:
      "https://www.bechtle.com/dam/jcr:5e0686e3-5091-4fb3-b4f9-0f79f9808832/cw42_mainbanner_microsoft-surface-launch-de.jpg",
  },
  {
    name: "image4",
    address:
      "https://www.bechtle.com/dam/jcr:bc7eac8a-a694-4163-bd8a-ce07a7ecc168/cw35_mainbanner_samsung-fr.jpg",
  },
  {
    name: "image5",
    address:
      "https://www.bechtle.com/dam/jcr:32ea3a7e-b895-4a4c-a066-c8f5cfaf59d4/cw26_mainbanner_samsung-fr.jpg",
  },
  {
    name: "image6",
    address:
      "https://www.bechtle.com/dam/jcr:00edbac4-bc9d-4274-afe4-4abdee120a21/cw45_mainbanner_lenovo-fr.jpg",
  },
];

const HeaderSlide = () => {
  return (
    <Carousel>
      {imageaddress.map((img, index) => (
        <Carousel.Item>
          <img className="d-block w-100" src={img.address} alt={img.name} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeaderSlide;
