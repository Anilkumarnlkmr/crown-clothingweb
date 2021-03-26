import React from 'react';
import './App.css';
import {Route ,Switch} from 'react-router-dom';

import Homepage from './pages/homepages/homepage.components';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-out/sign-in-sign-up.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser: null
    }
  }

  unsbuscribeFromAuth = null;

   componentDidMount(){
    this.unsbuscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      //createUserProfileDocument(user);
      if(userAuth){
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapShot=> {
          //console.log(snapShot);
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
      //this.setState({ currentUser: user});
      //console.log(user);
      this.setState({currentUser: userAuth})
    });
  }

  componentWillUnmount() {
    this.unsbuscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
      <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
      </div>
    );

  }
  
}

export default App;
