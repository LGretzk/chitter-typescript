import { createSlice } from "@reduxjs/toolkit";
import { loadPeeps } from "./Peeps.actions";

// Each slice file should define a type for its initial state value, so that createSlice can correctly infer the type of state in each case reducer.
const initialState: (iPeep)[] = [];

const peepSlice = createSlice({
    name: 'peeps',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        // Load peeps success
        .addCase(loadPeeps.fulfilled, (state: iPeep[], action) => {
            if (action.payload) {
                return state = action.payload;
            }
        })
    }
});

export default peepSlice.reducer;




// Return value from the API:
// [
//     {
//       "id": 3,
//       "body": "my first peep :)",
//       "created_at": "2018-06-23T13:21:23.317Z",
//       "updated_at": "2018-06-23T13:21:23.317Z",
//       "user": {
//         "id": 1,
//         "handle": "kay"
//       },
//       "likes": [{
//         "user": {
//           "id": 1,
//           "handle": "kay"
//         }
//       }]
//     }
//   ]