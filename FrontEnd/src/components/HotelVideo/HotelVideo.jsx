import React from "react";
import "./HotelVideo.css";
import hotel_video_01 from "../../assets/videos/hotel_video_01.mp4";

const HotelVideo = () => {
  return (
    <div className="hotel-video">
      <div className="hotel-video-head">
        <h2>LUXURY HOTEL</h2>
        <hr />
        <h1>BEST ROOMS</h1>
      </div>
      <div className="video-section">
        <div className="video-design">
          <div className="video-design-text">
            <h1><span className="relax">Relax</span> and <span className="enjoy">Enjoy</span> your Holiday</h1>
            <p className="video-pharagraph">LUXURY HOTEL & BEST RESORT</p>
          </div>
          <div className="video-design-blend"></div>
        </div>
        <video className="video" loop autoPlay muted>
          <source src={hotel_video_01} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HotelVideo;