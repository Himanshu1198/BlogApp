import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    createPost: (state, action) => {
     
    },
    updatePost: (state, action) => {},
    deletePost: (state, action) => {},
    getPost: (state, action) => {},
    getPosts: (state, action) => {},
    uploadFile: (state, action) => {},
    deleteFile: (state, action) => {},
    getFilePreview: (state, action) => {},
  },
})
