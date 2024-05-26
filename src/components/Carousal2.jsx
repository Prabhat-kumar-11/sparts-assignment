import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousal2 = () => {
  const data = [
    {
      name: "John",
      comment: "The curriculum here is truly outstanding. My child loves it!",
      image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
    },
    {
      name: "Paul",
      comment:
        "A wonderful environment for learning. The teachers are amazing.",
      image: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg",
    },
    {
      name: "Lee",
      comment:
        "My child has made great progress. Highly recommend this institute.",
      image:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Harry",
      comment: "Fantastic facilities and a supportive learning environment.",
      image:
        "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Tom",
      comment:
        "My child loves the activities and the interactive learning methods.",
      image:
        "https://images.pexels.com/photos/1687675/pexels-photo-1687675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Chris",
      comment:
        "Impressive teaching techniques and a nurturing environment for kids.",
      image:
        "https://images.pexels.com/photos/2589650/pexels-photo-2589650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Anna",
      comment: "The teachers are very dedicated and my child is thriving here.",
      image:
        "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Isabella",
      comment:
        "A wonderful place for education. The staff is very friendly and helpful.",
      image:
        "https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Prabhat",
      comment:
        "The best decision we made for our child. They are learning so much!",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NThQQ3QZ2fqde8ww_c0EbKAAF_Pflfjf2cmp_bi4DrrgB2yQOtWMZlXz8IoXlDJHDUI&usqp=CAU",
    },
    {
      name: "Pankaj",
      comment:
        "Great curriculum and engaging activities. My child is very happy here.",
      image:
        "https://media.istockphoto.com/id/1338134319/photo/portrait-of-young-indian-businesswoman-or-school-teacher-pose-indoors.jpg?s=2048x2048&w=is&k=20&c=OmMa2GTDqnWuarL0YQu6opsw_TcWYKE-rJb3exUAAQA=",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <section className="bg-inherit py-8">
      <div className="w-4/5 mx-auto">
        <Slider {...settings}>
          {data.map((el, i) => (
            <div key={i} className="p-2">
              {" "}
              {/* Added padding to create space between slides */}
              <div className="bg-[#b0eaf3] p-6 flex flex-col justify-between shadow-lg hover:bg-blue-50">
                <div className="text-left">
                  <p className="font-bold text-xl md:text-2xl text-[black]">
                    {el.name}
                  </p>
                  <p className="text-base md:text-xl">{el.comment}</p>
                </div>
                <div className="mt-auto flex justify-end">
                  <img
                    src={el.image}
                    alt="error"
                    className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousal2;
