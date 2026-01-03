import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './header.jsx'
import Brand from './Brand/brand.jsx'
import Footer from './Footer/footer.jsx'
import myImage from "./assets/image.jpg";
import myImage2 from "./assets/E-commerce.png";
import myImage3 from "./assets/imgweather.png";
import myImage4 from "./assets/ritik.jpeg";
import myImage5 from "./assets/junglesafari.jpeg";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <Header />
    <Brand
      image1={myImage}
      image2={myImage2}
      image3={myImage3}
      image={myImage4}
      image5={myImage5}
      
    />

    <Footer />
  </StrictMode>
);
