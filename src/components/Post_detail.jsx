import Head from '../Head';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function Post_detail (){
   const handleFocus = (event) => {
      event.target.placeholder = '';
    };
  
    const handleBlur = (event) => {
      event.target.placeholder = 'Search Keyword';
    };

    const [Post, setPost] = useState([]);
    
    const { id } = useParams();

    const getSinglePost = async () => {
      try {
          const { data } = await axios.get(`http://127.0.0.1:8000/posts/${id}/`);
          setPost(data);
      } catch (error) {
          console.error('Error fetching post:', error);
      }
  };

    useEffect(() => {
      getSinglePost();
    }, []);


    return(
        <>
        <Head/>
        <section className="breadcrumb breadcrumb_bg align-items-center">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-sm-6">
                    <div className="breadcrumb_tittle text-left">
                        <h2>blog details</h2>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="breadcrumb_content text-right">
                        <p>Home<span>/</span>blog details</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section className="blog_area single-post-area all_post section_padding">
        <div className="container">
         <div className="row">
            <div className="col-lg-8 posts-list">
               <div className="single-post">
                  <div className="feature-img">
                     <img src={Post.image || "src/assets/img/default.png"} alt="" style={{ height: '375px', width: '750px' }}/>
                  </div>
                  <div className="blog_details">
                     <h2>{Post.title}</h2>
                     <p className="excert">
                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                        fraction of the camp price. However, who has the willpower
                     </p>
                     <p>
                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                        fraction of the camp price. However, who has the willpower to actually sit through a
                        self-imposed MCSE training. who has the willpower to actually
                     </p>
                     <div className="quote-wrapper">
                        <div className="quotes">
                           MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                           should have to spend money on boot camp when you can get the MCSE study materials yourself at
                           a fraction of the camp price. However, who has the willpower to actually sit through a
                           self-imposed MCSE training.
                        </div>
                     </div>
                     <p>
                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                        fraction of the camp price. However, who has the willpower
                     </p>
                     <p>
                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                        fraction of the camp price. However, who has the willpower to actually sit through a
                        self-imposed MCSE training. who has the willpower to actually
                     </p>
                  </div>
               </div>
               <div className="navigation-top">
                  <div className="d-sm-flex justify-content-between text-center">
                     <p className="like-info"><span className="align-middle"><i className="far fa-heart"></i></span> Lily and 4
                        people like this</p>
                     <div className="col-sm-4 text-center my-2 my-sm-0">
                       <p className="comment-count"><span className="align-middle"><i className="far fa-comment"></i></span> 06 Comments</p>
                     </div>
                     <ul className="social-icons">
                        <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                        <li><Link to="#"><i className="fab fa-dribbble"></i></Link></li>
                        <li><Link to="#"><i className="fab fa-behance"></i></Link></li>
                     </ul>
                  </div>
               </div>
               <div className="blog-author">
                  <div className="media align-items-center">
                     <img src="/assets/img/blog/author.png" alt=""/>
                     <div className="media-body">
                        <Link to="#">
                           <h4>Harvard milan</h4>
                        </Link>
                        <p>Second divided from form fish beast made. Every of seas all gathered use saying you're, he
                           our dominion twon Second divided from</p>
                     </div>
                  </div>
               </div>
               <div className="comments-area">
                  <h4>05 Comments</h4>
                  <div className="comment-list">
                     <div className="single-comment justify-content-between d-flex">
                        <div className="user justify-content-between d-flex">
                           <div className="thumb">
                              <img src="/assets/img/comment/comment_1.png" alt=""/>
                           </div>
                           <div className="desc">
                              <p className="comment">
                                 Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                                 Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                              </p>
                              <div className="d-flex justify-content-between">
                                 <div className="d-flex align-items-center">
                                    <h5>
                                       <Link to="#">Emilly Blunt</Link>
                                    </h5>
                                    <p className="date">August 4, 2024 at 3:12 pm </p>
                                 </div>
                                 <div className="reply-btn">
                                    <Link to="#" className="btn-reply text-uppercase">reply</Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="comment-list">
                     <div className="single-comment justify-content-between d-flex">
                        <div className="user justify-content-between d-flex">
                           <div className="thumb">
                              <img src="/assets/img/comment/comment_2.png" alt=""/>
                           </div>
                           <div className="desc">
                              <p className="comment">
                                 Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                                 Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                              </p>
                              <div className="d-flex justify-content-between">
                                 <div className="d-flex align-items-center">
                                    <h5>
                                       <Link to="#">Emilly Blunt</Link>
                                    </h5>
                                    <p className="date">August 4, 2024 at 3:12 pm </p>
                                 </div>
                                 <div className="reply-btn">
                                    <Link to="#" className="btn-reply text-uppercase">reply</Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="comment-list">
                     <div className="single-comment justify-content-between d-flex">
                        <div className="user justify-content-between d-flex">
                           <div className="thumb">
                              <img src="/assets/img/comment/comment_3.png" alt=""/>
                           </div>
                           <div className="desc">
                              <p className="comment">
                                 Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                                 Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                              </p>
                              <div className="d-flex justify-content-between">
                                 <div className="d-flex align-items-center">
                                    <h5>
                                       <Link to="#">Emilly Blunt</Link>
                                    </h5>
                                    <p className="date">August 4, 2024 at 3:12 pm </p>
                                 </div>
                                 <div className="reply-btn">
                                    <Link to="#" className="btn-reply text-uppercase">reply</Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="comment-form">
                  <h4>Leave a Reply</h4>
                  <form className="form-contact comment_form" action="#" id="commentForm">
                     <div className="row">
                        <div className="col-12">
                           <div className="form-group">
                              <textarea className="form-control w-100" name="comment" id="comment" cols="30" rows="9"
                                 placeholder="Write Comment"></textarea>
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="form-group">
                              <input className="form-control" name="name" id="name" type="text" placeholder="Name"/>
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="form-group">
                              <input className="form-control" name="email" id="email" type="email" placeholder="Email"/>
                           </div>
                        </div>
                        <div className="col-12">
                           <div className="form-group">
                              <input className="form-control" name="website" id="website" type="text" placeholder="Website"/>
                           </div>
                        </div>
                     </div>
                     <div className="load_btn">
                        <Link to="#" className="btn_1">SUBMIT </Link>
                     </div>
                  </form>
               </div>
            </div>
            <div className="col-lg-4">
                    <div className="sidebar_widget">
                        <div className="single_sidebar_wiget search_form_widget">
                            <form action="#">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder='Search Keyword'
                                        onFocus={handleFocus} onBlur={handleBlur}/>
                                    <div className="btn_1">Search</div>
                                </div>
                            </form>
                        </div>
                        <div className="single_sidebar_wiget">
                            <div className="sidebar_tittle">
                                <h3>Categories</h3>
                            </div>
                            <div className="single_catagory_item category">
                                <ul className="list-unstyled">
                                    <li><a href="/Agriculture">Agriculture</a> <span>(15)</span> </li>
                                    <li><a href="/Fashion">Fashion</a> <span>(15)</span> </li>
                                    <li><a href="/Business">Business</a> <span>(15)</span> </li>
                                    <li><a href="/Sports">Sports</a> <span>(15)</span> </li>
                                    <li><a href="/Cars">Cars</a> <span>(15)</span> </li>
                                    <li><a href="/Vacations">Vacations</a> <span>(15)</span> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="single_sidebar_wiget">
                            <div className="sidebar_tittle">
                                <h3>Popular Feeds</h3>
                            </div>
                            <div className="single_catagory_post post_2 ">
                                <div className="category_post_img">
                                    <img src="/assets/img/sidebar/sidebar_1.png" alt=""/>
                                </div>
                                <div className="post_text_1 pr_30">
                                    <a href="single-blog.html">
                                        <h3>Subdue lesser beast winged
                                            bearing meat tree one</h3>
                                    </a>
                                    <p><span> By Michal</span> / March 30</p>
                                </div>
                            </div>
                            <div className="single_catagory_post post_2 ">
                                <div className="category_post_img">
                                    <img src="/assets/img/sidebar/sidebar_2.png" alt=""/>
                                </div>
                                <div className="post_text_1 pr_30">
                                    
                                    <a href="single-blog.html">
                                        <h3>Subdue lesser beast winged
                                            bearing meat tree one</h3>
                                    </a>
                                    <p><span> By Michal</span> / March 30</p>
                                </div>
                            </div>
                            <div className="single_catagory_post post_2">
                                <div className="category_post_img">
                                    <img src="/assets/img/sidebar/sidebar_3.png" alt=""/>
                                </div>
                                <div className="post_text_1 pr_30">
                                    <a href="single-blog.html">
                                        <h3>Subdue lesser beast winged
                                            bearing meat tree one</h3>
                                    </a>
                                    <p><span> By Michal</span> / March 30</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="single_sidebar_wiget">
                            <div className="sidebar_tittle">
                                <h3>Share this post</h3>
                            </div>
                            <div className="social_share_icon tags">
                                <ul className="list-unstyled">
                                    <li><a href="#"><i className="ti-facebook"></i></a></li>
                                    <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                    <li><a href="#"><i className="ti-pinterest"></i></a></li>
                                    <li><a href="#"><i className="ti-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            
          </div>
         </div>
      </section>
      <section className="social_connect_part">
            <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12">
                    <div className="social_connect">
                    <div className="single-social_connect">
                        <div className="social_connect_img">
                            <img src="/assets/img/insta/instagram_1.png" className="" alt="blog"/>
                            <div className="social_connect_overlay">
                                <a href="#"><span className="ti-instagram"></span></a> 
                            </div>
                        </div>
                    </div>
                    <div className="single-social_connect">
                        <div className="social_connect_img">
                            <img src="/assets/img/insta/instagram_2.png" className="" alt="blog"/>
                            <div className="social_connect_overlay">
                                <a href="#"><span className="ti-instagram"></span></a> 
                            </div>
                        </div>
                    </div>
                    <div className="single-social_connect">
                        <div className="social_connect_img">
                            <img src="/assets/img/insta/instagram_3.png" className="" alt="blog"/>
                            <div className="social_connect_overlay">
                                <a href="#"><span className="ti-instagram"></span></a> 
                            </div>
                        </div>
                    </div>
                    <div className="single-social_connect">
                        <div className="social_connect_img">
                            <img src="/assets/img/insta/instagram_4.png" className="" alt="blog"/>
                            <div className="social_connect_overlay">
                                <a href="#"><span className="ti-instagram"></span></a> 
                            </div>
                        </div>
                    </div>
                    <div className="single-social_connect">
                        <div className="social_connect_img">
                            <img src="/assets/img/insta/instagram_5.png" className="" alt="blog"/>
                            <div className="social_connect_overlay">
                                <a href="#"><span className="ti-instagram"></span></a> 
                            </div>
                        </div>
                    </div>
                    <div className="single-social_connect">
                        <div className="social_connect_img">
                            <img src="/assets/img/insta/instagram_6.png" className="" alt="blog"/>
                            <div className="social_connect_overlay">
                                <a href="#"><span className="ti-instagram"></span></a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
      </section>
      <footer className="footer-area">
		<div className="container">
			<div className="row">
				<div className="col-xl-3 col-lg-6 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
					<h4>About us</h4>
					<p>Heaven fruitful doesn't over the lesser days appear cree ping seasons so behold bea Place likeness female form. Lesser Was green image lights fowl.</p>
				</div>
				<div className="col-xl-3 col-lg-6 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
					<h4>Contact Info</h4>
					<ul>
						<li><p>Address :Your address goes
								here, your demo address.</p></li>
						<li><p>Phone : +8880 44338899</p></li>
						<li><p>Email : info@colorlib.com</p></li>
					</ul>
				</div>
				<div className="col-xl-3 col-lg-6 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
					<h4>Important Link</h4>
					<ul>
						<li><a href={`/UpdatePost/${Post.id}`}>WHMCS-bridge</a></li>
						<li><a href="#">Search Domain</a></li>
						<li><a href="#">My Account</a></li>
						<li><a href="#">Shopping Cart</a></li>
						<li><a href="#">Our  Main Shop</a></li>
					</ul>
				</div>
			</div>
			<div className="copyright_text">
				<div className="row align-items-center">
					<div className="col-lg-8">
						<div className="copyright_part">
							<p className="footer-text m-0">Copyright © 2019 All rights reserved <span className="px-2">|</span> This website is Made by <a href="http://colorlib.com"><i className="ti-heart"></i></a> by <a href="http://colorlib.com">Rebiro</a></p>
						</div>
					</div>
					<div className="col-lg-4 text-center text-lg-right">
						<div className="footer-social">
							<a href="#"><i className="ti-facebook"></i></a>
							<a href="#"> <i className="ti-twitter"></i> </a>
							<a href="#"><i className="ti-instagram"></i></a>
							<a href="#"><i className="ti-skype"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
      </footer>
        </>
    )
}
export default Post_detail;
