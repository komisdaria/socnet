import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './Calendar.module.css';

export const NavCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className={styles.calendar}>
      <Calendar
        onChange={onChange}
        value={value}
  
      />
    </div>
  );
}