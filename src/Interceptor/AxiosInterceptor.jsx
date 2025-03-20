import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: 'https://careerwave-backend.onrender.com',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const setupResponseInterceptor = (navigate) => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        if (error.response.status === 401) {
          console.log("Unauthorized - Redirecting to login");
          localStorage.removeItem("token");
          navigate("/login");
        }
      } 
      return Promise.reject(error);
    }
  );
};

export default axiosInstance;
