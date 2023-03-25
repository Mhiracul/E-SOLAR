import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

const VerifyEmail = () => {
  const [emailVerified, setEmailVerified] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          await user.reload();
          setEmailVerified(user.emailVerified);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    verifyEmail();
  }, []);

  return (
    <div>
      {emailVerified ? (
        <div> 
        <p>Your email has been verified.</p>
        <Link to="/login">Back to login</Link>
        </div>
      ) : (
        <p>
          Your email has not been verified. Please check your inbox for a
          verification email and click the link to verify your email address.
        </p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default VerifyEmail;
