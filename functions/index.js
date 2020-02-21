const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// Your web app's Firebase configuration

exports.session = functions.https.onRequest((request, response) => {
    var firebaseConfig = {
        apiKey: "AIzaSyBQqDDbBWT2KE_hK9f1jk3o3vCWc5GzGrY",
        authDomain: "cse135-hw3-7d7c0.firebaseapp.com",
        databaseURL: "https://cse135-hw3-7d7c0.firebaseio.com",
        projectId: "cse135-hw3-7d7c0",
        storageBucket: "cse135-hw3-7d7c0.appspot.com",
        messagingSenderId: "815704502208",
        appId: "1:815704502208:web:bed0f05fd90842e084e225",
        measurementId: "G-H0MR4DHHT5"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    var currentDate = new Date();
    

});