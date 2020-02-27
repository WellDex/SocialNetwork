import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPosts = (props) => {
        let postsElement = props.posts.map(el => <Posts message={el.message} likeCount={el.likeCount}/>);

        let onAddPost = () => props.addPost();
        let onPostChange = (e) => props.updateNewPostTextActionCreator(e.target.value);

        return (
            <div className={s.postsBlock}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea placeholder='Enter your post' onChange={onPostChange}
                                  value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        );
    }
;

export default MyPosts;