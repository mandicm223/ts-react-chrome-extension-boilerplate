// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase, get, child, ref, update, push } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCNr3xxXz6iuObEdM-s5MfS73pM8SczSAo',
  authDomain: 'chrome-extension-demo-b4816.firebaseapp.com',
  databaseURL:
    'https://chrome-extension-demo-b4816-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'chrome-extension-demo-b4816',
  storageBucket: 'chrome-extension-demo-b4816.appspot.com',
  messagingSenderId: '1058378714361',
  appId: '1:1058378714361:web:ffc214ed73d638f3d7a628',
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)

export async function postData(
  enc_domain,
  domain,
  url,
  timestamp,
  favicon
): Promise<any> {
  try {
    const db = getDatabase(firebase)
    const postId = push(child(ref(db), '/domain/' + enc_domain)).key
    update(ref(db, '/domain/' + enc_domain + '/' + postId), {
      timestamp,
      domain,
      url,
      favicon,
    })
      .then(() => {
        //return response
        return console.log('success')
      })
      .catch((error) => {
        // The write failed...
        return console.log('error:', error)
      })
  } catch (e) {
    return console.log('error:', e)
  }
}

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.command == 'post') {
    var domain = msg.domain
    var enc_domain = btoa(domain)
    var currentdate = new Date()
    var datetime =
      'Date: ' +
      currentdate.getDate() +
      '/' +
      (currentdate.getMonth() + 1) +
      '/' +
      currentdate.getFullYear() +
      ' @ ' +
      currentdate.getHours() +
      ':' +
      currentdate.getMinutes() +
      ':' +
      currentdate.getSeconds()

    const data = postData(
      enc_domain,
      msg.domain,
      msg.url,
      datetime,
      msg.favicon
    )
    response({
      data: data,
    })
  }
})
