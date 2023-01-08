import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    "API-KEY": "64621a5f-3490-44e5-84a0-d871a0b2faf7"
  }
})

export const usersAPI = {

  getUsers(page = 1, size = 10) {
    return instance.get(`/users?page=${page}&count=${size}`)
      .then(response => response.data)
  },
  follow(id) {
    return instance.post(`/follow/${id}`, {})
      .then(response => response.data)
  },
  unfollow(id) {
    return instance.delete(`/follow/${id}`)
      .then(response => response.data)
  }
}

export const authAPI = {
  checkAuth() {
    return instance.get(`/auth/me`)
      .then(response => response.data)
  },
  login(login, password, rememberMe = false) {
    return instance.post(`/auth/login`, {
      email: login,
      password: password,
      rememberMe: rememberMe
    }).then(response => response.data)
  },
  logout() {
    return instance.delete(`/auth/login`)
      .then(response => response.data)
  }
}

export const profileApi = {
  getProfile(id) {
    return instance.get(`/profile/${id}`)
      .then(response => response.data)
  },
  getStatus(userId) {
    return instance.get(`/profile/status/${userId}`)
      .then(response => response.data)
  },
  updateStatus(status) {
    return instance.put(`/profile/status`, { status: status }) // { status: status } === { status }
      .then(response => response.data)
  },
  savePhoto(file) {
    let formData = new FormData()
    formData.append("image", file)
    return instance.put(`/profile/photo`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(response => response.data)
  }
}