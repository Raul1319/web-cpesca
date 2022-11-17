import { Router } from "react-router-dom";
import service from "./config.services";

const profileService = () =>{
    return service.get("/profile/profile");

}

const editPorfileSevice = (profileId, editProfile) =>{
    return service.patch(`/profile/${profileId}/edit`, editProfile);
}

const deleteProfileService = (userId, deleteProfile) =>{
    return service.delete(`/profile/${userId}/delete`, deleteProfile)
}

export{
    profileService,
    editPorfileSevice,
    deleteProfileService
}