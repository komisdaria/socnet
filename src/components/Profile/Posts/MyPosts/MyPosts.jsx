/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import OnePost from '../Post/Post';
import styles from './MyPosts.module.css';

const postsData = [
  { id: '1',  message: 'my First post', likesCount: 7},
  { id: '2',  message: 'today is good day', likesCount: 13},
  { id: '3',  message: 'only rise and sunshine', likesCount: 3},
  { id: '4',  message: 'going to the gym', likesCount: 18 },
  { id: '5',  message: 'o this is my story', likesCount: 37},
]

let postsEl = postsData.map((post) => <OnePost message={post.message} likesCount={post.likesCount} />);

const MyPosts = (props) => {

  return (
    <div className={styles.postsBlock}>
         <h3>posts</h3> 
          <div>
            <div>
              <textarea></textarea>
            </div>
            <div>
              <button>Add post</button>
            </div>
            <div>
             <button>Remove</button>
            </div>
          </div>
          <div className={styles.posts}>
            {/* <OnesPost message={postData[0].message} likesCount={postData[0].likesCount} />
            <OnesPost message={postData[1].message} likesCount={postData[1].likesCount} /> */}

            {/* <OnesPost message='First post' likesCount='20' /> */}

            {postsEl}

          </div>
        </div>
  )
}

export default MyPosts;