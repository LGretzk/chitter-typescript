import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPeeps } from "../../apis/peep";

// The only type needed to be provided for createAsyncThunk is the type of the argument for the payload creation callback (here empty)
export const loadPeeps = createAsyncThunk(
    'peeps/loadPeeps', 
    async () => {
        try {
            const response = await fetchPeeps();
            return response;
        } catch(err) {
            throw err;
        }
    }
);
