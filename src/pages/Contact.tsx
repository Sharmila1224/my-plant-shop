import Footer from "../components/Footer"
import Headerbanner from "../components/Headerbanner"

function Contact(){
    return(
        <>
        <Headerbanner/>
        <div className="p-5 bg-light rounded">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="text-center mx-auto" style={{maxWidth: "700px"}}>
                                <h1 className="text-success">Get in touch</h1>
                                {/* <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p> */}
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="h-100 rounded">
                                <iframe className="rounded w-100" style={{height: "400px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <form action="" className="">
                                <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Your Name" data-has-listeners="true"/>
                                <input type="email" className="w-100 form-control border-0 py-3 mb-4" placeholder="Enter Your Email" data-has-listeners="true"/>
                                <textarea className="w-100 form-control border-0 mb-4" rows={5} cols={10} placeholder="Your Message" data-has-listeners="true"></textarea>
                                <button className="w-100 btn form-control border-warning py-3 bg-white text-success " type="submit">Submit</button>
                            </form>
                        </div>
                        <div className="col-lg-5">
                            <div className="d-flex p-4 rounded mb-4 bg-white">
                                <i className="fa fa-address-card fa-2x text-success me-4"></i>
                                <div>
                                    <h4>Address</h4>
                                    <p className="mb-2">112 hometown,paris </p>
                                </div>
                            </div>
                            <div className="d-flex p-4 rounded mb-4 bg-white">
                          <i className="fa fa-envelope fa-2x text-success me-4"></i>
                                <div>
                                    <h4>Mail Us</h4>
                                    <p className="mb-2">Plantshop2021@gmail.com</p>
                                </div>
                            </div>
                            <div className="d-flex p-4 rounded mb-4 bg-white">
                          <i className="fa fa-phone-square fa-2x text-success me-4 "></i>
                                <div>
                                    <h4>Telephone</h4>
                                    <p className="mb-2">(+012) 3456 7890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
<Footer/>
        </>
    )
}
export default Contact