import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPeeps } from "../../apis/peep";
import { iPeep } from "./Peeps.reducers";

export const loadPeeps = createAsyncThunk('peeps/loadPeeps', async () => {
        try {
            const response: (iPeep[] | void) = await fetchPeeps();
            return response;
        } catch(err) {
            throw err;
        }
    }
);
