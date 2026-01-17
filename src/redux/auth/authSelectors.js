export const selectToken = (state) => state.auth?.token;

export const selectUser = (state) => state.auth?.user;

export const selectAuthLoading = (state) => state.auth?.isLoading;

export const selectAuthError = (state) => state.auth?.error;

export const selectIsLoggedIn = state => Boolean(state.auth.token);