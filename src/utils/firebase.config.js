const config = {
  apiKey: "AIzaSyDr7TFFeKWOrUXpyhmoEArCzNZcF9PGTgE",
  authDomain: "waldo-8be5f.firebaseapp.com",
  projectId: "waldo-8be5f",
  storageBucket: "waldo-8be5f.appspot.com",
  messagingSenderId: "643027995157",
  appId: "1:643027995157:web:fde2056db58824448d9c1c"
};

export function getFirebaseConfig()  {
  if (!config || !config.apiKey) {
    throw new Error('No firebase configuration object provided.' + '\n') +
    'Add your web app\'s configuration object to firebase.config.js'
  } else {
    return config;
  }
}
