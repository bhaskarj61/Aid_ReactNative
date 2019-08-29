import Auth from './Auth';

class Store {

  auth: Auth;

  constructor() {
    this.auth = new Auth(this);
  }

  async init() {
    await this.auth.init()
  }
}

export default new Store();