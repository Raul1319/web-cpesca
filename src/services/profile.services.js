import { Router } from "react-router-dom";
import service from "./config.services";

const profileService = (userProfile) =>{
    return service.get("/profile/profile", userProfile);

}

const editPorfileSevice = (editProfile) =>{
    return service.patch("/profile/:editProfileId", editProfile);
}

const deleteProfileService = (deleteProfile) =>{
    return service.delete("/profile/:userIdDelete", deleteProfile)
}

export{
    profileService,
    editPorfileSevice,
    deleteProfileService
}