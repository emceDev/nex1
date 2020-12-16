import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyA7YUDcXk7HGbKPKSl1uSsZE4r5N54eWXM",
	authDomain: "school-d95f0.firebaseapp.com",
	databaseURL: "https://school-d95f0-default-rtdb.firebaseio.com",
	projectId: "school-d95f0",
	storageBucket: "school-d95f0.appspot.com",
	messagingSenderId: "1048632052903",
	appId: "1:1048632052903:web:f209b15985c3e857dd5f82",
	measurementId: "G-1L0QDX6FMR",
};
export const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase;
