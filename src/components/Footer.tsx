import payment from "../assets/img/payment.png";
function Footer(){
    return(
<>
<div className="container-fluid bg-success text-white-50 footer pt-5 mt-5"  style={{
        background:
          "linear-gradient(30deg, #2e7d32, #66bb6a, #71d676ff, #66bb6a, #2e7d32)",
      }}>
            <div className="container py-5">
                <div className="pb-4 mb-4" style={{borderBottom:" 1px solid rgba(226, 175, 24, 0.5) "}}>
                    <div className="row g-4">
                        <div className="col-lg-3">
                            <a href="#" className="text-decoration-none">
                                <h1 className="text-warning mb-0">Plant Shop</h1>
                                <p className="text-white mb-0">Organic Plants</p>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative mx-auto">
                                <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="number" placeholder="Your Email" data-has-listeners="true"/>
                                <button type="submit" className="btn btn-warning border-0 border-success py-3 px-4 position-absolute rounded-pill text-white" style={{top: "0", right: "0"}}>Subscribe Now</button>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="d-flex justify-content-end pt-3">
                                <a className="btn  btn-outline-warning me-2 btn-md-square rounded-circle" href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>

                                <a className="btn btn-outline-warning me-2 btn-md-square rounded-circle" href=""><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a className="btn btn-outline-warning me-2 btn-md-square rounded-circle" href=""><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                                <a className="btn btn-outline-warning btn-md-square rounded-circle" href=""><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-light mb-3">Why People Like us!</h4>
                            <p className="mb-4">typesetting, remaining essentially unchanged. It was 
                                popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                            <a href="" className="btn border-warning py-2 px-4 rounded-pill text-white">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex flex-column text-start footer-item">
                            <h4 className="text-white mb-3">Shop Info</h4>
                            <a className="btn-link text-white text-decoration-none" href="">About Us</a>
                            <a className="btn-link text-white text-decoration-none" href="">Contact Us</a>
                            <a className="btn-link text-white text-decoration-none" href="">Privacy Policy</a>
                            <a className="btn-link text-white text-decoration-none" href="">Terms &amp; Condition</a>
                            <a className="btn-link text-white text-decoration-none" href="">Return Policy</a>
                            <a className="btn-link text-white text-decoration-none" href="">FAQs &amp; Help</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex flex-column text-start footer-item">
                            <h4 className="text-light mb-3">Account</h4>
                            <a className="btn-link text-white text-decoration-none" href="">My Account</a>
                            <a className="btn-link text-white text-decoration-none" href="">Shop details</a>
                            <a className="btn-link text-white text-decoration-none" href="">Shopping Cart</a>
                            <a className="btn-link text-white text-decoration-none" href="">Wishlist</a>
                            <a className="btn-link text-white text-decoration-none" href="">Order History</a>
                            <a className="btn-link text-white text-decoration-none" href="">International Orders</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-light mb-3">Contact</h4>
                            <p>Address: 1429 Netus Rd, NY 48247</p>
                            <p>Email: Example@gmail.com</p>
                            <p>Phone: +0123 4567 8910</p>
                            <p>Payment Accepted</p>
                            <img src={payment} className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;