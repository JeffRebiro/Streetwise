import { Link } from 'react-router-dom';
function Head () {
    return (
        <>
          <header className="main_menu">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-14">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link to="/"> <img src="/assets/img/logo.png" alt="logo"/> </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse main-menu-item justify-content-center"
                            id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>                        
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Agriculture">Agriculture</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Fashion">Fashion</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Cars">Cars</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Vacations">Vacations</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="header_social_icon d-none d-lg-block">
                            <ul>
                                <li>
                                    <div id="wrap">
                                        <form action="#" autoComplete="on">
                                            <input id="search" name="search" type="text" placeholder="Search here"/><span className="ti-search"></span> 
                                        </form>
                                    </div>
                                </li>
                                <li><Link to="#" className="d-none d-lg-block"><i className="ti-facebook"></i></Link></li>
                                <li><Link to="#" className="d-none d-lg-block"> <i className="ti-twitter-alt"></i></Link></li>
                                <li><Link to="#" className="d-none d-lg-block"><i className="ti-instagram"></i></Link></li>
                                <li><Link to="#" className="d-none d-lg-block"><i className="ti-skype"></i></Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <script src="/assets/js/jquery-1.12.1.min.js"></script>
    <script src="/assets/js/popper.min.js"></script>
    <script src="/assets/js/bootstrap.min.js"></script>
    <script src="/assetsjs/custom.js"></script>
        </>
    )
}
export default Head;