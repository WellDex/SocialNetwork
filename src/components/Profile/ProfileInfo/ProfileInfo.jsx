import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import userPhoto from '../../../assets/image/imgUser.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateUsersStatus}) => {
    if (!profile)
        return <Preloader/>;
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large != null ? profile.photos.large : userPhoto}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateUsersStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;