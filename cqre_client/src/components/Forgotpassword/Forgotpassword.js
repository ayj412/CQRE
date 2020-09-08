import React, { useEffect, useState } from 'react';
import axios from 'axios'

import '../../static/css/style.css';
import '../../static/css/common.css';
import park from '../../static/img/park.svg';


function Forgotpassword() {
    return (
        <div>
                <div className="container-fluid forgot-password-container">
                  <div className="row login-row mx-auto shadow">
                    <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                      <div className="login-img justify-content-center">
                        <img className="img-responsive d-block mx-auto" src={park} />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                      <div className="login-container">
                        <form>
                          <h2 className="login-title text-center">CQRE</h2>
                          <h4 className="login-welcome text-center text-center">Welcome to CQRE</h4>
                          <div className="input-div one">
                            <div className="i">
                              <i className="fas fa-envelope" />
                            </div>
                            <div className="div">
                              <h5>이메일</h5>
                              <input type="text" className="input" />
                            </div>
                          </div>
                          <div className="login-btn">
                            <button type="button">이메일 전송</button>
                          </div>
                          <div className="regist-to-login mt-4"><span className="mr-2">비밀번호가 기억 나셨나요?</span><span className="move_login bold">로그인</span></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
    );
  }
  
  export default Forgotpassword;
  
