import service from "./config.services";

const signupService = (newUser) =>{
    return service.post("/auth/signup", newUser)
}

const loginService = (credentialsUser) =>{
    return service.post("auth/login", credentialsUser)
}

const verifyService = () =>{
    return service.get("/auth/verify")
}

export{
    signupService,
    loginService,
    verifyService
}