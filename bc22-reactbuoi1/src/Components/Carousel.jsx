import React from "react";

export default function () {
  return (
    <div id="demo" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to={0} className="active" />
        <li data-target="#demo" data-slide-to={1} />
        <li data-target="#demo" data-slide-to={2} />
      </ul>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./img/slide_1.jpg" alt="banner1" />
        </div>
        <div className="carousel-item">
          <img src="./img/slide_2.jpg" alt="banner2" />
        </div>
        <div className="carousel-item">
          <img src="./img/slide_3.jpg" alt="banner3" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon" />
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon" />
      </a>
    </div>
  );
}