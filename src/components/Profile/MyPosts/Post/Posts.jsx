import React from 'react';
import s from './Posts.module.css';
import userPhoto from "../../../../assets/image/imgUser.png";
import Preloader from "../../../common/Preloader/preloader";

const Posts = (props) => {
    if (!props.profile)
        return <Preloader/>;
    return (
        <div className={s.item}>
            <img src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto}/>
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    );
};

export default Posts;