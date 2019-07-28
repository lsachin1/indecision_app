import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyC3ype6khWnsoiE_aF-t9kG8Ayu8LWTVUo",
    authDomain: "expensify-6b0b7.firebaseapp.com",
    databaseURL: "https://expensify-6b0b7.firebaseio.com",
    projectId: "expensify-6b0b7",
    storageBucket: "expensify-6b0b7.appspot.com",
    messagingSenderId: "480506147603"
}

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


