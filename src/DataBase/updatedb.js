import React from 'react';
import firebase from '../DataBase/firebasedb'

export default async function UpdateDB(pacient, updateComplete) {

  firebase
    .firestore().collection('pacients')
    .doc(pacient.id).update(pacient)
    .then(()=>updateComplete(pacient))
    .catch.console.error();
}

