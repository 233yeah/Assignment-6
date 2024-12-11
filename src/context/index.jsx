import { createContext, useState, useContext } from "react";
import { Map } from 'immutable';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cart, setCart] = useState(Map());
    const [login, setLogin] = useState(false);
    const [checked, setChecked] = useState({
        Action: false,
        Adventure: false,
        Animation: false,
        Comedy: false,
        Music: false,
        Horror: false,
        Mystery: false,
        Fantasy: false,
        Thriller: false,
        Western: false
    });
    const toggleGenre = (genre) => {
        setChecked((prev) => ({
            ...prev,
            [genre]: !prev[genre],
        }));
    };
    const resetState = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setCart(Map())
        setChecked({
            Action: false,
            Adventure: false,
            Animation: false,
            Comedy: false,
            Music: false,
            Horror: false,
            Mystery: false,
            Fantasy: false,
            Thriller: false,
            Western: false
        });
    };

    return (
        <StoreContext.Provider value={{ email, setEmail, password, setPassword, firstName, setFirstName, lastName, setLastName, cart, setCart, login, setLogin, checked, setChecked, toggleGenre, resetState }}>
            {children}
        </StoreContext.Provider>
    );
}

export const useStoreContext = () => {
    return useContext(StoreContext);
}