import { createSlice } from "@reduxjs/toolkit";

export interface iUser {
    id: number,
    handle: string
}

export interface iPeep {
    id: number,
    body: string,
    created_at: string,
    updated_at: string,
    user: iUser,
    likes: iUser[]
}

const initialState: iPeep[] = [];

const peepSlice = createSlice({
    name: 'peeps',
    initialState,
    reducers: {},
    extraReducers: builder => {
        // Load peeps success
        .addCase()
    }
})



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