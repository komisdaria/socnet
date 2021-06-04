import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './../Dialogs.module.css';

// const dialogsData = [
//   { id: '1',  name: 'Dora'},
//   { id: '2',  name: 'Lena'},
//   { id: '3',  name: 'Masha'},
//   { id: '4',  name: 'Sasha'},
//   { id: '5',  name: 'Adel'},
// ];
export const DialogItem = (props) => { // для разных данных

  let path = '/dialogs/' + props.id;

  return (
        <div className={styles.dialog + ' ' + styles.active}>
          <NavLink to={path} > {props.name} </NavLink>
        </div>
  )
}
