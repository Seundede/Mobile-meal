## Mobile Menu

A React native food delivery application that brings delicious food from your favourite local restaurant right to your door with credit card payment implemented with Stripe.

![Screenshot](./assets/Image_readme.png)

## Technology stack

- React Native
- Expo
- Redux
- Sanity
- JavaScript
- Firebase
- Tailwind


## Dependency 

- React navigation
- Stripe
- React native animatable
- React native heroicons
- React native safe area context

## Getting started

 These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

 ## Prerequisites

 The following softwares are required on your system
 - Node
 - Npm
 - Expo

 1. Clone the repository
 ```bash
  git clone https://github.com/Seundede/Mobile-meal.git
  cd Nextjs Mobile-meal
```
2. Install the dependencies
```bash
  npm install
```
3. Create a firebase.js file and fill the required information
```bash
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
```
4. Create a .env file and input the Stripe secret and publishing key
```bash
  STRIPE_SECRET_KEY=sk_test_
  STRIPE_PUBLISHABLE_KEY=pk_test_
```
5. Run the React native application
```bash
  expo start 
```
6. Run the application on an iOS simulator
```bash
  npm run ios
```
7. Run the application on an android simulator
```bash
  npm run android
```



