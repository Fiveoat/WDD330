import  makeRequest  from './authHelpers.js';
export default class Auth {
  constructor() {
    this.jwtToken = '';
    this.user = {};
  }

  async login(callback) {
    const password = document.getElementById('password');
    const username = document.getElementById('username');
    const postData = {
      email: username.value,
      password: password.value  
    };
    try {
      const loginResponse = await makeRequest('login', 'POST', postData)
      this.jwtToken=loginResponse.accessToken;
      this.user = await this.getCurrentUser(username.value);
      document.getElementById('login').classList.add('hidden');
      password.value = '';
      if(callback) {
        callback();
      }
    } catch (error) {
      console.log(error);
    }
  }
  async getCurrentUser(email) {
    try {
      const currentUser = await makeRequest('users', 'GET', null, this.jwtToken)
      console.log(currentUser);
      const filteredUser=currentUser.filter(email=>currentUser.email == email);
      console.log(filteredUser);
      return filteredUser;
    } catch (error) {
      console.log(error);
    }
  }
  set token(value) {
  }
  get token() {
    return this.jwtToken;
  }
}

