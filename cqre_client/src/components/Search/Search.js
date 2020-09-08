import React, { useEffect, useState } from 'react';

import '../../static/css/style.css';
import '../../static/css/common.css';

import card_no_img from '../../static/img/card_no_img.svg'


function Search() {
    return (
        <div>
        {/* search count section start */}
        <section className="search-count-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className>
                  "123"의 대한 검색결과  <span className="underline">12개의 제목</span>, <span className="underline">8개의 내용</span>이 있습니다
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* search count section end */}
        {/* card subject session start*/}
        <section className="card-section mt-5">
          <div className="container-fluid">
            <div className="search-category">12개의 제목</div>
            <div className="row">      
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="view overlay">
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" alt="Card image cap" />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">내용 넘칠 때</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                      content. Some quick example text to build on the card title and make up the bulk of the card's
                      content.</p>
                    <p className="card-text"><span className="text-muted">2020년 5월 4일 · 10개의 댓글</span></p>
                  </div>
                  <div className="card-footer d-flex bg-white">
                    <div className="bd-highlight mr-2"><div className="card-user-circle"><i className="fas fa-user" /></div></div>
                    <div className="bd-highlight"><span className="card-user text-muted mr-2">by</span><span className="card-user">16 안영재</span></div>
                    <div className="ml-auto bd-highlight">
                      <span className="card-comment"><i className="fas fa-comment mr-2" /><span className="mr-2 card-count">5</span></span>
                      <span className="card-like"><i className="fas fa-heart mr-2" /><span className="card-count">5</span></span>
                    </div>                     
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4 d-none d-md-block">
                <div className="card h-100 shadow-sm">
                  <div className="view overlay">
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap" />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">제목 넘칠 때 =================================</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                      content.</p>
                    <p className="card-text"><span className="text-muted">2020년 5월 4일 · 10개의 댓글</span></p>
                  </div>
                  <div className="card-footer d-flex bg-white">
                    <div className="bd-highlight mr-2"><div className="card-user-circle"><i className="fas fa-user" /></div></div>
                    <div className="bd-highlight"><span className="card-user text-muted mr-2">by</span><span className="card-user">16 안영재</span></div>
                    <div className="ml-auto bd-highlight">
                      <span className="card-comment"><i className="fas fa-comment mr-2" /><span className="mr-2 card-count">5</span></span>
                      <span className="card-like"><i className="fas fa-heart mr-2" /><span className="card-count">5</span></span>
                    </div>                     
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4 d-none d-lg-block">
                <div className="card h-100 shadow-sm">
                  <div className="view overlay">
                    <img className="card-img-top" src={card_no_img} alt="Card image cap" />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">글에 이미지가 없을 때 디폴트 썸네일</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                      content.</p>
                    <p className="card-text"><span className="text-muted">2020년 5월 4일 · 10개의 댓글</span></p>
                  </div>
                  <div className="card-footer d-flex bg-white">
                    <div className="bd-highlight mr-2"><div className="card-user-circle"><i className="fas fa-user" /></div></div>
                    <div className="bd-highlight"><span className="card-user text-muted mr-2">by</span><span className="card-user">16 안영재</span></div>
                    <div className="ml-auto bd-highlight">
                      <span className="card-comment"><i className="fas fa-comment mr-2" /><span className="mr-2 card-count">5</span></span>
                      <span className="card-like"><i className="fas fa-heart mr-2" /><span className="card-count">5</span></span>
                    </div>                     
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4 d-none d-xl-block">
                <div className="card h-100 shadow-sm">
                  <div className="view overlay">
                    <img className="card-img-top" src={card_no_img} alt="Card image cap" />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">글에 이미지가 없을 때 디폴트 썸네일</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                      content.</p>
                    <p className="card-text"><span className="text-muted">2020년 5월 4일 · 10개의 댓글</span></p>
                  </div>
                  <div className="card-footer d-flex bg-white">
                    <div className="bd-highlight mr-2"><div className="card-user-circle"><i className="fas fa-user" /></div></div>
                    <div className="bd-highlight"><span className="card-user text-muted mr-2">by</span><span className="card-user">16 안영재</span></div>
                    <div className="ml-auto bd-highlight">
                      <span className="card-comment"><i className="fas fa-comment mr-2" /><span className="mr-2 card-count">5</span></span>
                      <span className="card-like"><i className="fas fa-heart mr-2" /><span className="card-count">5</span></span>
                    </div>                     
                  </div>
                </div>
              </div>
            </div>
            <div className="load-all-btn "><button>모두보기</button></div>
          </div>
        </section>
        {/* card session end*/}
        {/* card content session start*/}
        <section className="card-section mt-5">
          <div className="container-fluid">
            <div className="search-category">8개의 내용</div>
            <div className="row">      
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="view overlay">
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" alt="Card image cap" />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">내용 넘칠 때</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                      content. Some quick example text to build on the card title and make up the bulk of the card's
                      content.</p>
                    <p className="card-text"><span className="text-muted">2020년 5월 4일 · 10개의 댓글</span></p>
                  </div>
                  <div className="card-footer d-flex bg-white">
                    <div className="bd-highlight mr-2"><div className="card-user-circle"><i className="fas fa-user" /></div></div>
                    <div className="bd-highlight"><span className="card-user text-muted mr-2">by</span><span className="card-user">16 안영재</span></div>
                    <div className="ml-auto bd-highlight">
                      <span className="card-comment"><i className="fas fa-comment mr-2" /><span className="mr-2 card-count">5</span></span>
                      <span className="card-like"><i className="fas fa-heart mr-2" /><span className="card-count">5</span></span>
                    </div>                     
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4 d-none d-md-block">
                <div className="card h-100 shadow-sm">
                  <div className="view overlay">
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap" />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">제목 넘칠 때 =================================</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                      content.</p>
                    <p className="card-text"><span className="text-muted">2020년 5월 4일 · 10개의 댓글</span></p>
                  </div>
                  <div className="card-footer d-flex bg-white">
                    <div className="bd-highlight mr-2"><div className="card-user-circle"><i className="fas fa-user" /></div></div>
                    <div className="bd-highlight"><span className="card-user text-muted mr-2">by</span><span className="card-user">16 안영재</span></div>
                    <div className="ml-auto bd-highlight">
                      <span className="card-comment"><i className="fas fa-comment mr-2" /><span className="mr-2 card-count">5</span></span>
                      <span className="card-like"><i className="fas fa-heart mr-2" /><span className="card-count">5</span></span>
                    </div>                     
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4 d-none d-lg-block">
                <div className="card h-100 shadow-sm">
                  <div className="view overlay">
                    <img className="card-img-top" src={card_no_img} alt="Card image cap" />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">글에 이미지가 없을 때 디폴트 썸네일</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                      content.</p>
                    <p className="card-text"><span className="text-muted">2020년 5월 4일 · 10개의 댓글</span></p>
                  </div>
                  <div className="card-footer d-flex bg-white">
                    <div className="bd-highlight mr-2"><div className="card-user-circle"><i className="fas fa-user" /></div></div>
                    <div className="bd-highlight"><span className="card-user text-muted mr-2">by</span><span className="card-user">16 안영재</span></div>
                    <div className="ml-auto bd-highlight">
                      <span className="card-comment"><i className="fas fa-comment mr-2" /><span className="mr-2 card-count">5</span></span>
                      <span className="card-like"><i className="fas fa-heart mr-2" /><span className="card-count">5</span></span>
                    </div>                     
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4 d-none d-xl-block">
                <div className="card h-100 shadow-sm">
                  <div className="view overlay">
                    <img className="card-img-top" src={card_no_img} alt="Card image cap" />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">글에 이미지가 없을 때 디폴트 썸네일</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                      content.</p>
                    <p className="card-text"><span className="text-muted">2020년 5월 4일 · 10개의 댓글</span></p>
                  </div>
                  <div className="card-footer d-flex bg-white">
                    <div className="bd-highlight mr-2"><div className="card-user-circle"><i className="fas fa-user" /></div></div>
                    <div className="bd-highlight"><span className="card-user text-muted mr-2">by</span><span className="card-user">16 안영재</span></div>
                    <div className="ml-auto bd-highlight">
                      <span className="card-comment"><i className="fas fa-comment mr-2" /><span className="mr-2 card-count">5</span></span>
                      <span className="card-like"><i className="fas fa-heart mr-2" /><span className="card-count">5</span></span>
                    </div>                     
                  </div>
                </div>
              </div>
            </div>
            <div className="load-all-btn "><button>모두보기</button></div>
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
  
  export default Search;
  