// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { ref, getDatabase, update, push, child } from "firebase/database";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK1YIY6syR10vVrGNMWfKe7LMXNvR0N7E",
  authDomain: "sailing-logbook-d63f8.firebaseapp.com",
  projectId: "sailing-logbook-d63f8",
  storageBucket: "sailing-logbook-d63f8.appspot.com",
  messagingSenderId: "502893620440",
  appId: "1:502893620440:web:fa449e2e7717dbb3ff7bad",
  measurementId: "G-9FXVZFNYDK",
  databaseURL:
    "https://sailing-logbook-d63f8-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// const analytics = getAnalytics(app);

export const updateData = (path, formData) => {
  const newPostKey = push(child(ref(db), path)).key;
  const updateData = {};
  // console.log(formData.entries());
  for (const [key, value] of formData.entries()) {
    if (formData.getAll(key).length > 1) {
      updateData[key] = formData.getAll(key);
    } else {
      updateData[key] = value;
    }
  }
  // console.log(updateData);
  const upd = {};
  upd[path + "/" + newPostKey] = updateData;

  update(ref(db), upd)
    .then(() => {
      // console.log("updated");
    })
    .catch((error) => {
      // The write failed...
      console.log("failed update");
      console.log(error);
    });
};


export const deleteData =(path)=>{
  const upd = {[path]:null};
  update(ref(db), upd)
    .then(() => {
      // console.log("updated");
    })
    .catch((error) => {
      // The write failed...
      console.log("failed update");
      console.log(error);
    });
}

export default app;
