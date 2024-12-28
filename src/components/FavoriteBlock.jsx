import React from 'react';
import styles from "./Favorite.module.css";
import imgEllips from "./FavoriteBlocksImg/Ellipse.png";

function FavoriteBlock(props) {




  return (
    <div className={styles.favorite}>
        <img className={styles.ellips} src={imgEllips} alt="" />
        <img className={styles.img} src={props.img} alt="" />
        <p className={styles.text}>
            {props.text}
        </p>
    </div>
  )
}




export default FavoriteBlock