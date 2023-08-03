import React from "react";
import "../Style/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="titlename">
          <a href="/" className="navtitle">
            <img src="images/logo.png" alt="" className="navimg" />
          </a>
          <a href="/" className="navlogin">
            로그인/회원가입
          </a>
        </div>
        <div className="navmmenu">
          <div className="navmenuitems">
            <a href="/" className="navmenuitemtitle">
              홈
            </a>
            <a href="/ai" className="navmenuitem">
              AI 어시스턴트
            </a>
            <a href="/consult" className="navmenuitem">
              노무사 상담
            </a>
            <a href="/hospital" className="navmenuitem">
              병원 찾기
            </a>
            <a href="/community" className="navmenuitem">
              커뮤니티
            </a>
            <a href="/safety" className="navmenuitem">
              안전평가
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
