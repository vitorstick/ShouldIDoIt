import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
    apiKey: "AIzaSyDghwfm3z9m8yKzxwT1cEMdg-JOosWA1rs",
    authDomain: "hgfw-ff394.firebaseapp.com",
    databaseURL: "https://hgfw-ff394.firebaseio.com",
    storageBucket: "hgfw-ff394.appspot.com",
    messagingSenderId: "117574328611"
};



export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
