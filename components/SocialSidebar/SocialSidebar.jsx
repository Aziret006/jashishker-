import React from "react";
import styles from "./page.module.scss";

const SocialSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div>
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <img src="/Whatsapp.svg" alt="WhatsApp" />
          <span>
            Написать <br /> в WhatsApp
          </span>
        </a>
      </div>
      <div>
        <a
          href="https://t.me/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <img src="/telegram-.svg" alt="Telegram" />
          <span>
            Написать в <br /> Telegram
          </span>
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <img src="/instagram.svg" alt="Instagram" />
          <span>
            Написать в <br /> Instagram
          </span>
        </a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <img src="/Facebook.svg" alt="Facebook" />
          <span>
            Написать в <br /> Facebook
          </span>
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
