import React from 'react';
import firebase from '../DataBase/firebasedb'

export default async function DeleteData(pacient, deleteComplete) {

  firebase
    .firestore().collection('pacients')
    .doc(pacient.id).delete()
    .then(() => deleteComplete())
    .catch.console.error();
}
