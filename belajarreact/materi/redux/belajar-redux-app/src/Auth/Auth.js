import auth0 from "auth0-js";
import history from "../History";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid",
  });

  accessToken;
  idToken;
  expiresAt;

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        console.log(err);
        alert(`error : ${err.error}. check the console for further details`);
      }
    });
  };

  getAccessToken = () => {
    return this.accessToken;
  };

  getIdToken = () => {
    return this.getIdToken;
  };

  setSession = (authResult) => {
    // set isLoggedIn flag in local storage
    localStorage.setItem("isLoggedIn", "true");

    // Set the time that the access token will expire at
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    // navigate to home route
    history.replace("/home");
  };

  renewSession = () => {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.logout();
        console.log(err);
        alert(
          `Could not get a new Token (${err.error} : ${err.error_description}).`
        );
      }
    });
    // navigate to beranda
    history.replace("/beranda");
  };

  logout = () => {
    //   remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = null;

    // remove isLoggedIn flag from localstorage
    localStorage.removeItem("isLoggedIn");

    this.auth0.logout({
      returnTo: window.location.origin,
    });

    // navigate to home route
    history.replace("/beranda");
  };

  isAuthenticated = () => {
    //   check whether the current time is pass the
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  };

  login = () => {
    this.auth0.authorize();
  };
}
