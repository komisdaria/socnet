let rerenderEntireTree = () => {
  console.log('state was changed');
}

const state = {

  profilePage: {
    posts: [
      { id: '1',  message: 'my First post', likesCount: 7},
      { id: '2',  message: 'today is good day', likesCount: 13},
      { id: '3',  message: 'only rise and sunshine', likesCount: 3},
      { id: '4',  message: 'going to the gym', likesCount: 18 },
      { id: '5',  message: 'o this is my story', likesCount: 37},
    ],
    newPostText: 'dasha',
  },
  dialogsPage: {
    dialogs: [
      { id: '1',  name: 'Dora'},
      { id: '2',  name: 'Lena'},
      { id: '3',  name: 'Masha'},
      { id: '4',  name: 'Sasha'},
      { id: '5',  name: 'Adel'},
    ],
    messages: [
      { id: '1',  message: 'hi'},
      { id: '2',  message: 'noup'},
      { id: '3',  message: 'whats up '},
      { id: '4',  message: 'okey' },
      { id: '5',  message: 'today'},
    ],
  },
  sidebar: {
    friend: [
      { id: '2',  name: 'Lena'},
      { id: '5',  name: 'Adel'},
      { id: '4',  name: 'Nastya'}
    ]
  },

}

window.state = state;

export const addPost = () => {
  let newPost = {
    id: '6',
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText= '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;