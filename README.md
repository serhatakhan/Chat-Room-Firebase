# Chat Room

This project is a chat application developed using Firebase. Users can sign in with their Google accounts and engage in messaging across different chat rooms. Project aims to provide users with a platform for easy communication using Firebase's fast and reliable cloud infrastructure. Comments and explanations within the code provide detailed insights into how the project functions.

## Features

* `Sign In with Google:` Authentication is handled using Firebase Authentication with Google OAuth.
  
* `Chat Rooms:` Users can join different chat rooms and view messages specific to each room.
  
* `Real-Time Messaging:` Real-time message exchange is facilitated using Firebase Firestore and the onSnapshot method.

* `User Identification:` The names and profile pictures of message senders are retrieved from the logged-in user's information.

* `User Authorization:` User authentication status is stored in local storage to maintain authorization even when the application is reopened.

## Used Technologies & Firebase Features

**Firebase Authentication:** Used for Google sign-in functionality.

**Firebase Firestore:** Employed for real-time database functionality and message storage.

**Firebase Storage:** Not used for user profiles in this project but can be utilized for image or file uploads.

**Firebase Cloud Functions:** Can be used for custom operations or backend logic as needed.

## Live

https://chat-room-firebase.vercel.app/

## Screen Gif

![k11-ezgif com-video-to-gif-converter](https://github.com/serhatakhan/Chat-Room-Firebase/assets/147662915/7f05de5f-69c8-4b99-a1ae-3a157e9ee883)


