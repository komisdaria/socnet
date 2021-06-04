import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Nav/Navbar';
import { Music } from './components/Music/Music';
import { News } from './components/News/News';
import { Settings } from './components/Settings/Settings';
import { Profile } from './components/Profile/Profile';


function App(props) {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        {/* <Route exact path='/dialogs' component={Dialogs} /> */}
        {/* <Route path='/profile' component={Profile} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />  */}

        <Route exact path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages} /> } />
        <Route path='/profile' render={ () => <Profile posts={props.posts} /> }  />
        <Route path='/news' render={ () => <News /> }  />
        <Route path='/music' render={ () => <Music /> }  />
        <Route path='/settings' render={ () => <Settings /> }  />

      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
