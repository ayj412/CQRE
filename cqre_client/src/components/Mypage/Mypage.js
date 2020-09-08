import React, { useEffect, useState } from 'react';
import axios from 'axios'

import '../../static/css/style.css';
import '../../static/css/common.css';

import male from '../../static/img/male.svg'
import { withCookies, useCookies } from 'react-cookie';


const Mypage = () => {
  const [ cookies, removeCookie ] = useCookies([ 'user' ]);
  const [ userInfo, setUserInfo ] = useState({});



  useEffect(() => {
    axios
      .post("/api/getUserInfo", {'userToken': cookies})
      .then(function (response) {
        setUserInfo(response.data.user_info)
        console.log("userInfo", response.data.user_info)
        console.log("userInfo", userInfo)
        })
    },[]);


    return (
        <div>
        {/* user profile section start */}
        <section className="profile-user-section p-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="user-profile-box d-flex">
                  <div className="user-img">
                    <img className="img-fluid" src={male} />
                  </div>
                  <div className="user-name align-self-center">
                    <span>{ userInfo.user }</span>
                    <div className="user-present mt-2">사이트 개발자</div>
                  </div>
                </div>
                <hr className="mt-5" />
              </div>
            </div>
          </div>
        </section>
        {/* user profile section end */}
        {/* user profile nav section start */}
        <nav className="profile-nav-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="profile-nav-box d-flex justify-content-between">
                  <div className="profile-info profile-nav-item flex-equal"><span className="active">내 정보</span></div>
                  <div className="profile-post profile-nav-item flex-equal"><span>작성한 글</span></div>
                  <div className="profile-nav-item flex-equal"><span data-toggle="modal" data-target="#SemesterSetModalCenter">학기 설정</span></div>
                  <div className="profile-menu profile-nav-item flex-equal"><span>메뉴 관리</span></div>
                  <div className="profile-crew profile-nav-item flex-equal"><span>회원 관리</span></div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* user profile nav section end */}
        {/* Semester set Modal start */}
        <section className="semester-set-modal">
          <div className="modal fade" id="SemesterSetModalCenter" tabIndex={-1} role="dialog" aria-labelledby="SemesterSetModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="SemesterSetModalCenterTitle">학기 기간 설정</h5>
                  <button type="modal-close-btn button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <h5 className="modal-caution p-4">설정되어있는 시간에 맟춰 학기 데이터들이 지난학기로 옮겨집니다.</h5>
                <div className="modal-body p-4">
                  <h5>2020-1학기 시작</h5>
                  <p /><div className="search-nav-dropdown">
                    <div className="dropdown">
                      <button className="btn btn dropdown-toggle semester-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="far fa-calendar-check mr-3" />1일
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#" style={{color: '#3b5bdb'}}>1일</a>
                        <a className="dropdown-item" href="#">2일</a>
                        <a className="dropdown-item" href="#">3일</a>
                      </div>
                    </div>
                  </div><p />
                  <p>설정된 값 : 2020-03-01</p>
                  <hr />
                  <h5>2020-2학기 시작</h5>
                  <p /><div className="search-nav-dropdown">
                    <div className="dropdown">
                      <button className="btn btn dropdown-toggle semester-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="far fa-calendar-check mr-3" />1일
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#" style={{color: '#3b5bdb'}}>1일</a>
                        <a className="dropdown-item" href="#">2일</a>
                        <a className="dropdown-item" href="#">3일</a>
                      </div>
                    </div>
                  </div><p />
                  <p>설정된 값 : 2020-09-05</p>
                </div>
                <div className="modal-footer justify-content-center">
                  <button type="button" className="confirm-btn" data-dismiss="modal">설정</button>
                  <button type="button" className="close-btn" data-dismiss="modal">취소</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Semester set Modal end */}
        {/* profile info section start */}
        <section className="profile-section profile-info-section mb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="name-box info-box">
                  <div className="subject">유저 이름</div>
                  <div className="content">{ userInfo.username }</div>
                </div>
                <div className="name-box info-box">
                  <div className="subject">입학 년도</div>
                  <div className="content">{ userInfo.enter_year }년</div>
                </div>
                <div className="name-box info-box">
                  <div className="subject">이메일 주소</div>
                  <div className="content">{ userInfo.email }</div>
                </div>
                <div className="password-change-box info-box">
                  <div className="subject">비밀번호 변경</div>
                  <div className="content"><button type="button" className="btn btn-light password-change-btn">비밀번호 변경</button></div>
                </div>
                <div className="img-box info-box">
                  <div className="subject">이미지</div>
                  <div className="content"><button className="img-change-btn mr-3">이미지 변경</button><button className="img-delete-btn">이미지 삭제</button></div>
                </div>
                <div className="user-delete-box info-box">
                  <div className="subject">회원 탈퇴</div>
                  <div className="content"><button className="user-delete-btn">회원탈퇴</button></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* profile info section end */}
        {/* profile post section start */}
        <section className="profile-section profile-post-section mb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="post-title">별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤</div>
                <div className="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorum, numquam et dolorem magnam est nam quidem fugit, enim repudiandae aliquam, illo architecto optio ipsum id nihil pariatur quaerat aut.</div>
                <div className="post-info-box">
                  <span className="post-date">2020년 5월 21일</span>
                  <span className="mx-2">·</span>
                  <span className="post-comment"><i className="fas fa-comment mr-2" /><span className="mr-2 post-count">5</span></span>
                  <span className="post-like"><i className="fas fa-heart mr-2" /><span className="post-count">5</span></span>
                </div>
              </div>
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="post-title">별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤</div>
                <div className="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorum, numquam et dolorem magnam est nam quidem fugit, enim repudiandae aliquam, illo architecto optio ipsum id nihil pariatur quaerat aut.</div>
                <div className="post-info-box">
                  <span className="post-date">2020년 5월 21일</span>
                  <span className="mx-2">·</span>
                  <span className="post-comment"><i className="fas fa-comment mr-2" /><span className="mr-2 post-count">5</span></span>
                  <span className="post-like"><i className="fas fa-heart mr-2" /><span className="post-count">5</span></span>
                </div>
              </div>
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="post-title">별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤</div>
                <div className="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorum, numquam et dolorem magnam est nam quidem fugit, enim repudiandae aliquam, illo architecto optio ipsum id nihil pariatur quaerat aut.</div>
                <div className="post-info-box">
                  <span className="post-date">2020년 5월 21일</span>
                  <span className="mx-2">·</span>
                  <span className="post-comment"><i className="fas fa-comment mr-2" /><span className="mr-2 post-count">5</span></span>
                  <span className="post-like"><i className="fas fa-heart mr-2" /><span className="post-count">5</span></span>
                </div>
              </div>
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="post-title">별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤별 헤는 밤</div>
                <div className="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorum, numquam et dolorem magnam est nam quidem fugit, enim repudiandae aliquam, illo architecto optio ipsum id nihil pariatur quaerat aut.</div>
                <div className="post-info-box">
                  <span className="post-date">2020년 5월 21일</span>
                  <span className="mx-2">·</span>
                  <span className="post-comment"><i className="fas fa-comment mr-2" /><span className="mr-2 post-count">5</span></span>
                  <span className="post-like"><i className="fas fa-heart mr-2" /><span className="post-count">5</span></span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* profile post section end */}
        {/* profile menu section start */}
        <section className="profile-section profile-menu-section mb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="text-center">데이터테이블이 들어갈 예정</div>
              </div>
            </div>
          </div>
        </section>
        {/* profile menu section end */}
        {/* profile crew section start */}
        <section className="profile-section profile-crew-section mb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="text-center">데이터테이블이 들어갈 예정</div>
              </div>
            </div>
          </div>
        </section>
        {/* profile crew section end */}
        </div>
    );
  }
  
  export default Mypage;
  