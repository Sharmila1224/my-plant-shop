import { useState } from "react"
import Headerbanner from "../components/Headerbanner"
import Navbar from "../components/Navbar"
import shopbanner from "../assets/img/shopbanner.jpg"
// import aleovera from '../assets/img/aleovera.jpg'
import toolimg1 from "../assets/img/toolimg1.jpg"
import toolimg2 from "../assets/img/toolimg2.jpg"
import toolimg3 from "../assets/img/toolimg3.jpg"
import sunflower from "../assets/img/sunflowerseed.jpg"
import tomatoseed from "../assets/img/TomatoSeeds.webp"
import bittergourd from "../assets/img/bittergourdseed.webp"
import redsoil from "../assets/img/redsoil.jpg"
import rosysoil from "../assets/img/rosysoil.webp"
import pottingsoil from "../assets/img/pottingsoil.jpg"
import Footer from "../components/Footer"

function Shop(){
const [qty, setQty] = useState(Array(9).fill(0))
const cartControls = (i: number) => (
  qty[i] === 0 ? (
    <button
      type="button"
      className="btn btn-outline-success"
      onClick={() => {
        const copy = [...qty]
        copy[i] = 1
        setQty(copy)
      }}
    >
      ADD TO CART
    </button>
  ) : (
    <div className="d-flex justify-content-center align-items-center gap-2">
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={() => {
          const copy = [...qty]
          copy[i] = copy[i] - 1
          setQty(copy)
        }}
      >
        -
      </button>

      <span style={{ fontWeight: "bold" }}>{qty[i]}</span>

      <button
        type="button"
        className="btn btn-outline-success"
        onClick={() => {
          const copy = [...qty]
          copy[i] = copy[i] + 1
          setQty(copy)
        }}
      >
        +
      </button>
    </div>
  )
)


    return(
<>
<Navbar/>
<Headerbanner/>

<div className="container-fluid py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-md-12 col-lg-7">
                        <h4 className="mb-3 text-warning">100% Organic Plants</h4>
                        <h1 className="mb-5 display-2 text-success">Organic Seeds &amp; soil Foods</h1>
                        <div className="position-relative mx-auto">
                            <input className="form-control border-2 border-warning w-75 py-3 px-4 rounded-pill" type="text" placeholder="Search" data-has-listeners="true"/>
                            <button type="submit" className="btn btn-success border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style={{ top: "0", right: "25%" }}>Submit Now</button>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item rounded">
                                    <img src={shopbanner} className="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide"/>
                                    <a href="#" className="btn px-4 py-2 text-white rounded">Fruites</a>
                                </div>
                                <div className="carousel-item rounded active">
                                    <img src={shopbanner} className="img-fluid w-100 h-100 rounded" alt="Second slide"/>
                                    <a href="#" className="btn px-4 py-2 text-white rounded">Vegetables</a>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<div className="row g-4">
                        <div className="col-lg-4 text-start">
                            <h1>Our Organic Products</h1>
                        </div>
                        <div className="col-lg-8 text-end">
                            <ul className="nav nav-pills d-inline-flex text-center mb-5 ">
                                <li className="nav-item">
                                    <a className="d-flex m-2 py-2 bg-warning rounded-pill active text-decoration-none" data-bs-toggle="pill" href="#tab-1">
                                        <span className="text-white" style={{width: "130px"}}>All Products</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex py-2 m-2 bg-warning rounded-pill text-decoration-none" data-bs-toggle="pill" href="#tab-2">
                                        <span className="text-white" style={{width: "130px"}}>Seeds</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex m-2 py-2 bg-light rounded-pill text-decoration-none" data-bs-toggle="pill" href="#tab-3">
                                        <span className="text-dark" style={{width: "130px"}}>Soil</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex m-2 py-2 bg-light rounded-pill text-decoration-none" data-bs-toggle="pill" href="#tab-4">
                                        <span className="text-dark" style={{width: "130px"}}>Gardening tools</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex m-2 py-2 bg-light rounded-pill text-decoration-none" data-bs-toggle="pill" href="#tab-5">
                                        <span className="text-dark" style={{width: "130px"}}>Veggies</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

{/* add to cart */}
 <div className="album py-5 bg-body-tertiary">
    <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
                <div className="card shadow-sm">
                    <div className="card-body">
                            <img src={sunflower} alt="seed"  height="225" width="385px"/>
                        <p className="card-text">
                        <h5 style={{textAlign:"center",color:"orange"}}>sunflower Seed</h5>
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </p>
                        <h5  style={{textAlign:"center",color:"orange"}}>Rs:500</h5>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-grid gap-2 col-6 mx-auto">
                             <button type="button" className="btn btn-success ">Buy Now</button>
{cartControls(0)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                    <div className="card-body">
                         <img src={toolimg1} alt="Mini Gardern Tool"  height="225" width="375px"/>
                        <p className="card-text">
                             <h5 style={{textAlign:"center",color:"orange"}}>Mini Gardern Tool Set</h5>
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </p>
                        <h5  style={{textAlign:"center",color:"orange"}}>Rs:200</h5>
                        <div className="d-flex justify-content-between align-items-center">

                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button type="button" className="btn btn-success ">Buy Now</button>
{cartControls(1)}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                 
                    <div className="card-body">
                        <img src={redsoil} alt="redsoil"  height="225" width="385px"/>
                        <p className="card-text">
                             <h5 style={{textAlign:"center",color:"orange"}}>Red soil</h5>
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </p>
                        <h5  style={{textAlign:"center",color:"orange"}}>Rs:350</h5>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-grid gap-2 col-6 mx-auto">
                            <button type="button" className="btn btn-success ">Buy Now</button>
{cartControls(2)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <img src={rosysoil} alt="rosy soil"  height="225" width="385px"/>
                        <p className="card-text">
                             <h5 style={{textAlign:"center",color:"orange"}}>Rosy soil</h5>
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </p>
                        <h5  style={{textAlign:"center",color:"orange"}}>Rs:100</h5>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button type="button" className="btn btn-success ">Buy Now</button>

                       {cartControls(3)}                            
 </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                  
                    <div className="card-body">
                        <img src={tomatoseed} alt="tomato seed"  height="225" width="385px"/>
                        <p className="card-text">
                             <h4 style={{textAlign:"center",color:"orange"}}>Tomato Seed</h4>
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </p>
                        <h5  style={{textAlign:"center",color:"orange"}}>Rs:320</h5>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-grid gap-2 col-6 mx-auto">
                             <button type="button" className="btn btn-success ">Buy Now</button>
                               {cartControls(4)} 
                            </div>
                       
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">

                    <div className="card-body">
                        <img src={toolimg2} alt="watering can"  height="225" width="385px"/>
                        <h5 style={{textAlign:"center",color:"orange"}}>Watering Can</h5>
                        <p className="card-text">         
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </p>
                        <h5  style={{textAlign:"center",color:"orange"}}>Rs:220</h5>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-grid gap-2 col-6 mx-auto">
                             <button type="button" className="btn btn-success ">Buy Now</button>

                               {cartControls(5)} 
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <img src={toolimg3} alt="Wheel Barrow"  height="225" width="385px"/>
                        <p className="card-text">
                             <h5 style={{textAlign:"center",color:"orange"}}>Wheel Barrow</h5>
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </p>
                        <h5  style={{textAlign:"center",color:"orange"}}>Rs:180</h5>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button type="button" className="btn btn-success ">Buy Now</button>

                               {cartControls(6)} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <img src={pottingsoil} alt="pottingsoil"  height="225" width="385px"/>
                        <p className="card-text">
                             <h5 style={{textAlign:"center",color:"orange"}}>Potting Soil</h5>
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </p>
                        <h5  style={{textAlign:"center",color:"orange"}}>Rs:340</h5>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button type="button" className="btn btn-success ">Buy Now</button>
                             {cartControls(7)} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <img src={bittergourd} alt="purpleblooms"  height="225" width="385px"/>
                        <p className="card-text">
                             <h5 style={{textAlign:"center",color:"orange"}}>Bitter Gourd Seed</h5>
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </p>
                        <h5  style={{textAlign:"center",color:"orange"}}>Rs:400</h5>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-grid gap-2 col-6 mx-auto">
                             <button type="button" className="btn btn-success ">Buy Now</button>
                          {cartControls(8)} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



    <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-success mb-5 mx-auto p-4" style={{height:"100px", width:"100px"}}>

                           <i className="fa fa-car fa-3x text-white"></i>
                            </div>
                            <div className="featurs-content text-center">
                                <h5>Free Shipping</h5>
                                <p className="mb-0">Free on order over $300</p>
                            </div>
                        </div>
                    </div>


                    
                    <div className="col-md-6 col-lg-3">
                        <div className="featurs-item text-center rounded bg-light p-4">
                            <div className="featurs-icon btn-square rounded-circle bg-success mb-5 mx-auto p-4" style={{height:"100px", width:"100px"}}>
                                <i className="fa fa-shield fa-3x text-white"></i>
                            </div>
                            <div className="featurs-content text-center">
                                <h5>Security Payment</h5>
                                <p className="mb-0">100% security payment</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="featurs-item text-center rounded bg-light p-4">
                            <div className="featurs-icon btn-square rounded-circle bg-success mb-5 mx-auto p-4" style={{height:"100px", width:"100px"}}>
                      <i className="fa fa-arrows-h fa-3x text-white" ></i>
                            </div>
                            <div className="featurs-content text-center">
                                <h5>30 Day Return</h5>
                                <p className="mb-0">30 day money guarantee</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="featurs-item text-center rounded bg-light p-4">
                            <div className="featurs-icon btn-square rounded-circle bg-success mb-5 mx-auto p-4" style={{height:"100px", width:"100px"}}>
                               <i className="fa fa-user fa-3x text-white"></i>

                            </div>
                            <div className="featurs-content text-center">
                                <h5>24/7 Support</h5>
                                <p className="mb-0">Support every time fast</p>
                            </div>
                        </div>
                    </div>
                </div>    
<Footer/> 
</>
    )
}
export default Shop