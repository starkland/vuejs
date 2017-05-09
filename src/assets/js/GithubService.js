import axios from 'axios';

import Config from '../../config/';
import Event from './Event';

export default class GithubService {
  constructor() {}

  get(obj) {
    let { type = obj.selected.id, search } = obj;
    let searchUrl = `${Config.ApiUrl}/search/${type}?q=${search}`;

    axios
      .get(searchUrl)
      .then((response) => this._searchResponse(response.data))
      .catch((err) => this._error(err));
  }

  _searchResponse(obj) {
    Event.$emit('github_data', obj);
  }

  getByUser(user) {
    let searchUrl = `${Config.ApiUrl}/users/${user}`;

    axios
      .get(searchUrl)
      .then((response) => this._userResponse(response.data))
      .catch((err) => this._error(err));
  }

  _userResponse(obj) {
    Event.$emit('github_userData', obj);
  }

  _error(obj) {
    obj.from = 'GithubService';
    Event.$emit('error', obj);
  }
}