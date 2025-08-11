
// auth controller functions to be called in the auth routes
// these functions will handle the logic for signup, login, and logout, obviously   
export const signup = (res, req) => {
    res.send('singup route');
}

export const login = (res, req) => {
    res.send('login route');
}

export const logout = (res, req) => {
    res.send('logout route');
}