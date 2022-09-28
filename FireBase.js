import firebase from 'firebase'

class fireBase {
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyBOz3spTzBuWwc-CP3S533Xtfbf7DGGY9A",
                authDomain: "healthapp-5cd21.firebaseapp.com",
                projectId: "healthapp-5cd21",
                storageBucket: "healthapp-5cd21.appspot.com",
                messagingSenderId: "947995840802",
                appId: "1:947995840802:web:16b577703d6a1a9cd3d57b",
                measurementId: "G-QB6RX9JP4X"

            })
        }
    }

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously()
            }
        })
    }

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }

            this.db.push(message)
            
        });
    }

    parse = message => {
        const { user, text, timestamp } = message.val()
        const { key: _id } = message
        const createdAt = new Date(timestamp)

        return {
            _id,
            createdAt,
            text,
            user
        }
    }

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)))
    }

    off() {
        this.db.off()
    }


    get db() {
        return firebase.database().ref("messages")
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }
}

export default new fireBase