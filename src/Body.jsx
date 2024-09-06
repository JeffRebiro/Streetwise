import { Link } from 'react-router-dom';
function Body(){
    const handleFocus = (event) => {
        event.target.placeholder = '';
      };
    
      const handleBlur = (event) => {
        event.target.placeholder = 'Search Keyword';
      };
// change /Fashion to  {`/category/${post.category}`}
      
    return(
        <>
        <section className="all_post section_padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="single_post post_1 feature_post">
                                <div className="single_post_img">
                                    <img src="/assets/img/post/post_12.png" alt=""/>
                                </div>
                                <div className="single_post_text text-center">
                                    <Link to="#"><h5> Fashion / Life style</h5></Link> 
                                    <Link to="#"><h2>All said replenish years void kind say vaders </h2></Link> 
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="single_post post_1">
                                <div className="single_post_img">
                                    <img src="/assets/img/post/post_18.png" alt=""/>
                                </div>
                                <div className="single_post_text text-center">
                                    <Link to="#"><h5> Fashion / Life style</h5></Link> 
                                    <Link to="#"><h2>Your life is a product your right decisions</h2></Link> 
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                                <div className="single_post post_1">
                                    <div className="single_post_img">
                                        <img src="/assets/img/post/post_19.png" alt=""/>
                                    </div>
                                    <div className="single_post_text text-center">
                                        <Link to="#"><h5> Fashion / Life style</h5></Link> 
                                        <Link to="#"><h2>Your life is a product your right decisions</h2></Link> 
                                    </div>
                                </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="single_post post_1">
                                <div className="single_post_img">
                                    <img src="/assets/img/post/post_20.png" alt=""/>
                                </div>
                                <div className="single_post_text text-center">
                                    <Link to="#"><h5> Fashion / Life style</h5></Link> 
                                    <Link to="#"><h2>Your life is a product your right decisions</h2></Link> 
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                                <div className="single_post post_1">
                                    <div className="single_post_img">
                                        <img src="/assets/img/post/post_21.png" alt=""/>
                                    </div>
                                    <div className="single_post_text text-center">
                                        <Link to="#"><h5> Fashion / Life style</h5></Link> 
                                        <Link to="#"><h2>Your life is a product your right decisions</h2></Link> 
                                    </div>
                                </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="single_post post_1">
                                <div className="single_post_img">
                                    <img src="/assets/img/post/post_22.png" alt=""/>
                                </div>
                                <div className="single_post_text text-center">
                                    <Link to="#"><h5> Fashion / Life style</h5></Link> 
                                    <Link to="#"><h2>Your life is a product your right decisions</h2></Link> 
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                                <div className="single_post post_1">
                                    <div className="single_post_img">
                                        <img src="/assets/img/post/post_23.png" alt=""/>
                                    </div>
                                    <div className="single_post_text text-center">
                                        <Link to="#"><h5> Fashion / Life style</h5></Link> 
                                        <Link to="#"><h2>Your life is a product your right decisions</h2></Link> 
                                    </div>
                                </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="single_post post_1">
                                <div className="single_post_img">
                                    <img src="/assets/img/post/post_24.png" alt=""/>
                                </div>
                                <div className="single_post_text text-center">
                                    <Link to="#"><h5> Fashion / Life style</h5></Link> 
                                    <Link to="#"><h2>Your life is a product your right decisions</h2></Link> 
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                                <div className="single_post post_1">
                                    <div className="single_post_img">
                                        <img src="/assets/img/post/post_25.png" alt=""/>
                                    </div>
                                    <div className="single_post_text text-center">
                                        <Link to="#"><h5> Fashion / Life style</h5></Link> 
                                        <Link to="#"><h2>Your life is a product your right choices</h2></Link> 
                                    </div>
                                </div>
                        </div>
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
                                    <li><Link to="/Agriculture">Agriculture</Link> <span>(15)</span> </li>
                                    <li><Link to="/Fashion">Fashion</Link> <span>(15)</span> </li>
                                    <li><Link to="/Business">Business</Link> <span>(15)</span> </li>
                                    <li><Link to="/Sports">Sports</Link> <span>(15)</span> </li>
                                    <li><Link to="/Cars">Cars</Link> <span>(15)</span> </li>
                                    <li><Link to="/Vacations">Vacations</Link> <span>(15)</span> </li>
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
                                    <Link to="/Post_detail">
                                        <h3>Subdue lesser beast winged
                                            bearing meat tree one</h3>
                                    </Link>
                                    <p><span> By Michal</span> / March 30</p>
                                </div>
                            </div>
                            <div className="single_catagory_post post_2 ">
                                <div className="category_post_img">
                                    <img src="/assets/img/sidebar/sidebar_2.png" alt=""/>
                                </div>
                                <div className="post_text_1 pr_30">
                                    
                                    <Link to="/Post_detail">
                                        <h3>Subdue lesser beast winged
                                            bearing meat tree one</h3>
                                    </Link>
                                    <p><span> By Michal</span> / March 30</p>
                                </div>
                            </div>
                            <div className="single_catagory_post post_2">
                                <div className="category_post_img">
                                    <img src="/assets/img/sidebar/sidebar_3.png" alt=""/>
                                </div>
                                <div className="post_text_1 pr_30">
                                    <Link to="/Post_detail">
                                        <h3>Subdue lesser beast winged
                                            bearing meat tree one</h3>
                                    </Link>
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
                                    <li><Link to="#"><i className="ti-facebook"></i></Link></li>
                                    <li><Link to="#"><i className="ti-twitter-alt"></i></Link></li>
                                    <li><Link to="#"><i className="ti-pinterest"></i></Link></li>
                                    <li><Link to="#"><i className="ti-instagram"></i></Link></li>
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
                                <Link to="#"><span className="ti-instagram"></span></Link> 
                            </div>
                        </div>
                    </div>
                    <div className="single-social_connect">
                        <div className="social_connect_img">
                            <img src="/assets/img/insta/instagram_2.png" className="" alt="blog"/>
                            <div className="social_connect_overlay">
                                <Link to="#"><span className="ti-instagram"></span></Link> 
                            </div>
                        </div>
                    </div>
                    <div className="single-social_connect">
                        <div className="social_connect_img">
                            <img src="/assets/img/insta/instagram_3.png" className="" alt="blog"/>
                            <div className="social_connect_overlay">
                                <Link to="#"><span className="ti-instagram"></span></Link> 
                            </div>
                        </div>
                    </div>
                    <div className="single-social_connect">
                        <div className="social_connect_img">
                            <img src="/assets/img/insta/instagram_4.png" className="" alt="blog"/>
                            <div className="social_connect_overlay">
                                <Link to="#"><span className="ti-instagram"></span></Link> 
                            </div>
                        </div>
                    </div>
                    <div className="single-social_connect">
                        <div className="social_connect_img">
                            <img src="/assets/img/insta/instagram_5.png" className="" alt="blog"/>
                            <div className="social_connect_overlay">
                                <Link to="#"><span className="ti-instagram"></span></Link> 
                            </div>
                        </div>
                    </div>
                    <div className="single-social_connect">
                        <div className="social_connect_img">
                            <img src="/assets/img/insta/instagram_6.png" className="" alt="blog"/>
                            <div className="social_connect_overlay">
                                <Link to="#"><span className="ti-instagram"></span></Link> 
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
					<h4>about us</h4>
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
						<li><Link to="/AddPost">WHMCS-bridge</Link></li>
						<li><Link to="#">Search Domain</Link></li>
						<li><Link to="#">My Account</Link></li>
						<li><Link to="#">Shopping Cart</Link></li>
						<li><Link to="#">Our  Main Shop</Link></li>
					</ul>
				</div>
			</div>
			<div className="copyright_text">
				<div className="row align-items-center">
					<div className="col-lg-8">
						<div className="copyright_part">
							<p className="footer-text m-0">Copyright © 2024 All rights reserved <span className="px-2">|</span> This template is Made with <Link to="#"><i className="ti-heart"></i></Link> by <Link to="#">Rebiro</Link></p>
						</div>
					</div>
					<div className="col-lg-4 text-center text-lg-right">
						<div className="footer-social">
							<Link to="#"><i className="ti-facebook"></i></Link>
							<Link to="#"> <i className="ti-twitter"></i> </Link>
							<Link to="#"><i className="ti-instagram"></i></Link>
							<Link to="#"><i className="ti-skype"></i></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
    <script src="/assets/js/jquery-1.12.1.min.js"></script>
    <script src="/assets/js/popper.min.js"></script>
    <script src="/assets/js/bootstrap.min.js"></script>
    <script src="/assetsjs/custom.js"></script>
        </>
    )
};
export default Body;