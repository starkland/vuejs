import Config from '../../config/';

export default class GithubService {
  constructor() {
    this.url = `${Config.ApiUrl}/users`;
  }

  get(keyword) {
    console.warn(`${this.url}/${keyword}/repos`);
  }
}