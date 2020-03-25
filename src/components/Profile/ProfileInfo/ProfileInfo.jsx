import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/preloader";
import userPhoto from '../../../assets/image/imgUser.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Contact from "./Contacts";
import {ProfileDataReduxForm} from "./ProfileInfoForm/ProfileDataForm";

const ProfileInfo = ({profile, status, updateUsersStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>;
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => saveProfile(formData).then(() => setEditMode(false));

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img alt={'#'} src={profile.photos.large != null ? profile.photos.large : userPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile}
                                   isOwner={isOwner}
                                   goToEditMode={() => setEditMode(true)}
                                   status={status}
                                   updateUsersStatus={updateUsersStatus}/>
                }
            </div>
        </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode, status, updateUsersStatus}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>Edit</button>
            </div>}
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateUsersStatus}/>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => (
                <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            ))}
            </div>
        </div>
    )
};

export default ProfileInfo;