import Headerbanner from "../components/Headerbanner"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import banner1 from "../assets/img/banner1.jpg";
import banner2 from "../assets/img/banner2.jpg";
import banner3 from "../assets/img/banner3.jpg";
import roundimg1 from "../assets/img/roundimg1.jpg";
import roundimg2 from "../assets/img/roundimg2.jpg";
import roundimg3 from "../assets/img/roundimg3.jpg";
import card1 from "../assets/img/card1.jpg";
import card2 from "../assets/img/card2.jpg";
import card3 from "../assets/img/card3.jpg";

function About(){
    return(
<>
<Navbar/>
<Headerbanner/>
<main>
  <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">

    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div className="carousel-inner">

      {/* --- SLIDE 1 --- */}
      <div className="carousel-item active">
        <img src={banner1} height="500px" width="100%" className="d-block" />
        <div className="container">
          <div className="carousel-caption ">
            <h1>Create Your Green Journey</h1>
            <p className="opacity-75">Sign up and unlock exclusive plant deals and updates.</p>
            <p><a className="btn btn-lg btn-primary" href="/Signin">Sign up today</a></p>
          </div>
        </div>
      </div>

      {/* --- SLIDE 2 --- */}
      <div className="carousel-item">
        <img src={banner2} height="500px" width="100%" className="d-block" />
        <div className="container">
          <div className="carousel-caption">
            <h1>Discover Fresh Seeds & Healthy Plants.</h1>
            <p>Shop premium seeds, medicinal plants, and fresh veggies — all carefully selected for healthy growth.</p>
            <p><a className="btn btn-lg btn-primary" href="/shop">Explore Product</a></p>
          </div>
        </div>
      </div>

      {/* --- SLIDE 3 --- */}
      <div className="carousel-item">
        <img src={banner3} height="500px" width="100%" className="d-block" />
        <div className="container">
          <div className="carousel-caption m-5 p-5">
            <h1>Experience Green Elegance.</h1>
            <p className="opacity-80">Explore our curated gallery showcasing vibrant plants, seeds, and home-garden ideas.</p>
            <p><a className="btn btn-lg btn-primary" href="/gallery">Browse gallery</a></p>
          </div>
        </div>
      </div>

    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>

  </div>
  

  <div className="bg-light p-5 rounded">
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="counter bg-white rounded p-5 text-center">
                                <i className="fa fa-users text-success fa-3x pb-1"></i>
                                <h4 className="fs-2 fw-bold  display-2 text-warning">satisfied customers</h4>
                                <h1>1963</h1>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="counter bg-white rounded p-5 text-center">
                             <i className="fa fa-handshake-o text-success fa-3x" aria-hidden="true"></i>
                                <h4 className="fs-2 fw-bold  display-2 text-warning">quality of service</h4>
                                <h1>99%</h1>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="counter bg-white rounded p-5  text-center">
                        <i className="fa fa-certificate fa-3x text-success" aria-hidden="true"></i>
                                <h4 className="fs-2 fw-bold  display-2 text-warning">quality certificates</h4>
                                <h1>33</h1>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="counter bg-white rounded p-5  text-center">
                                <i className="fa fa-users text-success fa-3x pb-1"></i>
                                <h4 className="fs-2 fw-bold  display-2 text-warning">Available Products</h4>
                                <h1>789</h1>
                            </div>
                        </div>
                    </div>
                </div>
 

    <div className="container marketing mt-5">
        <div className="row">
            <div className="col-lg-4 text-center px-2">
                <img src={roundimg1} height="140" width="140" className="bd-placeholder-img rounded-circle"/>
                {/* {/* <svg
                    aria-label="Placeholder"
                    className="bd-placeholder-img rounded-circle"
                    height="140"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="140"
                    xmlns="http://www.w3.org/2000/svg"
                > 
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                </svg> */}
                <h2 className="fw-normal text-success text-center"> Meera Rani</h2>
                <h3 className="text-warning ">Founder & Plant Specialist</h3>
                <p className="justify-content-center">
Meera leads Plant-Shop’s mission and selects healthy medicinal plants for all types of home gardeners.                </p>
                <p><a className="btn btn-success" href="#">View details »</a></p>
            </div>
            <div className="col-lg-4 text-center px-2">
                  <img src={roundimg2} height="140" width="140" className="bd-placeholder-img rounded-circle"/>
                {/* <svg
                    aria-label="Placeholder"
                    className="bd-placeholder-img rounded-circle"
                    height="140"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="140"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                </svg> */}
                <h2 className="fw-normal text-success text-center">Arjun Kumar</h2>
                 <h3 className="text-warning ">Product & Store Manager</h3>

                <p className="justify-content-center">
Arjun manages ensuring every customer receives reliable, fresh, and high-quality products.</p>
                <p><a className="btn btn-success" href="#">View details »</a></p>
            </div>
            <div className="col-lg-4 text-center px-2">
                  <img src={roundimg3} height="140" width="140" className="bd-placeholder-img rounded-circle"/>
                {/* <svg
                    aria-label="Placeholder"
                    className="bd-placeholder-img rounded-circle"
                    height="140"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="140"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                </svg> */}
                <h2 className="fw-normal text-success text-center">Shavika</h2>
                <h3 className="text-warning ">Customer Support Expert</h3>

                <p className="justify-content-center">Shavika guides customers with plant care, product help, and smooth order support for a great shopping experience.</p>
                <p><a className="btn btn-success" href="#">View details »</a></p>
            </div>
        </div>
       
      
        <hr className="featurette-divider" />
        <div className="row featurette">
            <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">
                    First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span>
                </h2>
                <p className="lead">
                    Some great placeholder content for the first featurette here. Imagine some exciting prose here.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sequi repudiandae laudantium, numquam voluptatum esse qui asperiores enim inventore magnam velit in perspiciatis aliquid culpa necessitatibus, hic ex error debitis exercitationem fugit delectus quas! Unde quod suscipit molestiae asperiores vero, dolores quae magni dignissimos ex natus praesentium quo quidem autem cumque ullam nihil facere velit sapiente atque illo beatae! Natus alias porro nobis molestias quis eligendi molestiae fugit ex, magni inventore est delectus libero. Impedit sit laboriosam optio eaque at ut error, fugit enim sunt sapiente expedita possimus corporis accusamus nemo quod, tenetur, quia dignissimos aliquam quisquam vitae dolor. Nesciunt!
                </p>
            </div>
            <div className="col-md-5">
                <img src={card1} height="500" width="500" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"/>
                 {/* <svg
                    aria-label="Placeholder: 500x500"
                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    height="500"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="500"
                    xmlns="http://www.w3.org/2000/svg"
                > 
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect>
                    <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text>
                </svg> */}
            </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
            <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading fw-normal lh-1">
                    Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span>
                </h2>
                <p className="lead">
                    Another featurette? Of course. More placeholder content here to give you an idea of how this layout 
                    would work with some actual real-world content in Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nostrum nulla ratione quo dolor ab saepe accusamus commodi perferendis, aut, iusto eveniet! Eligendi, nesciunt eius. Odit autem impedit qui consequuntur voluptas velit doloribus labore nemo totam tempora excepturi tenetur nesciunt, corporis et temporibus placeat quod voluptatum. Voluptatum nisi excepturi expedita neque, rerum eum sit necessitatibus quos iure deleniti, molestias modi exercitationem optio commodi architecto eos. Nam animi consequatur iusto illo officiis doloribus, praesentium nisi enim sed! Minus accusantium quos, ad dolorem fugiat beatae libero, illum eveniet, possimus vitae rem veritatis! Mollitia maiores vitae quidem error labore iure voluptate? Officiis, earum.
                    
                </p>
            </div>
            <div className="col-md-5 order-md-1">
                <img src={card2} height="500" width="500" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"/>
                {/* <svg
                    aria-label="Placeholder: 500x500"
                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    height="500"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="500"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect>
                    <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text>
                </svg> */}
            </div>
        </div>
         <hr className="featurette-divider" />
        <div className="row featurette">
            <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">
                    And lastly, this one. <span className="text-body-secondary">Checkmate.</span>
                </h2>
                <p className="lead">
                    And yes, this is the last block of representative placeholder content. Again, not really intended to
                    be actually read, simply here to give you a better view of what this would look like with some
                    actual content. Your content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusamus, minus velit magnam, praesentium quod nihil earum aut eum aliquam esse necessitatibus excepturi neque repudiandae a illo cupiditate aspernatur sunt. Perferendis quidem iste consequatur maiores vero harum eum recusandae exercitationem rem! Odio excepturi iure perspiciatis? Ipsam exercitationem alias laboriosam non?
                </p>
            </div>
            <div className="col-md-5">
         <img src={card3} height="500" width="500" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"/>

                {/* <svg
                    aria-label="Placeholder: 500x500"
                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                     height="500"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="500"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect>
                    <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text>
                </svg> */}
            </div>
        </div>
        <hr className="featurette-divider" />
    </div>
 <Footer/>
</main>
   

</>
    ) 
}
export default About