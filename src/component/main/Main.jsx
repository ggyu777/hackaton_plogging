import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../css/Main.css";
import MainSlider from "../slider/MainSlider";
import MainSlider2 from "../slider/MainSlider2";

import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import FestivalCard from "../festival/FestivalCard";
import Carousel from "react-bootstrap/Carousel";

function Main(props) {
  let headlineText = useRef(null);
  let startButton = useRef(null);
  let eventButton = useRef(null);

  const navigate = useNavigate();

  const [post, setPost] = useState([]);

  const FilterCard = () => {
    return props.data;
  };

  useEffect(() => {
    setPost([...FilterCard()]);
  }, [props.category]);

  useEffect(() => {
    gsap.to(headlineText, 0.8, {
      opacity: 1,
      y: -30,
      ease: "Power3.out",
      delay: 0.2,
    });
    gsap.to(startButton, 0.8, {
      opacity: 1,
      y: -30,
      ease: "Power3.out",
      delay: 0.9,
    });
  }, []);

  function handleStartClick() {
    navigate("/running");
  }
  function handleEventClick() {
    navigate("/event");
  }

  return (
    <div className="container">
      <div className="main">
        <MainSlider />
        <div className="mainBox">
          <div className="mainInfo_text">
            <span>
              저희 줍고는{" "}
              <span style={{ color: "#49e594", fontWeight: "bold" }}>
              플로깅에 NFT
              </span>
              를 결합한 서비스에요
              <br style={{ border: "1px solid black" }} />
              <br />
              초보자들을 위한 <span style={{ fontWeight: "bold" }}>안내</span>
              부터
              <br />
              각종 <span style={{ fontWeight: "bold" }}>행사정보</span>는
              물론이고 <br />
              더 나아가{" "}
              <span style={{ color: "#49e594",fontWeight: "bold" }}>미션을 완료</span> 하고 <span style={{ color: "#49e594",fontWeight: "bold" }}>NFT 혜택</span>까지<br />
              <br />
              <span style={{ fontWeight: "bold" }}>전부 제공 해드릴게요 😊</span>
            </span>
          </div>
        </div>
        <div
          style={{
            marginTop: "20px",
           
            width: "100%",
          }}
        />
        <div />

        <div className="mainBox2">
          <div className="headline1">
            <h3 className="headline_text">
              <span style={{ color: "#49e594" }}>참여</span>가능한
              <br />
              <span style={{ color: "#49e594" }}>플로깅행사</span>
            </h3>
          </div>
        </div>

        <Col md={12} lg={12}>
          <Container>
            <Row className="row gx-0">
              {post.map((item, i) =>
                i < 1 ? <FestivalCard data={item} i={i} key={item.id} /> : null
              )}
            </Row>
          </Container>
        </Col>

        <div
          className="eventButton"
          onClick={handleEventClick}
          ref={(el) => {
            eventButton = el;
          }}
        >
          <span className="eventButtonText">더보러가기</span>
        </div>
        <div  />
        <div />

        <div className="headline2">
          <h3
            className="headline_text"
            ref={(el) => {
              headlineText = el;
            }}
          >
            <span style={{ color: "#49e594" }}>지구</span>와함께
            <br />
            <span style={{ color: "#49e594" }}>건강해지기</span>
          </h3>
          <div
          className="startButton"
          onClick={handleStartClick}
          ref={(el) => {
            startButton = el;
          }}
        >
          <span className="startButtonText">달리러가기</span>
        </div>
        </div>


        <div className="mainBox2">
          <div className="headline1">
            <h3 className="headline_text">
              <span style={{ color: "#49e594" }}>줍고</span>와함께
              <br />
              <span style={{ color: "#49e594" }}>노력한결과</span>
            </h3>
          </div>
        </div>
        
        <MainSlider2/>
        <div className="mainBottom">

        </div>
      </div>
    </div>
  );
}

export default Main;
