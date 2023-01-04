import axios from "axios";

const client = axios.create({
    baseURL: "https://test.com/api/v1/"
})

client.interceptors.request.use(request => {
    return request;
})

client.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status === 401) {
        removeToken();
    }
    return Promise.reject(error)
})

const setToken = (token) => {
    localStorage.setItem('token', token);
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const removeToken = () => {
    localStorage.removeItem('token');
    client.defaults.headers.common['Authorization'] = "";
}

export const login = (values) => {
    const {data} = client.post(`login`, values);
    setToken(data?.token);
    return data;
}

export const logout = (values) => {
    const {data} = client.post(`logout`, values);
    removeToken();
    return data;
}
export const register = (values) => {
    const {data} = client.post(`register`, values);
    setToken(data.token);
    return data;
}

export const forgetPassword = (values) => {
    const {data} = client.post(`forget-password`, values);
    return data;
}

export const resetPassword = (values) => {
    const {data} = client.post(`reset-password`, values);
    return data;
}

export const verifyEmail = () => {
    const {data} = client.get(`verify-email`);
    return data;
}