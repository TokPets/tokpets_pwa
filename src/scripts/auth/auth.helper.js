// auth.helper.js
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

  doRecoveryPassword(user_email) {
    return new Promise((resolve, reject) => {
      firebase.auth().sendPasswordResetEmail(user_email)
      .then( response => {
        this.$ga.event({
            eventCategory: 'auth_recovery_password',
            eventAction: 'successful',
            eventLabel: 'ok',
        });
        resolve(response);
      }).catch( error => {
        this.$ga.event({
            eventCategory: 'auth_recovery_password',
            eventAction: 'error',
            eventLabel: 'error',
        })
        reject(error)
      });
    });
  }

  doCheckIsUserIsLogged(){
    return new Promise((resolve) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          resolve(true);
        }else{
          resolve(false);
        }
      });
    });
  }
}

export default TokAuthHelper;
