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

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.command == 'options') {
    const dbRef = ref(getDatabase(firebase))
    const enc_domain = 'd3d3Lmdvb2dsZS5jb20='

    get(child(dbRef, '/domain/'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          response({
            type: 'result',
            status: 'success',
            data: snapshot.val(),
            request: msg,
          })
        } else {
          response({
            type: 'result',
            status: 'success',
            data: [],
            request: msg,
          })
          console.log('No data available')
        }
      })
      .catch((error) => {
        console.error(error)
        response({
          type: 'result',
          status: 'error',
          error: error,
          data: [],
          request: msg,
        })
        console.log('No data available')
      })
  }
  if (msg.command == 'post') {
    var domain = msg.domain
    var enc_domain = btoa(domain)
    var url = msg.url
    var favicon = msg.favicon
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

    try {
      const db = getDatabase(firebase)
      const postId = push(child(ref(db), '/domain/' + enc_domain)).key
      update(ref(db, '/domain/' + enc_domain + '/' + postId), {
        enc_domain,
        domain,
        datetime,
        url,
        favicon,
      })
        .then(() => {
          //return response
          response({
            type: 'result',
            status: 'success',
            data: postId,
            request: msg,
          })
        })
        .catch((error) => {
          // The write failed...
          console.log('error:', error)
          response({
            type: 'result',
            status: 'error',
            data: error,
            request: msg,
          })
        })
    } catch (e) {
      console.log('error:', e)
      response({ type: 'result', status: 'error', data: e, request: msg })
    }
  }
  return true
})
