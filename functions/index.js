const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello and Welcome to Yoshiland!");
 });

const createNotification = (notification => {
    return admin.firestore()
    .collection('notifications')
    .add(notification)
    .then(doc => console.log('Notificaction Added', doc));
});

exports.projectCreated = functions.firestore
.document('projects/{projectId}')
.onCreate(doc =>{

    const project = doc.data();
    const notification = {
        content: 'Added a new project',
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
})

exports.userJoined = functions.firestore.document("users/{uid}")
.onCreate(doc => {
 const user = doc.data();
 const notification = {
  content: "Joined the party",
  user: `${user.firstname} ${user.lastname}`,
  time: admin.firestore.FieldValue.serverTimestamp()
 };
 return createNotification(notification);
});
