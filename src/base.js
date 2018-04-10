import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC5nGlpdSUO1DihOK5fQI855YIQpZzP_xk",
    authDomain: "exercisedb-20924.firebaseapp.com",
    databaseURL: "https://exercisedb-20924.firebaseio.com"
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

/* for my demo, be sure to put yours in place
apiKey: "AIzaSyA60-RA1ZHZRXrmmAH-gsp1h7OpRFYWugY",
authDomain: "d18-demo.firebaseapp.com",
databaseURL: "https://d18-demo.firebaseio.com"
*/

export default base;