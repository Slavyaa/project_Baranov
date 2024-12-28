import React, { useState } from "react";
import styles from "./FAQ.module.css";

const FaqBlock = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.faqBlock}>
      <div className={styles.faqQuestion} onClick={toggleOpen}>
        <span>{question}</span>
        <span className={`${styles.faqIcon} ${isOpen ? styles.open : ""}`}>
          ⌃
        </span>
      </div>
      {isOpen && <div className={styles.faqAnswer}>{answer}</div>}
    </div>
  );
};

export default FaqBlock;