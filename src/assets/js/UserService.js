import axios from 'axios';

import Config from '../../config/';
import Event from './Event';

export default class UserService {
  constructor() {
    this.url = `${Config.ApiUrl}/users`;
  }

  get(keyword) {
  	axios
  		.get(`${this.url}/${keyword}`)
  		.then((response) => this._response(response.data))
  		.catch((err) => this._errror(err));
  }

  _response(obj) {
  	Event.$emit('user_data', obj);
  }

  _error(obj) {
  	obj.from = 'UserService';
  	Event.$emit('error', obj);
  }
}