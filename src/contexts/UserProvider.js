import axios from "axios";
import UserContext from "./UserContext";

export const UserProvider = (props) => {

    const baseUrl = "http://localhost:3000/api/users/";

    function createUser(username, password) {       
        let user = { username, password };
        
        return axios.post(baseUrl, user)
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    function signInUser(username, password) {
        let user = {username, password};

        return axios.post(`${baseUrl}login`, user).then(response => {
            localStorage.setItem('myCoffeeToken', response.data.token)
            return new Promise(resolve => resolve(response.data))
        })
    }

    return (
        <UserContext.Provider value={{
            createUser,
            signInUser
        }}>
            { props.children }
        </UserContext.Provider>
    )
}