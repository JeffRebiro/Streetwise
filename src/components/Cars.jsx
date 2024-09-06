import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from '../Head';
import { Link } from 'react-router-dom';

function Cars() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6); // Adjust this number to fit your needs

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/posts/?category=Cars');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    // Pagination logic
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (posts.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Head />
            <section className="breadcrumb breadcrumb_bg align-items-center">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-sm-6">
                            <div className="breadcrumb_tittle text-left">
                                <h2>Cars</h2>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="breadcrumb_content text-right">
                                <p>Home<span>/</span>Cars</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_padding">
            <div className="container">
            <div className="row">
                {currentPosts.map((post, index) => (
                    <div key={post.id} className={`col-lg-${index === 0 ? '12' : '6'} col-sm-6`}>
                        <div className={`single_post post_1 ${index === 0 ? 'feature_post' : ''}`}>
                            <div className="single_post_img">
                                <img 
                                    src={post.image || 'path/to/default-image.png'} 
                                    alt={post.title} 
                                    style={{ height: index === 0 ? '430px' : '327px', width: index === 0 ? '750px' : '540px' }} 
                                />
                            </div>
                            <div className="single_post_text text-center">
                                <Link to="#">
                                    <h5>{post.category}</h5>
                                </Link>
                                <Link to={`/Post_detail/${post.id}`}>
                                    <h2>{post.title}</h2>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            </section>
            <div className="pagination">
                {[...Array(totalPages).keys()].map(number => (
                    <button
                        key={number + 1}
                        onClick={() => handlePageChange(number + 1)}
                        className={`page-link ${currentPage === number + 1 ? 'active' : ''}`}
                    >
                        {number + 1}
                    </button>
                ))}
            </div>
            <section className="social_connect_part">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="social_connect">
                                <div className="single-social_connect">
                                    <div className="social_connect_img">
                                        <img src="src/assets/img/insta/instagram_1.png" className="" alt="blog"/>
                                        <div className="social_connect_overlay">
                                            <Link to="#"><span className="ti-instagram"></span></Link> 
                                        </div>
                                    </div>
                                </div>
                                <div className="single-social_connect">
                                    <div className="social_connect_img">
                                        <img src="src/assets/img/insta/instagram_2.png" className="" alt="blog"/>
                                        <div className="social_connect_overlay">
                                            <Link to="#"><span className="ti-instagram"></span></Link> 
                                        </div>
                                    </div>
                                </div>
                                <div className="single-social_connect">
                                    <div className="social_connect_img">
                                        <img src="src/assets/img/insta/instagram_3.png" className="" alt="blog"/>
                                        <div className="social_connect_overlay">
                                            <Link to="#"><span className="ti-instagram"></span></Link> 
                                        </div>
                                    </div>
                                </div>
                                <div className="single-social_connect">
                                    <div className="social_connect_img">
                                        <img src="src/assets/img/insta/instagram_4.png" className="" alt="blog"/>
                                        <div className="social_connect_overlay">
                                            <Link to="#"><span className="ti-instagram"></span></Link> 
                                        </div>
                                    </div>
                                </div>
                                <div className="single-social_connect">
                                    <div className="social_connect_img">
                                        <img src="src/assets/img/insta/instagram_5.png" className="" alt="blog"/>
                                        <div className="social_connect_overlay">
                                            <Link to="#"><span className="ti-instagram"></span></Link> 
                                        </div>
                                    </div>
                                </div>
                                <div className="single-social_connect">
                                    <div className="social_connect_img">
                                        <img src="src/assets/img/insta/instagram_6.png" className="" alt="blog"/>
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
                            <h4>About us</h4>
                            <p>Heaven fruitful doesn't over the lesser days appear creeping seasons so behold bea Place likeness female form. Lesser Was green image lights fowl.</p>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                            <h4>Contact Info</h4>
                            <ul>
                                <li><p>Address: Your address goes here, your demo address.</p></li>
                                <li><p>Phone: +8880 44338899</p></li>
                                <li><p>Email: info@colorlib.com</p></li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                            <h4>Important Links</h4>
                            <ul>
                                <li><Link to="#">WHMCS-bridge</Link></li>
                                <li><Link to="#">Search Domain</Link></li>
                                <li><Link to="#">My Account</Link></li>
                                <li><Link to="#">Shopping Cart</Link></li>
                                <li><Link to="#">Our Main Shop</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright_text">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="copyright_part">
                                    <p className="footer-text m-0">Copyright © 2019 All rights reserved <span className="px-2">|</span> This template is Made with <Link to="http://colorlib.com"><i className="ti-heart"></i></Link> by <Link to="http://colorlib.com">Rebiro</Link></p>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center text-lg-right">
                                <div className="footer-social">
                                    <Link to="#"><i className="ti-facebook"></i></Link>
                                    <Link to="#"><i className="ti-twitter"></i> </Link>
                                    <Link to="#"><i className="ti-instagram"></i></Link>
                                    <Link to="#"><i className="ti-skype"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Cars;
