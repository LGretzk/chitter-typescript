import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPeeps } from "../../apis/peep";

export const loadPeeps = createAsyncThunk<iPeep[] | void>(
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
