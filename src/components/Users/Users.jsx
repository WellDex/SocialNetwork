import React from "react";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";

let Users = ({totalUserCount, pageSize, currentPage, onPageChanged, users, ...props}) => {
    return (
        <div>
            <Pagination totalUserCount={totalUserCount} pageSize={pageSize}
                        currentPage={currentPage} onPageChanged={onPageChanged}/>
            <div>
                {
                    users.map(u => <User user={u} followingInProgress={props.followingInProgress}
                                         unfollow={props.unfollow}
                                         follow={props.follow} key={u.id}/>)
                }
            </div>
        </div>
    );
};

export default Users;