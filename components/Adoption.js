import React from "react";

import Image from "next/image";

import Img1 from "../public/img/adoption/img1.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Adoption = () => {
  const whatsappLink = `https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=Hello%20from%20Raj-pet!%20I%20would%20like%20to%20order%20something%20for%20my%20pet.`;
  return (
    <section
      className="bg-adoption bg-cover bg-center bg-no-repeat min-h-[760px] py-8 flex"
      id="adoption"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-x-16">
        {/* image */}
        <div className="flex-1 mb-6 lg:mb-0">
          <Image src={Img1} width={542} height={560} alt="" />
        </div>
        {/* text */}
        <div className="flex-1 text-cream text-center max-w-md lg:text-left lg:max-w-none">
          <h2 className="h2 mb-6">Making pet parenting easy for everyone</h2>
          <p className="mb-6">
            At Raj-pet, we understand that pet parenting can be both rewarding
            and challenging. That's why we offer a range of services designed to
            make your life easier and your pet's life happier. From providing
            all breed pups to offering high-quality pet food, we ensure that you
            have everything you need to take care of your furry friend. Our
            same-day delivery service ensures that you never run out of
            essentials, and our knowledgeable staff is always ready to offer
            advice and support. With Raj-pet, pet parenting becomes a joyous and
            stress-free experience.
          </p>
          <ul className="mb-[38px] flex flex-col gap-y-4 lg:list-disc lg:pl-4">
            <li>All breed pups</li>
            <li>Pet Food</li>
            <li>Same Day Delivery</li>
          </ul>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mx-auto lg:mx-0 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Adoption;
