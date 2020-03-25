import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": '14a01314-c9a1-4d03-a1ef-0287c87d04da'}
});

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow: (usersId) => {
        return instance.delete(`follow/${usersId}`)
            .then(response => response.data)
    },
    follow: (usersId) => {
        return instance.post(`follow/${usersId}`, null)
            .then(response => response.data)
    },
};
export const authAPI = {
    authMe: () => {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login: (email, password, rememberMe = false, captcha = null) => {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout: () => {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
};
export const profileAPI = {
    getProfile: (usersId) => {
        return instance.get(`profile/${usersId}`)
            .then(response => response.data)
    },
    getStatus: (usersId) => {
        return instance.get(`profile/status/${usersId}`)
            .then(response => response.data)
    },
    updateStatus: (status) => {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    },
    savePhoto: (photoFile) => {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    },
    saveProfile: (profile) => {
        return instance.put(`profile`, profile)
            .then(response => response.data)
    }
};
export const securityAPI = {
    getCaptchaUrl: () => {
        return instance.get(`security/get-captcha-url`)
            .then(response => response.data.url)
    }
};