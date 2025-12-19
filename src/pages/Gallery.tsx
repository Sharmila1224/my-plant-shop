import Footer from "../components/Footer";
import Headerbanner from "../components/Headerbanner"
import Navbar from "../components/Navbar"

function Gallery(){
      const images = [
 "https://images.pexels.com/photos/1421275/pexels-photo-1421275.jpeg",
    "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg",
"https://images.pexels.com/photos/414579/pexels-photo-414579.jpeg",
    "https://images.pexels.com/photos/4751978/pexels-photo-4751978.jpeg",
    "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg",
    "https://images.pexels.com/photos/909/flowers-garden-colorful-colourful.jpg",
     "https://images.pexels.com/photos/1301857/pexels-photo-1301857.jpeg",
    "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg",
    "https://images.pexels.com/photos/1301857/pexels-photo-1301857.jpeg",
    "https://images.pexels.com/photos/113335/pexels-photo-113335.jpeg",
   "https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg",
    "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg",
    "https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg",
    "https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg",
    "https://images.pexels.com/photos/414579/pexels-photo-414579.jpeg",
    "https://images.pexels.com/photos/113335/pexels-photo-113335.jpeg", 
   ];
    return(
        <>
<Navbar />
      <Headerbanner />
       <div className="container page-top pt-4">
        <div className="row">

          {images.map((src, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-6 mb-4">
              <img src={src} alt="gallery" className="gallery-img"  style={{width: "100%",height: "230px",objectFit: "cover",borderRadius:" 8px"}}/>
              
            </div>
          ))}

        </div>
      </div>
      <Footer/>
    </>
  );
}
export default Gallery