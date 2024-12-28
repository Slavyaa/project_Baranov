import React from 'react';
import styles from "./Service.module.css";

function ServiceBlock(props) {



  return (
    <div>
        <div className={styles.service}>
            <img src={props.img} alt="png" className={styles.image} />
            <p className={styles.text}>{props.text}</p>
        </div>
    </div>
  )
}

export default ServiceBlock
