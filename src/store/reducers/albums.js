import { createSlice } from '@reduxjs/toolkit';
import { fetchAlbums, fetchAlbumById } from '../utils/thunks';

export const albumsSlice = createSlice({
    name:'albums',
    initialState:{
        loading:true,
        articles:{
            items:[]
        }
    },
    reducers:{
        clearAlbumById:(state)=>{
            state.albumById = {}
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAlbums.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchAlbums.fulfilled,(state,action)=>{
            console.log(action.payload);
            
            state.loading = false;
            state.articles = action.payload;
            
        })
        .addCase(fetchAlbums.rejected,(state)=>{
            state.loading = false;
        })

        .addCase(fetchAlbumById.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchAlbumById.fulfilled,(state,action)=>{
            state.loading = false;
            state.albumById = action.payload;
        })
        .addCase(fetchAlbumById.rejected,(state)=>{
            state.loading = false;
        })
      
    }
})




export const { clearAlbumById } = albumsSlice.actions;

export default albumsSlice.reducer;
