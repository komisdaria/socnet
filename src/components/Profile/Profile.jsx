import React from 'react';
import MyPosts from './Posts/MyPosts/MyPosts';

// import styles from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

// const posts = [
//   { id: '1',  message: 'my First post', likesCount: 7},
//   { id: '2',  message: 'today is good day', likesCount: 13},
//   { id: '3',  message: 'only rise and sunshine', likesCount: 3},
//   { id: '4',  message: 'going to the gym', likesCount: 18 },
//   { id: '5',  message: 'o this is my story', likesCount: 37},
// ]

export const Profile = (props) => {
  return (
      <div >
        <ProfileInfo />

        <MyPosts posts={props.posts} />
      </div>
  )
}