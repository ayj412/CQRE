import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'
import { createHashHistory } from "history";



import '../../static/css/style.css';
import '../../static/css/common.css';

import dream from '../../static/img/dream.svg'


// function Login( {setHasCookie}, props ) {
    const Login = ({setHasCookie}, props) => {

    const [ userEmail, setUserEmail ] = useState('');
    const [ userPw, setUserPw ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userEmail || !userPw) {
            return;
        }
        try {
            const response = await loginApi({
                userEmail: userEmail,
                userPw: userPw
            });
            console.log('response', response);
            if (response.data.result == 200) {
                {setHasCookie(true)};
                const history = createHashHistory();
                history.go("/")
            }
            else if(response.data.result == 404) {
                Swal.fire({
                    title: '로그인 오류',
                    text: '회원 정보가 일치하지 않습니다',
                    icon: 'error',
                    confirmButtonText: '확인',
                    confirmButtonColor: '#d33',
                  })
            }
            // else {
            //     throw new Error(response.error);
            // }
        } catch (err) {
            alert('로그인에 실패했습니다.');
            setUserEmail('');
            setUserPw('');
            console.log('login error', err);
        }
    };
    const loginApi = (user) => {
        return axios.post('/api/get_session', {
            user: user
          })
          .then(response => response)

    };




    return (
        <div>
            <div className="container-fluid common-container">
                  <div className="row login-row mx-auto shadow">
                    <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                      <div className="login-img justify-content-center">
                        <img className="img-responsive d-block mx-auto" src={dream} />
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
                              <input type="text" className="input" value={userEmail} onChange={e=>setUserEmail(e.target.value)} />
                            </div>
                          </div>
                          <div className="input-div pass">
                            <div className="i"> 
                              <i className="fas fa-lock" />
                            </div>
                            <div className="div">
                              <h5>비밀번호</h5>
                              <input type="password" className="input" value={userPw} onChange={e=>setUserPw(e.target.value)} />
                            </div>      
                          </div>
                          <div className="forgot-password mb-4"><span className="move-forgot-password">비밀번호를 잊으셨습니까?</span></div>
                          <div className="login-btn">
                            <button type="submit">로그인</button>
                          </div>
                          <div className="login-to-regist mt-4"><span className="mr-2">계정이 없으신가요?</span><span className="move-regist bold">회원가입</span></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
    );
  }
  
  export default Login;
  