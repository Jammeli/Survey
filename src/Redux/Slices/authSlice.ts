import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Définition du type de l'état utilisateur
interface User {
  id_user: string;
  name: string;
  email: string;
  plan: string;
  loggedIn: boolean;
}

interface UserState {
  user: User;
}

// État initial
const initialState: UserState = {
  user: {
    id_user: "67a8eb84cbe353121feeaac8",
    name: "marwen ",
    email: "marwen.jammeli@gmail.com",
    plan: "Free", // ✅ Par défaut "Free"
    loggedIn: true,
  },
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // ✅ Action pour mettre à jour le plan utilisateur
    setPlan: (state, action: PayloadAction<string>) => {
      state.user.plan = action.payload;
    },
  },
});

export const { setPlan } = authSlice.actions;
export default authSlice.reducer;
