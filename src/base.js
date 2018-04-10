import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyA60-RA1ZHZRXrmmAH-gsp1h7OpRFYWugY",
    authDomain: "d18-demo.firebaseapp.com",
    databaseURL: "https://d18-demo.firebaseio.com"
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export default base;