import React from 'react';
import styles from './../Dialogs.module.css';


export const Message = (props) => {

  return (
      <div className={styles.dialog}>{props.message}
    </div>
    )
  };
  