import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/image/imgUser.png';
import Pagination from "./Pagination";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                <Pagination totalUserCount={props.totalUserCount}
                            pageSize={props.pageSize}
                            currentPage={props.currentPage}
                            onPageChanged={props.onPageChanged}/>
            </div>
            {
                props.users.map(user =>
                    <div key={user.id}>
                            <span>
                                <div>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                         className={s.userPhoto}/>
                                </div>
                                <div>
                                {
                                    user.followed ?
                                        <button onClick={() => {
                                            props.unfollow(user.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            props.follow(user.id)
                                        }}>Follow</button>
                                }
                                </div>
                            </span>
                        <span>
                                <span>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    <div>{"user.location.country"}</div>
                                    <div>{"user.location.city"}</div>
                                </span>
                            </span>
                    </div>
                )
            }
        </div>
    );
};

export default Users;