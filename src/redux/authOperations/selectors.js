export const selectAuthName = store => store.auth.user.name;
export const selectAuthEmail = store => store.auth.user.email;
export const selectIsLoggedIn = store => store.auth.isLoggedIn;
export const selectAuthToken = store => store.auth.token;
export const selectIsRefreshing = store => store.auth.isRefreshing;
