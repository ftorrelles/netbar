import Slider from "react-slick";
import "../styles/gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "animate.css/animate.min.css";
//libreria para detectar cuando la seccion este en el vh
import { useInView } from "react-intersection-observer";

const PhotoGallery = () => {
  //logica libreria react-intersection-observer
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const gallery = [
    { name: "gallery1", src: "/gallery1.jpg" },
    { name: "gallery2", src: "/gallery2.jpg" },
    { name: "gallery3", src: "/gallery3.jpg" },
    { name: "gallery5", src: "/gallery5.jpg" },
    { name: "gallery6", src: "/gallery6.jpg" },
    { name: "gallery7", src: "/gallery7.jpg" },
    { name: "gallery9", src: "/gallery9.jpg" },
    { name: "gallery13", src: "/gallery13.jpg" },
    { name: "gallery14", src: "/gallery14.jpg" },
    { name: "gallery15", src: "/gallery15.jpg" },
    { name: "gallery16", src: "/gallery16.jpg" },
    { name: "gallery17", src: "/gallery17.jpg" },
    { name: "gallery18", src: "/gallery18.jpg" },
  ];

  return (
    <div className="photo-gallery-container">
      <h2
        className={`photo-gallery-title animate__animated ${
          inView ? "animate__fadeInDown" : ""
        }`}
        ref={ref}
      >
        Nuestra galería
      </h2>
      <Slider {...settings}>
        {gallery.map((item, index) => (
          <div className="photo-gallery-slide" key={index}>
            <img src={item.src} alt={item.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoGallery;
