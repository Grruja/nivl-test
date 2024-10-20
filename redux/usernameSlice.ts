import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UsernameState {
    value: string
}

const initialState: UsernameState = {
    value: ""
};

export const usernameSlice = createSlice({
    name: "username",
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            let value = action.payload;
            state.value = value.charAt(0).toUpperCase() + value.slice(1);
        }
    }
});

export const { setUsername } = usernameSlice.actions;
export default usernameSlice.reducer;