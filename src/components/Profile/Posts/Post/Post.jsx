import React from 'react';
import style from './Post.module.css';

const OnePost = (props) => {
  // console.log(props.message); // будет сообщение что указано в Posts  <OnesPost message='Hi whats up man'/>

  return (
    <div className={style.item}>
    <img className={style.img} src='https://i.pinimg.com/originals/11/b9/69/11b969cecef68b86f835e3e6e32347e1.jpg' alt='mylogo'></img>
   <br /> 
    { props.message }
   <div>
    <span>💓 </span> {  props.likesCount }
   </div>

  </div>
  )
}

export default OnePost;