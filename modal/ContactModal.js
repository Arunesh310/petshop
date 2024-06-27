// ContactModal.js
import React from "react";
import styles from "./ContactModal.module.css"; // Use CSS Modules

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h2>Contact Us</h2>
        <div className={styles.contactOptions}>
          <a href="tel:+1234567890" className={styles.contactButton}>
            Call Us
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactButton}
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
