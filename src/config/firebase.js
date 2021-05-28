import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCvrnnwiK_8LCXlG1ddNNXg1UgQswL_Qvw',
  authDomain: 're-vents-8e814.firebaseapp.com',
  projectId: 're-vents-8e814',
  storageBucket: 're-vents-8e814.appspot.com',
  messagingSenderId: '587806434046',
  appId: '1:587806434046:web:57263c3e70022b17d37baf',
  measurementId: 'G-20KJVDNG04',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
