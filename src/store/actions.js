import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";

export const fetchNews = createAsyncThunk("news/fetchNews", 
    async (data) => api.fetchNews(data)
)