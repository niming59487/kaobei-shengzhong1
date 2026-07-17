const firebaseConfig = {
  apiKey: "你的API",
  authDomain: "kaobei-shenzhong.firebaseapp.com",
  projectId: "kaobei-shenzhong",
  storageBucket: "kaobei-shenzhong.firebasestorage.app",
  messagingSenderId: "26114861390",
  appId: "1:26114861390:web:6a77ac8787b2e3036c961f"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
