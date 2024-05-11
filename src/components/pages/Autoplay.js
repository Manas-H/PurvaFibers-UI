import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import images from '../images/a1.png';
import images2 from '../images/a2.png';
import '../styles/home.css';



function CreateSlide() {
  const navigate = useNavigate();
  const routeChange = () =>{ 
    let path = `/about`; 
    navigate(path);
  }

  return (
    <SwiperSlide className="slideme">
        <div className="body1 py-10">
        <div className="div-img">
          <img className="img1" src={images} alt="Fiberglass Home" />
        </div>
        <div className="div-text">
          <h1>
            We are the Leading Manufacturers in Fiberglass Planters and Services
          </h1>
          <p>
            {" "}
            We are committed to provide top notch quality Products
          </p>
          <button onClick={routeChange}>Learn More</button>
        </div>
        </div>
    </SwiperSlide>
    
  );
}
function CreateSlide2() {
  const navigate = useNavigate();
  const routeChange = () =>{ 
    let path = `/allProduct`; 
    navigate(path);
  }
    return (
      <SwiperSlide>
        <div className="body1 body2 py-10">
        <div className="div-img">
          <img className="img1" src={images2} alt="Fiberglass office" />
        </div>
        <div className="div-text">
          <h1>
           Décor your Home and Office
          </h1>
          <p>
            {" "}
            Make your Home and Office standout with our Fiberglass products
          </p>
          <button onClick={routeChange}>Explore Fiberglass products</button>
        </div>
        </div>
        {/* <img className="img" src={images2} alt="" /> */}
      </SwiperSlide>
    
    );
  }
 

const Autop = () => {
  return (
    <Swiper className="swiper-autop"
      modules={[Navigation, Pagination, Autoplay]}
      
      speed={5000}
      slidesPerView={1}
      touchStartPreventDefault={false}
      a11y={false}
      allowTouchMove={false}
      noSwiping={false}
      //navigation
      autoplay={{delay: 2500, disableOnInteraction:false,
        pauseOnMouseEnter: true  }}
      //pagination={{ clickable: true }}
      // breakpoints={{
      //   900:{
      //     slidesPerView:0,
      //     autoplay:fals

      //   }
      // }}
    >
      {CreateSlide() }
      {CreateSlide2()}
     
    </Swiper>
  );
};

export default Autop;