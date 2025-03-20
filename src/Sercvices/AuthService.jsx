import axios from "axios"

const base_url="http://localhost:8080/auth/"

const loginUser=async(login)=>{
    return axios.post(`${base_url}login`,login)
    .then(result=>result.data)
    .catch(error=>{throw error;})
}
const navigateToLogin=(navigate)=>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate("/login");
}
export {loginUser};