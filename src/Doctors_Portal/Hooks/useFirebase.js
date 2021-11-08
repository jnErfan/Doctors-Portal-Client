import FirebaseInitialize from "../Firebase/FirebaseInitialize";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useEffect, useState } from "react";

FirebaseInitialize();
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [users, setUsers] = useState({});
  const auth = getAuth();

  const emailPasswordSignUp = (
    email,
    password,
    history,
    location,
    name,
    image
  ) => {
    setIsLoading(true);
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const redirect = location?.state?.from || "/";
        setUser(result?.user);
        savedUserInfo(name, email, "POST");
        history.push(redirect);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const emailPasswordLogin = (email, password, history, location) => {
    setError("");
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const redirect = location?.state?.from || "/";
        setUser(result?.user);

        console.log(result?.user);
        history.push(redirect);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  const resetPassword = (email) => {
    setError("");
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setError("Password Reset Email Sended, Please Check Email");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const googleSignIn = (history, location) => {
    setError("");
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result?.user);
        savedUserInfo(result.user?.displayName, result.user?.email, "PUT");
        const redirect = location?.state?.from || "/";
        console.log(result?.user);
        if (location.pathname !== "/adminLogin") {
          history.replace(redirect);
        } else {
          history.replace("/");
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  const savedUserInfo = (name, email, method) => {
    const date = new Date();
    const user = { email, date, name };
    console.log(user);
    fetch("http://localhost:5000/user", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };
  const logOutAll = () => {
    signOut(auth)
      .then(() => {
        setUser("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
      setIsLoading(false);
    });
  }, [auth]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data[0]));
  }, [user.email]);

  return {
    user,
    error,
    setError,
    emailPasswordSignUp,
    emailPasswordLogin,
    googleSignIn,
    isLoading,
    logOutAll,
    resetPassword,
    users,
  };
};

export default useFirebase;
