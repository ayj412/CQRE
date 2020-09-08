import React, { useEffect, useState } from 'react';
import axios from 'axios'

import '../../static/css/style.css';
import '../../static/css/common.css';

import male from '../../static/img/male.svg'

import './highlight.js';
import ReactQuill, {Quill} from 'react-quill';



const Post = ({match}) => {
  const [ posts, setPost ] = useState([]);

  Post.modules = {
    syntax: true,
    toolbar: false
  };

  useEffect(() => {
    axios
      .post("/api/getPost", {'postId': match.params.postId})
      .then(function (response) {
        setPost(response.data)
        })
    },[]);

    return (
        <div>
        {posts.map((post, index) => (
        <div key={index}>
        {/* post section start */}

        <article className="post-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <h1 className="post-title">{post.title}</h1>
                <div className="post-info-box d-flex">
                  <span className="post-username">{post.user}</span>
                  <span className="mx-2">·</span>
                  <span className="post-date">{post.regist_date}</span>
                  <div className="post-setting ml-auto">
                    <span className="post-edit mr-2">수정</span>
                    <span className="post-delete">삭제</span>
                  </div>
                </div>
                <div className="post-container">
                <ReactQuill theme={"snow"} value={JSON.parse(post.content)} modules={Post.modules} readOnly={true}/>
                </div>
              </div>
            </div>
          </div>
        </article>
        {/* post section end */}
        {/* post user section start */}
        <section className="post-user-section p-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="user-box d-flex">
                  <div className="user-img">
                    <img className="img-fluid" src={male} />
                  </div>
                  <div className="user-name align-self-center">
                    <span>16 안영재</span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </section>
        {/* post user section end */}
        {/* create comment section start */}
        </div>
      ))}

        <section className="create-comment-section p-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="comment-count mb-3">
                  <span>24개의 댓글</span>
                </div>
                <div className="comment-input">
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="댓글을 입력하세요" style={{resize: 'none'}} defaultValue={""} />
                </div>
                <div className="comment-add-btn mt-3">
                  <button type="button">댓글 작성</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* create comment section end */}
        {/* comment section start */}
        <section className="comment-section p-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="comment-box">
                  <div className="user-info d-flex">
                    <div className="user-img"><img className="img-fluid" src={male} /></div>
                    <div className="user-box ml-3 align-self-center">
                      <div className="user-name">16 안영재</div>
                      <div className="user-date">2020년 5월 20일</div>
                    </div>
                    <div className="comment-setting ml-auto align-self-center">
                      <span className="comment-edit mr-2">수정</span>
                      <span className="comment-delete">삭제</span>
                    </div>
                  </div>
                  <div className="user-comment mt-4"><p>피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!피드백은 환영입니다!</p></div>
                  <div className="add-comment"><span><i className="far fa-plus-square mr-2" />댓글 달기</span></div>
                  <hr />
                </div>
              </div>
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="comment-box">
                  <div className="user-info d-flex">
                    <div className="user-img"><img className="img-fluid" src={male} /></div>
                    <div className="user-box ml-3 align-self-center">
                      <div className="user-name">16 안영재</div>
                      <div className="user-date">2020년 5월 20일</div>
                    </div>
                    <div className="comment-setting ml-auto align-self-center">
                      <span className="comment-edit mr-2">수정</span>
                      <span className="comment-delete">삭제</span>
                    </div>
                  </div>
                  <div className="user-comment mt-4"><p>피드백 환영</p></div>
                  <div className="add-comment"><span><i className="far fa-plus-square mr-2" />댓글 달기</span></div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* comment section end */}
        </div>
    );
  }
  
  export default Post;
  