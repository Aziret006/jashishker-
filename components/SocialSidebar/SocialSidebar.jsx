"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import facebook from "../../public/img/facebook.svg";
import { FiFacebook } from "react-icons/fi";
import { PiTelegramLogoBold } from "react-icons/pi";
import { ImWhatsapp } from "react-icons/im";
const SocialSidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleIcons = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.fixedContainer}>
      <div className={styles.container}>
        <button onClick={toggleIcons} className={styles.toggleButton}>
          <img src="/menu-icon.png" alt="Toggle Menu" />
        </button>
        {isVisible && (
          <div className={styles.icons}>
            <FiFacebook size={24} />
            <a>
              <PiTelegramLogoBold size={24} />
            </a>
            <a>
              <ImWhatsapp size={24} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialSidebar;
