// Firebase 設定

const firebaseConfig = {
  apiKey: "AIzaSyAcAZTR_3NOpFdePiuYtrT0Bach-U8Dnoc",
  authDomain: "kaobei-shenzhong.firebaseapp.com",
  projectId: "kaobei-shenzhong",
  storageBucket: "kaobei-shenzhong.firebasestorage.app",
  messagingSenderId: "26114861390",
  appId: "1:26114861390:web:6a77ac8787b2e3036c961f",
  measurementId: "G-M6H84Q5LVV"
};


// 初始化 Firebase

firebase.initializeApp(firebaseConfig);


// 連接 Firestore

const db = firebase.firestore();
