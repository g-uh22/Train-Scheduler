 // Init Firebase
 var config = {
    apiKey: "AIzaSyCfrbwcJGLLWIdaJS2hXy-FStVx-qaLYLg",
    authDomain: "traintime-4a15a.firebaseapp.com",
    databaseURL: "https://traintime-4a15a.firebaseio.com",
    projectId: "traintime-4a15a",
    storageBucket: "traintime-4a15a.appspot.com",
    messagingSenderId: "158840931205"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  const db = firebase.firestore()

//submit to send info to database
document.querySelector('#submit').addEventListener('click', e => {
    
    e.preventDefault()

    let id = db.collection('schedule').doc().id

    db.collection('schedule').doc(id).set({
        train: document.querySelector(`#train_name`).value,
        destination: document.querySelector(`#destination_name`).value,
        firstTrain: document.querySelector(`#train_time`).value,
        frequency: parseInt(document.querySelector(`#frequency`).value),

    })

    document.querySelector(`#train_name`).value = ''
    document.querySelector(`#destination_name`).value = ''
    document.querySelector(`#train_time`).value = ''
    document.querySelector(`#frequency`).value = ''
})