/* eslint-disable */

"use strict";

/* ------------------------------------- */
/* -- Import Vendors & Libs ------------ */
/* ------------------------------------- */
import firebase from "firebase";
/* ------------------------------------- */


class TokAuthHelper {
  constructor() {
    (this.email = ""), (this.status = "");
  }

  doCheckIsEmailIsRegistered(user_email) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(user_email, `TokPet-Fake-Password @ ${new Date()} with Random Seed ${Math.random()}`)
        .catch(error => {

          if (error.code === 'auth/user-not-found') {
            resolve({
              isRegistered: false
            })
          } else {
            resolve({
              isRegistered: true
            })
          }
        });
    });
  }

  doRecoveryPassword(user_email) {
    return new Promise((resolve, reject) => {
      firebase.auth().sendPasswordResetEmail(user_email)
        .then(response => {
          resolve(response);
        }).catch(error => {
          reject(error)
        });
    });
  }

  doCheckIsUserIsLogged() {
    return new Promise((resolve) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  doLogging(user_email, user_password) {
    return new Promise((resolve) => {
      firebase.auth().signInWithEmailAndPassword(user_email, user_password)
        .then(response => resolve({ status: true, message: response }))
        .catch(error => resolve({ status: false, message: error }) );
    });
  }
}

export default TokAuthHelper;
