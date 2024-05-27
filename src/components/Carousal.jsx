import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css'; // Import the custom CSS file

const dummyData = [
  {
    id: 1,
    title: "Mathematics Excellence",
    img: "https://media.istockphoto.com/id/1768516789/photo/child-thinking-and-homework-with-light-bulb-for-learning-math-numbers-and-creative-ideas-or.jpg?s=1024x1024&w=is&k=20&c=s3GYnWSczeKNlT9iBBqrGjZflkZ4qb9K04PlUlMIYQc=",
  },
  {
    id: 2,
    title: "Science Scholars",
    img: "https://media.istockphoto.com/id/181082683/photo/schoolboy.jpg?s=1024x1024&w=is&k=20&c=n3pdl_BvHRlfXYxhpaWsqhACWmvgpeyW6wSR_mxbg0M=",
  },
  {
    id: 3,
    title: "Literary Legends",
    img: "https://media.istockphoto.com/id/590598416/photo/child-doing-his-homework.jpg?s=2048x2048&w=is&k=20&c=uC1MViSs8_Afk7cpubhnXiLFsPlZS-Adw89VCgQjmjk=",
  },
  {
    id: 4,
    title: "Athletic Achievers",
    img: "https://www.imgacademy.com/sites/default/files/img-academy-academics-6-12.jpg",
  },
  {
    id: 5,
    title: "Art Aficionados",
    img: "https://media.istockphoto.com/id/932274694/photo/tired-student-girl-lying-on-the-floor-with-books-and-gadgets.jpg?s=2048x2048&w=is&k=20&c=cUQc2CVngAC6LIKfw2_3eAUJkKYCny_nmgjkbhFNS4U=",
  },
  {
    id: 6,
    title: "Business Brains",
    img: "https://media.istockphoto.com/id/1329256845/photo/business-team-giving-each-other-high-five-in-new-office.jpg?s=2048x2048&w=is&k=20&c=rCjl4_InFT38G1rJ6WkvNb90jfaWUlNO3BAYMqk3RnE=",
  },
  {
    id: 7,
    title: "History Buffs",
    img: "https://media.istockphoto.com/id/1143496189/photo/better-together.jpg?s=2048x2048&w=is&k=20&c=GV9-EkmVXbKLR2ME5XfVsKGkJtzV2cZrMgG1H4vV4Ow=",
  },
  {
    id: 8,
    title: "Tech Titans",
    img: "https://media.istockphoto.com/id/1214384252/photo/business-background-of-asian-businesspeople-having-thumb-up-together-showing-teamwork-and.jpg?s=2048x2048&w=is&k=20&c=dmd4iUzzdaXsPnsHIVepAHgfcG26cucwr83x-v3vcgE=",
  },
  {
    id: 9,
    title: "Music Maestros",
    img: "https://media.istockphoto.com/id/1329256845/photo/business-team-giving-each-other-high-five-in-new-office.jpg?s=2048x2048&w=is&k=20&c=rCjl4_InFT38G1rJ6WkvNb90jfaWUlNO3BAYMqk3RnE=",
  },
  {
    id: 10,
    title: "Language Leaders",
    img: "https://media.istockphoto.com/id/1143496189/photo/better-together.jpg?s=2048x2048&w=is&k=20&c=GV9-EkmVXbKLR2ME5XfVsKGkJtzV2cZrMgG1H4vV4Ow=",
  },
];

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-inherit h-screen py-8">
      <div>
        <div className="mx-auto">
          <Slider {...settings}>
            {dummyData.map((item) => (
              <div key={item.id} className="p-2">
                <div className="relative w-[400px] h-[400px] bg-gray-300 rounded overflow-hidden transform transition-transform hover:scale-105 cursor-pointer m-[10px]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover rounded"
                  />
                  <div className="absolute bottom-0 bg-black bg-opacity-50 w-full text-white text-center py-2">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
