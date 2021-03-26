import React from 'react';

import './sign-in-sign-up.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.componenet';

const SignInAndSignUpPage = () => (
  <div className='sign-in-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;