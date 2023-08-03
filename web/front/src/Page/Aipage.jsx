import React from "react";
import { useState } from "react";
import "../Style/Mainpage.css";
import Navbar from "../Component/Navbar";
import Card from "../Component/Card";

const Mainpage = () => {
  const [casedata, setcasedata] = useState([
    {
      name: "2020재결 제1095호 요양 불승인 처분 취소",
      type: "요양 업무상 사고 업무수행 중의 사고작업시간 전후 출장 중 사고",
      date: "2021.01.02",
      ans: "기각",
      hit: "Best",
    },
    {
      name: "2020재결 제87호 요양 불승인 처분 취소",
      type: "요양 업무상 사고 업무수행 중의 사고작업시간 전후 출장 중 사고",
      date: "2021.01.04",
      ans: "기각",
      hit: "Hot",
    },
    {
      name: "2020재결 제1704호 유족급여 및 장의비 부지급 처분 취소",
      type: "요양 업무상 사고 출퇴근 중의 사고",
      date: "2020.12.09",
      ans: "기각",
    },
    {
      name: "2020재결 제2235호 요양비 부지급 처분 취소",
      type: "요양 요양비·보조기구·간병료·이송료",
      date: "2020.11.18",
      ans: "기각",
    },
    {
      name: "2020재결 제1095호 요양 불승인 처분 취소",
      type: "요양 업무상 사고 업무수행 중의 사고작업시간 전후 출장 중 사고",
      date: "2021.01.02",
      ans: "기각",
    },
    {
      name: "2020재결 제1095호 요양 불승인 처분 취소",
      type: "요양 업무상 사고 업무수행 중의 사고작업시간 전후 출장 중 사고",
      date: "2021.01.02",
      ans: "기각",
    },
    {
      name: "2020재결 제1095호 요양 불승인 처분 취소",
      type: "요양 업무상 사고 업무수행 중의 사고작업시간 전후 출장 중 사고",
      date: "2021.01.02",
      ans: "기각",
    },
    {
      name: "2020재결 제1095호 요양 불승인 처분 취소",
      type: "요양 업무상 사고 업무수행 중의 사고작업시간 전후 출장 중 사고",
      date: "2021.01.02",
      ans: "기각",
    },
  ]);

  return (
    <div>
      <Navbar />
      <div className="banner">
        <img src="images/banner.jpg" alt="" className="bannerimg" />
        <div className="bannertext">AI 어시스턴트 &nbsp;</div>
        <div className="bannertextmes">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="bannerselect">
          <div className="classi">사건분류</div>
          <div className="divider" />
          <div className="classissel">요양</div>
          <select className="dropdown" />
          <div className="divider" />
          <div className="classissel">업무상 사고</div>
          <select className="dropdown" />
          <div className="divider" />
          <div className="classissel">출퇴근 중의 사고</div>
          <select className="dropdown" />
        </div>
      </div>
      <div className="casediv">
        <div className="casetitles">판례 분석</div>
        <div className="aihelp">
          <textarea className="aiinput" />
          <div className="aioutput">
            <div className="outputtitle">AI 해설</div>
            <div className="outputanswer">
              업무 사이에 상당인과관계가 인정되지 않을 것으로 예상됩니다.
              <div className="outputbuttons">
                <button className="consultbutton">
                  전문 노무사와 상담하기
                </button>
                <button className="askcommunity">커뮤니티에 질문하기</button>
              </div>
            </div>
          </div>
        </div>
        <div className="casetitles">연관 판례</div>
        <div className="casecards">
          {casedata.map((data) => (
            <Card
              name={data.name}
              type={data.type}
              date={data.date}
              ans={data.ans}
              hit={data.hit}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mainpage;