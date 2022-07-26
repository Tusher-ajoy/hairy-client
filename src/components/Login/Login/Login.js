import React, { useContext } from 'react';
import './Login.css';
import logo from '../../../images/barbershop.png';
import google from '../../../images/google.png';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase.config';
import { getAuth, getIdToken, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from 'react-router-dom';
import { userContext } from '../../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const navigate = useNavigate();
    let location = useLocation();
    const bookingProduct = location.state?.from?.state || null;
    // console.log(bookingProduct);
    let from = location.state?.from?.pathname || "/";

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    //set user token
    const setUserToken = () =>{
        const user = auth.currentUser;
        if(user){
            getIdToken(user).then((token)=>{
                sessionStorage.setItem('userToken',token);
            })
        }
    }


    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // navigate(from, { replace: true });
                // console.log(token, user)
                const loggedIn = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }
                setLoggedInUser(loggedIn);
                setUserToken();
                sessionStorage.setItem('userName',user.displayName)
                sessionStorage.setItem('userEmail',user.email)
                navigate(from, {state:{bookingProduct}});
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, email);
            });
    }
    return (
        <div className='login'>
            <img style={{ width: '100px', marginTop: '20px' }} src={logo} alt='' />
            <h3 style={{ marginTop: '100px', marginBottom: '20px' }}>Login with</h3>
            <div className='login-btn' onClick={handleSignIn}><img src={google} style={{ width: '30px' }} alt='' /> Continue with google</div>
        </div>
    );
};

export default Login;