import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { subscribe } from './redux/state';
import { addPost, updateNewPostText } from './redux/state';

// const posts = [
//   { id: '1',  message: 'my First post', likesCount: 7},
//   { id: '2',  message: 'today is good day', likesCount: 13},
//   { id: '3',  message: 'only rise and sunshine', likesCount: 3},
//   { id: '4',  message: 'going to the gym', likesCount: 18 },
//   { id: '5',  message: 'o this is my story', likesCount: 37},
// ]

// const messages = [
//   { id: '1',  message: 'hi'},
//   { id: '2',  message: 'noup'},
//   { id: '3',  message: 'whats up '},
//   { id: '4',  message: 'okey' },
//   { id: '5',  message: 'today'},
// ];

// const dialogs = [
//   { id: '1',  name: 'Dora'},
//   { id: '2',  name: 'Lena'},
//   { id: '3',  name: 'Masha'},
//   { id: '4',  name: 'Sasha'},
//   { id: '5',  name: 'Adel'},
// ];

// export const rerenderEntireTree = () => {

//   ReactDOM.render(
//     <React.StrictMode>
//       {/* <App posts={posts} dialogs={dialogs} messages={messages}/> */}
//       <App state={state} addPost={addPost} />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }



const rerenderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      {/* <App posts={posts} dialogs={dialogs} messages={messages}/> */}
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
