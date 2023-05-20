import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCqIhX3QyL72K1Isfn9pLaZLlsipGHTnmQ',
  authDomain: 'huyche-mmt.firebaseapp.com',
  projectId: 'huyche-mmt',
  storageBucket: 'huyche-mmt.appspot.com',
  messagingSenderId: '647521959320',
  appId: '1:647521959320:web:da02ce6189b787673c3fed',
  measurementId: 'G-MLZS8GX78P'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
const analytics = getAnalytics(app);
