import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavCalendar } from './Calendar/Calendar';
import styles from'./Navbar.module.css';

export const Navbar = (props) => {
  // const friends = props.state.friends.map((message) => <Friends friends={message.message} />);

  return (
    <nav className={styles.nav}>
    <div className={styles.item}>
     <NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink> 
    </div>
    <div className={styles.item}>
     <NavLink to='/dialogs' activeClassName={styles.active}>Messages</NavLink> 
    </div>
    <div className={styles.item}>
     <NavLink to='/news' activeClassName={styles.active}>News</NavLink> 
    </div>
    <div className={styles.item}>
     <NavLink to='music' activeClassName={styles.active}>Music</NavLink> 
    </div>
    <div className={styles.item}>
     <NavLink to='settings' activeClassName={styles.active}>Settings</NavLink> 
    </div>
    <div><NavCalendar /> </div>
  </nav>
  )
}