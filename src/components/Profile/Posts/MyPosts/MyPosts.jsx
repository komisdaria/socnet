/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import OnePost from '../Post/Post';
import styles from './MyPosts.module.css';



const MyPosts = (props) => {
  
  let postsEl = props.posts.map((post) => <OnePost message={post.message} likesCount={post.likesCount} />);

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