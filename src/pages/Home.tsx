import { useState } from "react";
import Footer from "../components/Footer"
import Headerbanner from "../components/Headerbanner"
import Navbar from "../components/Navbar"
import homebanner from "../assets/img/homebanner.jpg"
import Plantcard from "../components/Plantcard"
import Signin from "../pages/Signin";


function Home(){
      const [showSignin, setShowSignin] = useState(false);

    return(
<>
<Navbar/>
<Headerbanner/>

<div id="myCarousel" className="carousel slide" data-bs-ride="carousel">   
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={homebanner} height="500px" width="100%" className="d-block" />
                        <div className="container">
                            <div className="carousel-caption">
              
                                 {showSignin && <Signin onClose={() => setShowSignin(false)} />}

      <div className="carousel-caption text-start">
        <button
          className="btn btn-lg btn-success text-white"
          onClick={() => setShowSignin(true)}
        >
          Sign In
        </button>
      </div>                        
          </div>
                        </div>
                    </div>
                </div>
            </div>        


<Plantcard/>
<Footer/>

</>

    )
}
export default Home