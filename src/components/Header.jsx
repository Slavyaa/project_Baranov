import React, { useState } from "react";
import styles from "./Header.module.css";
import imgLogo from "./logo/logo.png"


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      {/* <div className={styles.logo}>MyLogo</div> */}
      <img src={imgLogo} alt="logo" className={styles.logo} />
      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
        <ul>
          <li><a href="#about">О нас</a></li>
          <li><a href="#calculate">Рассчитать стоимость</a></li>
          <li><a href="#services">Наши услуги</a></li>
          <li><a href="#digits">Мы в цифрах</a></li>
          <li><a href="#application">Оставить заявку</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
      </nav>
      <div
        className={`${styles.burger} ${isOpen ? styles.burgerOpen : ""}`}
        onClick={toggleMenu}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </header>
  );
};

export default Header;
