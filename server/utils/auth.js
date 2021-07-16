//***referenced from lesson 21 part 6***
import decode from "jwt-decode";
class AuthService {
  getProfile() {
    return decode(this.getToken());
  }
  loggedIn() {
    // checks if saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }
  getToken() {
    // Retrieve token from localStorage
    return localStorage.getItem("id_token");
  }
  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }
  logout() {
    // Clear all for next time
    localStorage.removeItem("id_token");
    // page reset
    window.location.assign("/");
  }
}
export default new AuthService();
