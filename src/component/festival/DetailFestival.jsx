import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, Nav, Col, Container, Row, Card } from "react-bootstrap";
import "../../css/DetailFestival.css";
import "../../css/Scroll.css";
import "../../css/FestivalCard.css";
import { useNavigate } from "react-router-dom";

function DetailFestival(props) {
  let navigate = useNavigate();
  let { id } = useParams();
  const [flag, setFlag] = useState(false);
  const [tabnum, setTabnum] = useState(0);
  const handleClick = () => {
    setFlag(!flag);
  };
  const [key, setKey] = useState("home");
  const nums = (e) => {
    if (e.id == Number(id) + 1) {
      return e;
    }
  };
  const [post, setPost] = useState([]);
  let [fade, setFade] = useState("");
  useEffect(() => {
    setPost(props.data);
  });
  let findDataNum = props.data.findIndex(nums);

  return (
    <>
      <Container>
        <Row>
          <Col md={6} lg={6}>
            <Card.Img
              variant="top"
              className="detail_image_container"
              src={`${props.data[findDataNum].image}`}
              onError={(e) => (e.target.src = "/noimage.png")}
              style={{
                // width: "300px",
                // height: "300px",
                cursor: "pointer",
              }}
            />
          </Col>
          <Col md={6} lg={6} style={{ marginTop: "30px" }}>
            <h3 className="detail_title">{props.data[findDataNum].title}</h3>
            <div className="detail_button_container">
              <button
                className="detail_cardBtn"
                onClick={() => {
                  handleClick();
                }}
              >
                <img
                  src={flag ? "/clicklike.png" : "/like.png"}
                  style={{ width: 20, userSelect: "none", right: "0" }}
                  alt="likeBtn"
                />
              </button>
              <button className="detail_shareBtn">
                <img
                  src="/share.png"
                  style={{ width: 20, userSelect: "none", right: "0" }}
                ></img>
              </button>
            </div>
            <div className="detail_content">
              안녕하세요 줍고 입니다
              <br />
              <br />
              플로깅도 하고 NFT도 받아가세요!
              <br />
              <br />
              주최 측에서 제공하는 행사 정보는 아래와 같습니다
              <br />
              <br />
              {props.data[findDataNum].content}
              <br />
              <br />
              추가적으로 궁금하신 부분은 카카오톡으로 문의주시면 빠르게
              답변해드리겠습니다.
            </div>
            <button className="detail_button_apply">신청하기</button>
          </Col>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
            style={{ marginTop: "30px", fontSize: "25px" }}
          >
            <Tab eventKey="home" title="행사정보">
              <div className={`start ${fade}`}>
                <div className="detail_content_container">
                  <span className="detail_content_line">
                    <span className="detail_content_text">일시</span>
                    <span className="detail_content_data">
                      {props.data[findDataNum].date}
                    </span>
                  </span>
                  <span className="detail_content_line">
                    <span className="detail_content_text">장소</span>
                    <span className="detail_content_data">
                      {props.data[findDataNum].location}
                    </span>
                  </span>
                  <span className="detail_content_line">
                    <span className="detail_content_text">신청</span>
                    <span className="detail_content_data">
                      2022.5.20~2022.6.3
                    </span>
                  </span>
                  <span className="detail_content_line">
                    <span className="detail_content_text">문의</span>
                    <span className="detail_content_data">서울관광공사</span>
                  </span>
                </div>
              </div>
            </Tab>
            <Tab eventKey="profile" title="후기모음">
              <div className={`start ${fade}`}>
                <div className="detail_comment_container">
                  <div className="detail_comment_content">
                    <div className="detail_comment_profile">
                      <img
                        className="detail_comment_face"
                        src="/profilePersonIcon.png"
                      ></img>
                      <div className="detail_comment_name">영민</div>
                    </div>
                    <div className="detail_comment_text">
                      신청했습니다! 두근두근 너무 재밌을 것 같아요~~
                    </div>
                  </div>
                  <div className="detail_comment_content">
                    <div className="detail_comment_profile">
                      <img
                        className="detail_comment_face"
                        src="/profilePersonIcon.png"
                      ></img>
                      <div className="detail_comment_name">규준</div>
                    </div>
                    <div className="detail_comment_text">
                      이렇게 좋은 사이트가 있다니..!! 친구들한테도
                      공유해야겠어요!
                    </div>
                  </div>
                  <div className="detail_comment_content">
                    <div className="detail_comment_profile">
                      <img
                        className="detail_comment_face"
                        src="/profilePersonIcon.png"
                      ></img>
                      <div className="detail_comment_name">호진</div>
                    </div>
                    <div className="detail_comment_text">
                      플로깅은 못참지! 신청 꾹 박고 갑니다~~
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>

          <br />
          <h5
            style={{
              fontSize: "30px",
              marginTop: "30px",
              marginBottom: "15px",
              fontWeight: "800",
            }}
          >
            {props.data[findDataNum].location == "온라인"
              ? "온라인으로 진행하는 다른 행사 추천"
              : `${props.data[findDataNum].location}지역의 다른 행사 추천`}
          </h5>
          <Row className="detail_card_container">
            {post.length
              ? post.map((item, i) => {
                  if (item.location == props.data[findDataNum].location) {
                    return (
                      <>
                        <Col
                          md={6}
                          lg={3}
                          className="card_container_true"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <div className="card_image_container">
                            <Card.Img
                              variant="top"
                              // className="cardImg"
                              src={`${item.image}`}
                              onError={(e) => (e.target.src = "/noimage.png")}
                              onClick={() => {
                                navigate(`/detail/${item.id - 1}`);
                              }}
                              style={{
                                // width: "300px",
                                height: "300px",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                          <Card.Title
                            // className="cardTitle"
                            onClick={() => {
                              navigate(`/detail/${item.id - 1}`);
                            }}
                            style={{
                              fontFamily: "SCDream7",
                              cursor: "pointer",
                              width: "100%",
                              marginTop: "15px",
                              fontWeight: "500",
                            }}
                          >
                            {item.title}
                          </Card.Title>
                          <Card.Subtitle
                            // className="cardDate"
                            style={{
                              fontFamily: "SCDream4",
                              marginBottom: "70px",
                            }}
                          >
                            {item.date}
                          </Card.Subtitle>
                        </Col>
                      </>
                    );
                  }
                })
              : null}
          </Row>
        </Row>
      </Container>
    </>
  );
}

export default DetailFestival;
