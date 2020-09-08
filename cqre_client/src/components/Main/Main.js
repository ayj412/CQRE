import React, { useEffect, useState } from 'react';
import axios from 'axios'

import '../../static/css/style.css';
import '../../static/css/common.css';

import masthread from '../../static/img/masthread2.svg'
import card_no_img from '../../static/img/card_no_img.svg'


function Main() {
  const [ posts, setPost ] = useState([]);

  useEffect(() => {
    axios
      .post("/api/getPosts")
      .then(({ data }) => setPost(data));
      
  },[]);



    return (
      <div>
      {/* {posts.map((post, index) => (
        <div key={index}>
          <div>{post.title}</div>
        </div>
      ))} */}
      {/* masthead section start */}
      <section className="masthead-section">
        <div className="container-fluid">
          <div className="masthread-row">
            <div className="row flex-column-reverse flex-md-row">
              <div className="col-md align-self-center">
                <div className="masthread-content">
                  <div className="masthead-title">
                    <h2>
                      순천향대 정보보호학과 동아리 <a href className="typewrite" data-period={3000} data-type="[ &quot;CQRE&quot; ]">
                        <span className="wrap" />
                      </a></h2>
                  </div>
                  <div className="masthead-text">
                    <p>CQRE는 시스템보안, 운영체제보안, 임베디드시스템보안 웹 개발 등 다양한 활동을 하고있습니다.</p>
                  </div>
                </div>
              </div>
              <div className="col-md order-md-12">
                <div className="masthead-img">
                  <img className="mx-auto d-block img-responsive" src={masthread} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* masthead section end */}
      {/* search nav start */}
      <nav className="search-nav mt-5 ml-5 mr-5" style={{position: 'relative'}}>
        <span className="search-nav-left"><i className="fas fa-chevron-left" /></span>
        <span className="search-nav-right"><i className="fas fa-chevron-right" /></span>
        <div className="search-link-wrapper">
          <div className="search-link-box" style={{display: 'inline-block'}}>
            <a className="search-nav-link active">전체</a>
            <a className="search-nav-link">공지사항</a>
            <a className="search-nav-link">웹</a>
            <a className="search-nav-link">포너블</a>
            <a className="search-nav-link">리버싱</a>
            <a className="search-nav-link">아두이노</a>
            <a className="search-nav-link">포렌식</a>  
            <a className="search-nav-link">기타</a>
          </div>
        </div>
      </nav>
      {/* search nav end */}
      {/* card session start*/}
      <section className="card-section mt-5">
        <div className="container-fluid">
          <div className="row">

          {posts.map((post, index) => (
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card h-100" id={post.id} onClick={() => window.location.replace('post/'+post.id)}>
                <div className="view overlay">
                  {
                    post.thumbnail 
                    ? <img className="card-img-top" src={post.thumbnail} alt="Card image cap" />
                    : <img className="card-img-top" src={card_no_img} alt="Card image cap" />
                  }
                </div>
                <div className="card-body">
                  <h4 className="card-title">{post.title}</h4>
                  <p className="card-text">{post.summary}</p>
                  <p className="card-text"><span className="text-muted">{post.regist_date}</span></p>
                </div>
                <div className="card-footer d-flex bg-white">
                  <div className="bd-highlight mr-2"><div className="card-user-circle"><i className="fas fa-user" /></div></div>
                  <div className="bd-highlight"><span className="card-user text-muted mr-2">by</span><span className="card-user">{post.user}</span></div>
                  <div className="ml-auto bd-highlight">
                    <span className="card-comment"><i className="fas fa-comment mr-2" /><span className="mr-2 card-count">{post.comment_cnt}</span></span>
                    <span className="card-like"><i className="fas fa-heart mr-2" /><span className="card-count">{post.like_cnt}</span></span>
                  </div>                     
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
      {/* card session end*/}
      {/* footer start */}
      <footer>
        <hr />
        <div className="container-fluid">
          <div className="row">
          </div>
        </div>
      </footer>
      {/* footer end */}
    </div>
    );
  }
  
  export default Main;
  