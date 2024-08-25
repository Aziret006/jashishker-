"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { PiTelegramLogoBold, PiLinkedinLogoBold } from "react-icons/pi";
import { ImWhatsapp, ImInstagram } from "react-icons/im";
import { GoPlus, GoDash } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import chat from "../../public/chat.svg";
import chatbot from "../../public/chatbot.png";
import Image from "next/image";
const SocialSidebar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFirstSet, setIsFirstSet] = useState(true);

  const toggleIcons = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.fixedContainer}>
      <div className={styles.container}>
        <div className={styles.icons}>
          <a
            target="_blank"
            href="https://www.instagram.com/enactus_kyrgyzstan?igsh=MWFrOXh4bjRoZGllcw== "
          >
            <Image src="/image31.svg" alt="" width={30} height={30} />
          </a>
          <a target="_blank" href="https://t.me/StartUpBlogger">
            <Image src="/whatsapp-icon.svg" alt="" width={30} height={30} />
          </a>
          <a target="_blank" href="https://t.me/StartUpBlogger">
            <Image
              src="/file-icons_telegram.svg"
              alt=""
              width={30}
              height={30}
            />
          </a>
          <a target="_blank" href="https://t.me/StartUpBlogger">
            <Image src="/logos_facebook.svg" alt="" width={30} height={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialSidebar;
