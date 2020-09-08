import React, { useEffect, useState } from 'react';

import '../../static/css/style.css';
import '../../static/css/common.css';
import '../Post/highlight';
import blankImg from '../../static/img/blank-img.png'

const Write = () => {
  
    return (
        <>
        {/* post-new-section nav start */}
        <section className="post-new-section">
        <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                  <input className="title-input mb-4" id="post_title" type="text" placeholder="제목을 입력해주세요" />

                  <div id="editor-container" />
                  <div className="write-btn">
                      <button className="click-save" data-toggle="modal" data-target="#WriteModalCenter">작성하기</button>
                      
                  </div>
              </div>
            </div>
        </div>
        </section>
        {/* post-new-section nav end */}

        {/* write Modal start */}
        <section className="write-modal">
          <div className="modal fade" id="WriteModalCenter" tabIndex={-1} role="dialog" aria-labelledby="WriteModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="WriteModalCenterTitle"><i class="fas fa-book mr-4" />포스트 미리보기</h5>
                  <button type="modal-close-btn button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body p-5">
                  <div className="modal-thumbnail mx-auto" >
                    <img src={blankImg} id="thumbnail"></img>
                    <input type="file" id="thumbnail_input" accept="image/*" hidden></input>
                    <div class="thumbnail-input" href='#'>썸네일 업로드</div>
                  </div>
                  <div className="modal-summary mt-3">
                    <textarea id="post_summary" placeholder="포스트를 짧게 소개해주세요."></textarea>
                  </div>
                </div>
                <div className="modal-footer justify-content-center">
                  <button type="button" className="close-btn" data-dismiss="modal">취소</button>
                  <button type="button" className="confirm-btn ml-4" id="post-regist-btn">작성</button>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Semester Modal end */}
        </>
    );
  }
  
  
  export default Write;
  