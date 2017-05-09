import Config from '../../config/';

export default class UserService {
  constructor() {
    this.url = `${Config.ApiUrl}/users`;
  }

  get(keyword) {
    console.warn(`${this.url}/${keyword}`);
  }
}