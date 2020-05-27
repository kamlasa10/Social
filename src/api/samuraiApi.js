const axios = require('axios');

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    'API-KEY': '3032c9e3-d96b-400b-97fc-89ec3719c64c'
  }

});

export const usersApi = {
  getUsers: async (page, count) => {
    const res = await instance.get(`users?page=${page}&count=${count}`);
    return res.data;
  },
  follow: async (id) => {
    debugger
    const res = await instance.post(`follow/${id}`);
    return res.data;
  },
  unFollow: async (id) => {
    const res = await instance.delete(`follow/${id}`);
    return res.data;
  }
};
export const profileApi = {
  getProfile: async (id) => {
    const res = await instance.get(`profile/${id}`);
    return res.data;
  },
  updateProfile: async (data) => {
    const res = await instance.put(`profile`, data);
    return res.data;
  },
  getUserStatus: async (userId) => {
    const res = await instance.get(`profile/status/${userId}`);
    return res.data;
  },
  updateUserStatus: async (status) => {
    const res = await instance.put(`profile/status`, {status});
    return res.data;
  },
  updateAvatar:  async (data) => {
    const res = await instance.put(`profile/photo`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return res.data;
  }
};
export const authApi = {
  me: async () => {
    const res = await instance.get(`auth/me`);
    return res.data;
  },
  login: async (userData) => {
    const res = await instance.post(`auth/login`,userData);
    return res.data;
  },
  logout: async () => {
    const res = await instance.post(`auth/logout`);
    return res.data;
  },
  captcha: async () => {
    const res = await instance.get(`security/get-captcha-url`);
    return res.data;
  }
};
