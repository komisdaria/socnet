import React from 'react';
import styles from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';

export const Dialogs = (props) => {
    const messages = props.messages.map((message) => <Message message={message.message} />);
    
    const dialogs = props.dialogs.map((dialog) =>  <DialogItem name={dialog.name} id={dialog.id} />)
    
    return (
      <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        {/* <DialogItem name='Dora' id='1' />
        <DialogItem name='Lena' id='2' />
        <DialogItem name='Masha' id='3' />
        <DialogItem name='Dasha G' id='4' />
        <DialogItem name='Misha' id='5' /> */}

        {dialogs}
      </div>
    <div className={styles.messages}>
      {/* пишем в теге какие данные принимает пропс, вверху прописано {props.message} */}
      {/* <Message message='hi' /> 
      <Message message='noup' /> 
      <Message message='whats up ' /> 
      <Message message='okey' /> 
      <Message message='taping...' />  */}
      {messages}
    </div>
    </div>
  )

}