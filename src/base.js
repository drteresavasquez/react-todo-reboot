import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC5nGlpdSUO1DihOK5fQI855YIQpZzP_xk",
    authDomain: "exercisedb-20924.firebaseapp.com",
    databaseURL: "https://exercisedb-20924.firebaseio.com"
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export default base;