import { configureStore } from '@reduxjs/toolkit'
import PostsReducer from './reducers/posts';
import UsersReducer from './reducers/users';
import AlbumsReducer from './reducers/albums';


export const store = configureStore({
    reducer: {
        posts: PostsReducer,
        users: UsersReducer,
        albums: AlbumsReducer

    }
})