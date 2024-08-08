"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { PiTelegramLogoBold, PiLinkedinLogoBold } from "react-icons/pi";
import { ImWhatsapp, ImInstagram } from "react-icons/im";
import { GoPlus, GoDash } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import chat from "../../public/chat.svg";
const SocialSidebar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFirstSet, setIsFirstSet] = useState(true);

  const toggleIcons = () => {
    setIsVisible(!isVisible);
    setIsFirstSet(!isFirstSet);
  };

  return (
    <div className={styles.fixedContainer}>
      <div className={styles.container}>
        <img src={chat} alt="" />
        {isVisible && (
          <div className={styles.icons}>
            <a target="_blank" href="https://t.me/StartUpBlogger">
              <FiFacebook color="#000" size={24} />
            </a>
            <a target="_blank" href="https://t.me/StartUpBlogger">
              <PiTelegramLogoBold color="#000" size={24} />
            </a>
            <a target="_blank" href="https://t.me/StartUpBlogger">
              <ImWhatsapp color="#000" size={24} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialSidebar;
