/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import OnePost from '../Post/Post';
import styles from './MyPosts.module.css';
// import { addPost } from './../../../../redux/state';


const MyPosts = (props) => {
  
  let postsElements = props.posts.map((post) => <OnePost message={post.message} likesCount={post.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {

    let text = newPostElement.current.value;
    props.addPost(text);
    // newPostElement.current.value=''; // очисть textarea после ввода текста 
    props.updateNewPostText('');

  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    
  }

  return (
    <div className={styles.postsBlock}>
         <h3>posts</h3> 
          <div>
            <div>
              <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
            </div>
            <div>
              <button onClick={addPost}>Add post</button>
            </div>
            <div>
             <button>Remove</button>
            </div>
          </div>
          <div className={styles.posts}>
            {/* <OnesPost message={postData[0].message} likesCount={postData[0].likesCount} />
            <OnesPost message={postData[1].message} likesCount={postData[1].likesCount} /> */}

            {/* <OnesPost message='First post' likesCount='20' /> */}

            {postsElements}

          </div>
        </div>
  )
}

export default MyPosts;