import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";




import male from '../../static/img/male.svg';

import Login from '../Login/Login';
import Forgotpassword from '../Forgotpassword/Forgotpassword';
import Regist from '../Regist/Regist';
import { withCookies, useCookies } from 'react-cookie';


const Header = () => {
  const [ cookies, removeCookie ] = useCookies([ 'user' ]);
  const [ hasCookie, setHasCookie ] = useState(false);

  useEffect(() => {
    if (cookies.user && cookies.user !== 'undefined') {
      setHasCookie(true);
    }}, [ cookies ]);


  return (
      <div>
        <header className="header">
        <div className="container-fluid">
          <div className="d-flex p-3">
            <div className="mr-auto d-flex">
              <div className="header-logo align-self-center"><a className href="/"><h1>CQRE</h1></a></div>
              <div className="header-semester align-self-center ml-3">2020 2학기</div>
            </div>
            <div className="header-menu ml-auto d-flex">
              {/* <div class="pr-4 header-search"><div class="header-search-circle"><i class="fas fa-search"></i></div></div> */}
              <div className="pr-4 header-search align-self-center">
                <div className="header-search-wrapper">
                  <i className="fas fa-search search-icon"/>
                  <input type="text" name className="search-input" placeholder="검색하기" />
                </div>
              </div>
              <div className="pr-4 modal-btn align-self-center"><button type="button" className="modal-btn" data-toggle="modal" data-target="#SemesterModalCenter">학기 설정</button></div>
              {
                !hasCookie
                    ? <div className="align-self-center header-login-btn pr-4"><button type="button" className="modal-btn" data-toggle="modal" data-target="#LoginModalCenter">로그인</button></div>
                    : <><div className="align-self-center header-write-btn pr-4"><button type="button" className="write-btn">작성하기</button></div><div className="align-self-center user-img"><img src={male} /></div></>
                    
              }
              
              
                               
            </div>
            <div className="header-mobile-menu ml-auto d-flex">
              <div className="align-self-center ml-auto">
                <button className="btn mobile-menu" type="button">
                  <div className="hamburger-icon">
                    <div />
                  </div>
                </button>
              </div> 
            </div>
          </div>
        </div>
        {/* Semester Modal start */}
        <section className="semester-modal">
          <div className="modal fade" id="SemesterModalCenter" tabIndex={-1} role="dialog" aria-labelledby="SemesterModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="SemesterModalCenterTitle"><i className="fas fa-school mr-3" />학기 설정</h5>
                  <button type="modal-close-btn button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body p-4">
                  <h5>변경할 학기</h5>
                  <p /><div className="search-nav-dropdown">
                    <div className="dropdown">
                      <button className="btn btn dropdown-toggle semester-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="far fa-calendar-check mr-3" />2020년 2학기
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#" style={{color: '#3b5bdb'}}>2020년 2학기</a>
                        <a className="dropdown-item" href="#">2020년 1학기</a>
                      </div>
                    </div>
                  </div><p />
                  <hr />
                  <h5>학기 정보</h5>
                  <p><span className="mr-3">회장 : 임필호</span><span className="mr-3">팀 : 5개</span><span className="mr-3">동아리 원 : 55명</span><span className="mr-3">게시글 : 55개</span></p>
                </div>
                <div className="modal-footer justify-content-center">
                  <button type="button" className="confirm-btn" data-dismiss="modal">설정</button>
                  <button type="button" className="close-btn" data-dismiss="modal">취소</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Semester Modal end */}
        {/* Login Modal start */}
              <section className="login-modal">
              <div className="modal fade" id="LoginModalCenter" tabIndex={-1} role="dialog" aria-labelledby="LoginModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="modal-close-btn button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <Login setHasCookie={setHasCookie} />
                    <Forgotpassword />
                    <Regist />
                  </div>
                </div>
              </div>
            </section>
        
        {/* Login Modal end*/}
      </header>
      {/* header end */}
      {/* mobile nav start */}
      <nav className="mobile-nav w-100 hidden bg-white">
        <div className="container-fluid">
          <div className="row">
            <div className="mobile-dropdown w-100">
              <div className="col-12">
                <div className="p-3 mobile-dropdown-search bg-white">
                  <input type="email" className="form-control fontawesome" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="  검색하기" />
                </div>
              </div>
              <div className="col-12">
                <div className="p-3 pl-4 mobile-dropdown-item bg-white modal-btn" data-toggle="modal" data-target="#LoginModalCenter" onClick="show_login()">로그인</div>
              </div>
              <div className="col-12">
                <div className="p-3 pl-4 mobile-dropdown-item bg-white modal-btn" data-toggle="modal" data-target="#SemesterModalCenter">학기설정</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* mobile nav end */}
    </div>
  )
}

export default Header;