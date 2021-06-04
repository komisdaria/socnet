import React from 'react';
import style from './ProfileInfo.module.css';

export const ProfileInfo = () => {
  return (
        <div>
          <div>

        <img className={style.img} src='https://cdn.elearningindustry.com/wp-content/uploads/2016/03/socialpeople.png' alt='logo'/>
        </div>
        <div className={style.descriptionBlock}>
          ava + desc
         </div>
          </div>
  )
}