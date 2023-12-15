import salons from '../../assets/data/salon.js';
import SalonCard from './SalonCards';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// caousel bana ya 
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 ,// optional, default to 1.
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const SalonList = () => {
  // salon list jo har salon profile card to map kregi 
   const { id } = useParams();
  return (
    <Carousel
      swipeable={true}
      partialVisible={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet"]}
      dotListClass="custom-dot-list-style"
      // itemClass="carousel-item-padding-30-px"
      
    >
    {salons.map((salon) => (
  <Link key={salon.id} to={`/salonDetail/${salon.id}`}>
    <div className='px-5 py-5'>
      <SalonCard key={salon.id} salon={salon} />
    </div>
  </Link>
))}
      
    
   
    </Carousel>


//     <Carousel responsive={responsive}>
//     {salons.map((salon) => (
//         <div key={salon.id}>
//             <SalonCard key={salon.id} salon={salon} />
//         </div>
//     ))}
// </Carousel>
  )
}

export default SalonList