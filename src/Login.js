import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import {auth,provider} from './ferebase'
import {actionTypes} from './reducer'
import {useStateValue} from './StateProvider'


const Login = () => {
  const [state,dispatch]=useStateValue()

    const SignIn=()=>{
        auth.signInWithPopup(provider)
          .then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })
        }).catch(error=>alert(error.message))
    }
    return (
        <div className="login">
              <div className="login__logo">
                  <img src="https://service1001.com/themes/service1001/images/svg/color/social/facebook.svg" alt=""/>
                  <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
              </div>
              <Button type="submit" onClick={SignIn}> Sign In </Button>
        </div>
    )
}

export default Login
