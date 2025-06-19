import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './header.jsx'
import Brand from './Brand/brand.jsx'
import Footer from './Footer/footer.jsx'
import myImage from "./assets/image.jpg";
import myImage2 from "./assets/E-commerce.png";
import myImage3 from "./assets/imgweather.png";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <Header />
    <Brand
      image1={myImage}
      image2={myImage2}
      image3={myImage3}
      img1="https://i.pinimg.com/736x/38/fe/3f/38fe3fa21ac7c077d9e4997ed5cbb981.jpg"
      img2="https://i.pinimg.com/736x/1e/5c/a6/1e5ca6cf1032d7602ff1109009e3b9b6.jpg"
      img3="https://i.pinimg.com/736x/ee/a4/07/eea4072c1b4c1648ac3bdbdf611ee733.jpg"
      img4="https://i.pinimg.com/736x/fb/26/c7/fb26c7cfac77d8a4d018b397bb7f6c99.jpg"
      img5="https://i.pinimg.com/736x/79/cf/a4/79cfa41afd51324e7b12939a90008490.jpg"
      img6="https://i.pinimg.com/736x/34/d8/2b/34d82b044dc9d213c477f6464652bf83.jpg"
      wimg1="https://i.pinimg.com/736x/c  5/5e/57/c55e57ef1ab8e3ddfa95ed5805620413.jpg  "
      wimg2="https://i.pinimg.com/736x/58/ba/a8/58baa822c3c136609cba1baf04dfd169.jpg"
      wimg3="https://i.pinimg.com/736x/f9/d9/40/f9d940fe457511f9544bd91c14b87d4d.jpg"
      wimg4="https://i.pinimg.com/736x/d7/9f/ac/d79fac443a2cb2c55d3d2baf686ca598.jpg"
    />

    <Footer />
  </StrictMode>
);
