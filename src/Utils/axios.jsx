import axios from "axios"

const instance = axios.create({
    // baseURL:'https://api.themoviedb.org/3',
    baseURL:'https://netflix-backend-6u8y.onrender.com/'
})


export default instance