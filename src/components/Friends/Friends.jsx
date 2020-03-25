import React from "react";
import s from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friendElement = props.sideBar.map(el => <Friend key={el.id} img={el.img} name={el.name}/>);
    return (
        <div className={s.friends}>
            <h2>Friends</h2>
            <div className={s.friendElements}>
                {friendElement}
            </div>
        </div>
    );
}

export default Friends;