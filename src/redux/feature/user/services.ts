import API from '../../../api';

class UserDataService {
  getAll(page: number = 1) {
    return API.get(`/users?page=${page}`);
  }

  register(email: string, password: string) {
    return API.post('/register', {email, password});
  }
}

export default new UserDataService();
