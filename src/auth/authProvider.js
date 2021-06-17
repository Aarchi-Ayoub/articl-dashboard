const authProvider = {
    // called when the user attempts to log in
    login: ({ username: email, password }) => {
        const request = new Request("http://192.168.11.104:8443/api/v1/users/login", {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                // console.log(response);
                if (response.status < 200 || response.status >= 300) {
                    // console.log(response.json().then(message => message.message))
                    throw new Error(response.statusText);
                }

                return response.json();
            })
            .then((auth) => {
                localStorage.setItem('auth', JSON.stringify(auth));
                // console.log(JSON.parse(localStorage.getItem("auth")).token);
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('auth') ?
            Promise.resolve() :
            Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),


};

export default authProvider