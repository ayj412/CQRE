import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { createHashHistory } from "history";

import '../../static/css/style.css';
import '../../static/css/common.css';

import registImg from '../../static/img/regist.svg';

function Regist() {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userRePw, setUserRePw] = useState('');
  const [userName, setUserName] = useState('');
  const [userEnterDate, setUserEnterDate] = useState('');
  const [isRegistSuccess, setIsRegistSuccess] = useState(false);

  const registUserApi = (user) => {
    return axios.post('/api/regist_user', {
      user: user
    }).then(response => response)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userPw != userRePw) {
      Swal.fire({
        title: '로그인 오류',
        text: '비밀번호가 일치하지 않습니다',
        icon: 'error',
        confirmButtonText: '확인',
        confirmButtonColor: '#d33',
      })
      return 0;
    }    

    try {
      const response = await registUserApi({
        userId: userId,
        userPw: userPw,
        userName: userName,
        userEnterDate: userEnterDate
      })

      if(response.data.result == '200') {
        setIsRegistSuccess(true);
        Swal.fire({
          title: '회원가입 성공',
          text: '회원가입이 성공적으로 되었습니다.',
          icon: 'success',
          confirmButtonText: '확인',
          confirmButtonColor: '#22b66e',
        }).then((value) => {
          console.log('regist error', value);
          if(value.isConfirmed == true){
            const history = createHashHistory();
            history.go("/");
          }
        });
      }
      else if( response.data.result == '300' ) {
        Swal.fire({
          title: '회원가입 오류',
          text: '이미 가입되어 있는 이메일입니다..',
          icon: 'error',
          confirmButtonText: '확인',
          confirmButtonColor: '#d33',
        })
      }
      else {
        Swal.fire({
          title: '회원가입 오류',
          text: '관리자에게 문의하세요.',
          icon: 'error',
          confirmButtonText: '확인',
          confirmButtonColor: '#d33',
        })
      }

    }
    catch (err){
      console.log('regist error', err);
      alert('오류발생')
    }
  }


    return (
        <div>
                <div className="container-fluid regist-container">
                  <div className="row login-row mx-auto shadow">
                    <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                      <div className="login-img justify-content-center">
                        <img className="img-responsive d-block mx-auto" src={registImg} />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                      <div className="login-container">
                        <form onSubmit={handleSubmit}>
                          <h2 className="login-title text-center"><a href="index.html">CQRE</a></h2>
                          <h4 className="login-welcome text-center text-center">Welcome to CQRE</h4>
                          <div className="input-div one">
                            <div className="i">
                              <i className="fas fa-envelope" />
                            </div>
                            <div className="div">
                              <h5>이메일</h5>
                              <input type="text" onChange={ e => setUserId(e.target.value) } className="input" />
                            </div>
                          </div>
                          <div className="input-div pass">
                            <div className="i"> 
                              <i className="fas fa-user" />
                            </div>
                            <div className="div">
                              <h5>이름</h5>
                              <input type="text" onChange={ e => setUserName(e.target.value) } className="input" />
                            </div>      
                          </div>
                          <div className="input-div pass">
                            <div className="i"> 
                              <i className="fas fa-calendar-check" />
                            </div>
                            <div className="div">
                              <h5>입학년도 ex)2019</h5>
                              <input type="text" onChange={ e => setUserEnterDate(e.target.value) } className="input" />
                            </div>      
                          </div>
                          <div className="input-div pass">
                            <div className="i"> 
                              <i className="fas fa-lock" />
                            </div>
                            <div className="div">
                              <h5>비밀번호</h5>
                              <input type="password" onChange={ e => setUserPw(e.target.value) } className="input" />
                            </div>      
                          </div>
                          <div className="input-div pass">
                            <div className="i"> 
                              <i className="fas fa-lock" />
                            </div>
                            <div className="div">
                              <h5>비밀번호 확인</h5>
                              <input type="password" onChange={ e => setUserRePw(e.target.value) } className="input" />
                            </div>      
                          </div>
                          <div className="login-btn">
                            <button type="submit">회원가입</button>
                          </div>
                          <div className="regist-to-login mt-4"><span className="mr-2">이미 계정이 있으신가요?</span><span className="bold move_login">로그인</span></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
    );
  }
  
  export default Regist;
  