import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";

export const Home = () => {
  return (
    <div className="home-div">
      <Image
        src="https://mir-s3-cdn-cf.behance.net/projects/404/82d2c5174192145.Y3JvcCw5MTYsNzE3LDIwLDA.png"
        roundedCircle
        className="border border-danger"
      />
    </div>
  );
};
