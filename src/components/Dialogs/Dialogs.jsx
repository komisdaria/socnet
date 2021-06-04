import React from 'react';
import styles from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';

  
  const messagesData = [
    { id: '1',  message: 'hi'},
    { id: '2',  message: 'noup'},
    { id: '3',  message: 'whats up '},
    { id: '4',  message: 'okey' },
    { id: '5',  message: 'today'},
  ];
  const messages = messagesData.map((message) => <Message message={message.message} />);

  
  const dialogsData = [
    { id: '1',  name: 'Dora'},
    { id: '2',  name: 'Lena'},
    { id: '3',  name: 'Masha'},
    { id: '4',  name: 'Sasha'},
    { id: '5',  name: 'Adel'},
  ];
  const dialogs = dialogsData.map((dialog) =>  <DialogItem name={dialog.name} id={dialog.id} />)


  export const Dialogs = (props) => {
    
    
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