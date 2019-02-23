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
      firebase.auth().signInWithEmailAndPassword(user_email, `TokPet-Fake-Password @ ${new Date()} with Random Seed ${Math.random()}` )
        .catch(error => {
          
          if (error.code === 'auth/user-not-found') {
            resolve({
              isRegistered : false
            })
          } else {
            resolve({
              isRegistered : true
            })
          }
        });
    });
  }

  doRecoveryPassword(user_email) {
    return new Promise((resolve, reject) => {
      firebase.auth().sendPasswordResetEmail(user_email)
        .then(response => {
          this.$ga.event({
            eventCategory: 'auth_recovery_password',
            eventAction: 'successful',
            eventLabel: 'ok',
          });
          resolve(response);
        }).catch(error => {
          this.$ga.event({
            eventCategory: 'auth_recovery_password',
            eventAction: 'error',
            eventLabel: 'error',
          })
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
        .catch(error => resolve({ status: false, message: error }));
    });
  }
}

export default TokAuthHelper;
