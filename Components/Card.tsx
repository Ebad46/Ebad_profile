// components/CardComponent.jsx
import React from 'react';
import styles from "./styler.module.css";

interface Props{
  Header:string,
  Parse:string
}
const CardComponent: React.FC<Props> = ({Header,Parse}) => {
  return (

<div className={styles.card}>
  <div className={styles.card__border}></div>
  <div className={styles.card_title__container}>
    <span className={styles.card_title}>{Header}</span>
  </div>
  <hr className={styles.line} />
  <ul className={styles.card__list}>
    <li className={styles.card__list_item}>
      <span className={styles.list_text}>{Parse}</span>
    </li>
  </ul>
  <button className={`${styles.button} bottom-1 absolute`}>Get Your Success</button>
</div>


  );
};

export default CardComponent;
