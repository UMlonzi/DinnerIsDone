import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAj-me9YKZK5lhwAR9UoGhVjtbEYlz5Iv0",
    authDomain: "restuarant-33d58.firebaseapp.com",
    projectId: "restuarant-33d58",
    storageBucket: "restuarant-33d58.appspot.com",
    messagingSenderId: "326979071864",
    appId: "1:326979071864:web:e4f4b86cf050505ef5228d"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);