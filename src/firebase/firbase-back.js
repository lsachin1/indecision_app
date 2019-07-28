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

const successCallBack  = (snapshot) =>{
	const val = snapshot.val();
	const exp = [];
	snapshot.forEach((childSnapshot) => {
		exp.push({
			id: childSnapshot.key,
			...childSnapshot.val()
		})
	})
	console.log("xxx");
	console.log(exp);
	//console.log(`${val.name} is ${val.job.title} at ${val.job.company}`);
};

const failureCallBack = (e) => {
	console.log('Error in fetching data', e);
};

//database.ref('expense').on('value', successCallBack , failureCallBack)
database.ref('expense').on('child_removed', (snapshot) => {
	console.log("child_removed");
	console.log(snapshot.key);
	console.log(snapshot.val());
}, failureCallBack)

database.ref('expense').on('child_changed', (snapshot) => {
	console.log("child_changed");
	console.log(snapshot.key);
	console.log(snapshot.val());
}, failureCallBack)

/*database.ref('expense').once('value')
.then(successCallBack)
.catch(failureCallBack);*/


/*database.ref('expense').push({
	description: 'Rent',
	amount: 109500,
	createdAt: 1000,
	note: ''
})

database.ref('expense').push({
	description: 'Food',
	amount: 200000,
	createdAt: 976123498763,
	note: ''
})

database.ref('expense').push({
	description: 'Phone Bill',
	amount: 5900,
	createdAt: 976123498976,
	note: ''
})*/

database.ref('expense').once('value')
.then(successCallBack)
.catch(failureCallBack)
/*database.ref().set({
	name: 'Sachin Lokare',
	stressLevel: 6,
	job: {
		title: 'Software developer',
		country: 'United States'
	},
	age: 26,
	isSingle: false,
	location:{
		city: 'Fremomt',
		country: 'United States'
	}
}).then(() => {
	console.log("Data Saved!!");
}).catch((e) => {
	console.log('This Failed', e);
});

database.ref('attributes').set({
	height: 178,
	weight: 84
}).then(() => {
	console.log("Data Saved!!");
}).catch((e) => {
	console.log('This Failed', e);
})*/

/*database.ref().update({
	stressLevel: 9,
	'job/company': 'Amazon',
	'location/city': 'Seattle'
}).then(() => {
	console.log("Data updated!!");
}).catch((e) => {
	console.log('This Failed', e);
});*/

/*database.ref('isSingle').remove(
).then(()=>{
	console.log("Data removed!!");
}).catch((e) => {
	console.log("Data didn't removed!!", e);
})*/
