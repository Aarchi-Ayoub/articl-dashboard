export const isAutenticate = ()=>{
    if(localStorage.getItem('auth')){
        const {token, user} = JSON.parse(localStorage.getItem('auth'));
        if(token){
            return {token, user};
        }
    }        return false;

}