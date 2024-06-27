import React, { useState } from "react";
import ContactModal from "../modal/ContactModal.js";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="py-6 lg:absolute lg:w-full lg:left-0">
      <div className="container mx-auto flex flex-col gap-y-6 lg:flex-row h-full justify-between items-center relative">
        {/* logo */}
        <a href="#">Raj-pet</a>
        {/* nav */}
        <nav className="text-xl flex gap-x-4 lg:gap-x-12">
          <a href="#services">Services</a>

          <a href="#" onClick={openModal}>
            Contact
          </a>
        </nav>
        {/* button */}
        <a href="#adoption" className="btn btn-primary lg:btn-outline">Order Now!!</a>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

export default Header;
