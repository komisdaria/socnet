import React from 'react';
import MyPosts from './Posts/MyPosts/MyPosts';

// import styles from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile = () => {
  return (
      <div >
        <ProfileInfo />

        <MyPosts />
      </div>
  )
}