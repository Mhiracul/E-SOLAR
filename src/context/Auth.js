import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  confirmPasswordReset,
  
} from 'firebase/auth';
import { auth } from '../firebase';
const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
     signInWithRedirect(auth, provider);
   
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Send password reset email
const sendPasswordResetEmail = async (email) => {
  await sendPasswordResetEmail(auth, email);
};

// Reset password with new password
const resetPassword = async (actionCode, newPassword) => {
  await confirmPasswordReset(auth, actionCode, newPassword);
};


   const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
   }

  const logOut = () => {
      signOut(auth)
  }
  const sendVerificationEmail = async () => {
    await sendEmailVerification(auth.currentUser);
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser && !currentUser.emailVerified) {
        sendVerificationEmail();
      }
      console.log('User', currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Auth.Provider value={{ googleSignIn, logOut, user, createUser, signIn, sendPasswordResetEmail,
      resetPassword, }}>
      {children}
    </Auth.Provider>
  );
};

export const UserAuth = () => {
  return useContext(Auth);
};