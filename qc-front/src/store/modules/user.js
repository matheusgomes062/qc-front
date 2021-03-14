import axios from 'axios';

var axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_REGISTER_SERVICE_URL
});

export default {
  state: {
    user: {
      name: '',
      email: '',
      password: '',
      cpf: ''
    },
    token: ''
  },
  getters: {
    token(state) {
      return state.token;
    },
    user(state) {
      return state.user;
    }
  },
  mutations: {},
  actions: {
    login: (_, payload) => {
      return new Promise((resolve, reject) => {
        axiosInstance
          .post(`sessions`, payload)
          .then(({ status, data }) => {
            console.log(data);
            if (status === 200) {
              localStorage.setItem('token', data.token);
              resolve(true);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    registerUser: (_, payload) => {
      return new Promise((resolve, reject) => {
        axiosInstance
          .post(`users`, payload)
          .then(({ status }) => {
            if (status === 200) {
              resolve(true);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    refresh_token: () => {
      return new Promise((resolve, reject) => {
        axiosInstance
          .post(`token/refresh`)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    }
  }
};
