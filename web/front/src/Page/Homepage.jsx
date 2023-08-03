import React from "react";
import "../Style/Homepage.css";
import Navbar from "../Component/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="homeconv">
        <div className="homeexp">
          <div className="hometitle">
            <span className="spanred">산재보험</span> 받을 수 있을까? <br />{" "}
            이젠 AI에게 질문하세요!
          </div>
          <div className="homeminititle">
            AI 분석 서비스로 쉽고 빠르게 알아보는 산재정보
          </div>
        </div>
        <div className="homeink">
          <button className="goaibutton">
            <div className="ingo">
              <img src="images/brain.png" alt="" className="goaiimg" />
              <span>
                AI 어시스턴트
                <br />
                바로가기 →
              </span>
            </div>
          </button>
          <div className="homeinksmall">
            <button className="gofindhospital">
              <div className="ingo">
                <img src="images/hospital.png" alt="" className="ingohosimg" />
                <span>병원 찾기</span>
              </div>
            </button>
            <button className="goaskquestion">
              <div className="ingo">
                <img src="images/question.png" alt="" className="ingoqimg" />
                <span>질문 하기</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="statresdiv">
        <img src="images/statall.png" alt="" className="statimg" />
      </div>
    </div>
  );
};

export default Homepage;
