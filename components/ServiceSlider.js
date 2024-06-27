import React from "react";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

import "swiper/css/navigation";
import "swiper/css";

import Service1Icon from "../public/img/services/service-icon1.svg";
import Service2Icon from "../public/img/services/service-icon2.svg";
import Service3Icon from "../public/img/services/service-icon3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const services = [
  {
    image: Service1Icon,
    name: "Medicines",
    description:
      "Raj-pet simplifies pet parenting with a range of essential medicines, from dewormers to tick repellants. Our products are tailored to keep your pet healthy and happy, ensuring they receive the care they deserve.",
    btnText: "Explore",
    whatsappLink:
      "https://api.whatsapp.com/send?phone=+919504632020&text=I%20would%20like%20to%20order%20medicines%20for%20my%20pet",
  },
  {
    image: Service2Icon,
    name: "Breed-specific Haircuts",
    description:
      "Raj-pet offers expert grooming services, including haircuts tailored to your pet's breed and style preferences. Our professional groomers ensure your pet looks and feels their best, making grooming a stress-free and enjoyable experience.",
    btnText: "Explore",
    whatsappLink:
      "https://api.whatsapp.com/send?phone=+919504632020&text=I%20would%20like%20to%20order%20a%20haircut%20for%20my%20pet",
  },
  {
    image: Service3Icon,
    name: "Clothes",
    description:
      "At Raj-pet, we offer a range of stylish and comfortable pet clothes that combine fashion with functionality. From cozy sweaters to protective raincoats, our apparel collection ensures your pet stays warm, dry, and fashionable in any season.",
    btnText: "Explore",
    whatsappLink:
      "https://api.whatsapp.com/send?phone=+919504632020&text=I%20would%20like%20to%20order%20clothes%20for%20my%20pet",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
      className="serviceSlider min-h-[680px]"
    >
      {services.map((service, index) => {
        return (
          <>
            <SwiperSlide
              className="border border-primary/20 bg-cream min-h-[560px] rounded-[66px] py-16 px-8"
              key={index}
            >
              <Image className="mb-9" src={service.image} />
              <div className="text-[26px] font-medium mb-4">{service.name}</div>
              <div className="text-[20px] mb-8">{service.description}</div>
              <a
                href={service.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                Order Now
              </a>
            </SwiperSlide>
          </>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
