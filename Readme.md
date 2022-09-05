## Mobile Menu

A React native food delivery application brings delicious food from your favorite local restaurant to your door. Credit card payment implemented with Stripe.




https://user-images.githubusercontent.com/63148200/183539243-01025b73-e776-447d-8ca2-4a763a06439a.mp4





## Technology stack

- React Native
- Expo
- Redux
- Sanity
- JavaScript
- Firebase
- Tailwind


## Dependencies

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
3. Create a new Firebase project  and fill the required information in firebase.js file
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
![image_readme](https://user-images.githubusercontent.com/63148200/183539267-4bcfc9bd-0a07-46ed-b48a-0978a6e619e9.png)



