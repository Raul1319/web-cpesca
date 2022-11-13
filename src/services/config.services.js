import axios from "axios"

const service = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
})

// Llamadas del backend vienen con el token.

service.interceptors.request.use((config) =>{

    //busca el token en localStorage
    const authToken = localStorage.getItem("authToken")

    const completeToken = `Bearer ${authToken}`

    //Anexa el token a la solicitud
    if (authToken) {
        config.headers.authorization = completeToken 
    }

    return config
})



export default service