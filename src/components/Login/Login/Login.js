import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router";

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };
  const handleGoogleSignIN = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email,
        };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="m-auto">
      <button onClick={handleGoogleSignIN} className="btn-danger">
        Sing In With Google
      </button>
    </div>
  );
};

export default Login;
