import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "default Context"
});

export default UserContext