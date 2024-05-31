## Project description

A mobile chat application built with React Native. The app will provide users with a chat interface and options to share images and their location.

## Project Features

- Send and receive messages in real-time

- Share location

- Take a photo and share

- Choose a photo from library and share

- Customize theme

### Getting Started

- **Technologies**

  - React Native
  - Expo and Expo Go App
  - Google Firestore Database

- **Libraries**
  - Gifted Chat library
  - Expo ImagePicker
  - Expo MediaLibrary
  - Expo Location

To run this app locally, you'll need to follow these steps:

- Clone this repository.
- Set up Expo in your development environment:

  - Install Expo and Expo CLI, as this is the platform you’ll use to build your app;

        npm install -g expo-cli

  - Install Expo Go app on your mobile device, so that you can test your app on your own mobile device;

    Search for the Expo Go app in the relevant app store for your device (iOS or Android)

  - Create an Expo account.

### Prerequisites

Before installing Expo, ensure you have a suitable version of Node installed. At the time of writing, Expo only supports Node 16.. at max.

Node.js: Download and install Node.js. For this you can use the nvm tool https://github.com/nvm-sh/nvm

    nvm install 16.19.0
    nvm use 16.19.0
    nvm alias default 16.19.0

Navigate to the chat-app directory and install all dependencies:

    npm install

## Setting the Firestore Database

- Sign up into Google Firebase

- On the main page, you will see the option to "Create a project" or "Add new project" if this is not your first project.

  - Give your project a name, for example, "chat-app."
  - Enable or disable Google Analytics for this project. (For this project, I disabled Analytics)

1. **You will need first to create a Database to store the messages for your chat app**.

- Head to the menu on the left-hand side of the page and click on Build than on Firestore Database and Create Database

      Build > Firestore Database > Create Database Button

- A modal will appear, prompting you to select the location for storing Cloud Firestore data.

      Database ID is set to Default

      From the dropdown menu, select the location where your Users are located.

- For this project, I selected **Start in production mode**, click Next.

- Under Data Tab click on **Start Collection** and give the name, for example, "messages"
- Next for the **Document Id** click on **Auto ID** to auto-generate a document ID. Click **Save** . The new messages will be now saved in this collection and the **Fields** are defined in code > Chat.js

- Click the Rules tab on the Firestore dashboard. With its default configuration, the database doesn’t allow read-and-write queries from a mobile or web app to be performed. We need to change this piece of code. Change false to true in the following line:

      allow read, write: if false;

  to:

       allow read, write: if true;

- Click **Publish**

- Next, navigate to Project Setting on the left-hand side of the page. Under the General tab, find the Your Apps option. Choose a platform to start your app. For this project, I selected Web.

         Project Settings > General Tab > Your Apps > Web ( </> ).

- Give your App a nickname and click **Register**.

- Here you will find your web app's Firebase configuration and you need to copy them in App.js:

      const firebaseConfig = {
        apiKey: "your-api-key",
        authDomain: "your-authdomain",
        projectId: "your-project-id",
        storageBucket: "your-storage-bucket",
        messagingSenderId: "your-messaging-sender-id",
        appId: "your-app-id",
        };

2.  **Implement an authentication process into your app**

- Head to your Firestore dashbord and under Build click Authentication and Get Started button. By default, you should be taken to the Sign-in method tab.

      Build > Authentication > Get Started button > Sign-in method tab

- From the wide range of authentication methods provided by Firestore Google, I opted for the Anonymous option, which suffices for this project.

  - Enable Anonymous and click **Save** . With anonymous authentication, you receive a user object with an ID in it, which you can then store in your database for that particular user. The authentication code resides in Start.js component.

3. **To be able to store and send images or videos in your native chat app, you’ll need to set up Firebase Storage**

- Head to your Firestore dashbord and under Build click Storage and Get Started button. A popup will open that asks you to set your cloud storage. Keep everything on default and press **Next**, then **Done**

- You need to allow uploading and downloading files to and from the storage, from whichever device connects to your Firebase Storage.

- Go to the Rules tab, change false to true in the following line:

        allow read, write: if false;

  to:

         allow read, write: if true;

- Click **Publish**

- You don’t need to configure anything else because everything you need to work with Firebase Cloud Storage is already built into the Firestore library.

## After seting up the Firestore Database you can now start the App.

- Initialize the app in your terminal:

      npx expo start

- Use the Expo Go App on your mobile device to check the UI
