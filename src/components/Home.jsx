import React from 'react';
import Head from '../Head';

import Body from '../Body';
import { Link } from 'react-router-dom';

function Home (){    
    return (
        <>
        <Head/>
        <section className="banner_post">
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <div className="banner_post_1 banner_post_bg_1">
                            <div className="banner_post_iner text-center">
                                <Link to="category.html"><h5>Fashion / Life style</h5></Link>
                                <Link to="/Post_detail"><h2>All said replenish years void kind say void</h2></Link>
                            </div>
                        </div>
                        <div className="banner_post_1 banner_post_bg_2">
                            <div className="banner_post_iner text-center">
                                <Link to="category.html"><h5>Fashion / Life style</h5></Link>
                                <Link to="/Post_detail"><h2>All said replenish years void kind say void</h2></Link>
                            </div>
                        </div>
                        <div className="banner_post_1 banner_post_bg_3">
                            <div className="banner_post_iner text-center">
                                <Link to="category.html"><h5>Fashion / Life style</h5></Link>
                                <Link to="/Post_detail"><h2>All said replenish years void kind say inevitability</h2></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="subscribe_form padding_top margin_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="subscribe_form_iner">
                                <form>
                                    <div className="form-row align-items-center justify-content-center">
                                        <div className="col-md-12 col-lg-3">
                                            <h3>Subscribe Our Newsletter</h3>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                            <input type="text" className="form-control" placeholder="Your name" />
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                            <input type="text" className="form-control" placeholder="Your email" />
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                            <Link to="#" className="btn_1">Subscribe</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        <Body/>    
        </>
    )
}
export default Home;