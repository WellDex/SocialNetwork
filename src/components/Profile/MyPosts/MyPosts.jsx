import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';
import {AddNewPostsFormReduxForm} from "./AddNewPostsForm/AddNewPostsForm";

const MyPosts = React.memo((props) => {
    let postsElement = props.posts.map(el => <Posts key={el.id} profile={props.profile} message={el.message}
                                                    likeCount={el.likeCount}/>);
    let onAddPost = (value) => {
        props.addPost(value.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <AddNewPostsFormReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
});

export default MyPosts;