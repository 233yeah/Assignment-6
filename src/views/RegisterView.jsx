import "./RegisterView.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterView() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const genres = [
        { checked: false, genre: 'Action' },
        { checked: false, genre: 'Adventure' },
        { checked: false, genre: 'Animation' },
        { checked: false, genre: 'Comedy' },
        { checked: false, genre: 'Music' },
        { checked: false, genre: 'Horror' },
        { checked: false, genre: 'Mystery' },
        { checked: false, genre: 'Fantasy' },
        { checked: false, genre: 'Thriller' },
        { checked: false, genre: 'Western' }
    ];
    const navigate = useNavigate();

    function register(event){
        event.preventDefault();
        console.log(password);
        if (password === rePassword) {
            navigate(`/movie/genre/28`);
        } else {
            alert("passwords don't match");
        }
    }

    return (
        <div>
            <Header />
            <div>
                {
                    genres.map((item, i) =>
                        <div key={i}>
                            <input type="checkbox" onChange={(e) => handleCheckBox(e, i)}>{item.genres}</input>
                        </div>
                    )
                }
            </div>
            <div className="register-container">
                <h className="register-title">Join Us!</h>
                <form className="register-form" onSubmit={(event) => { register(event) }}>
                    <label className="register-text">First Name:</label>
                    <input type="text" className="register-inputs" value={firstName} onChange={(event) => { setFirstName(event.target.value) }} required />
                    <label className="register-text">Last Name:</label>
                    <input type="text" className="register-inputs" value={lastName} onChange={(event) => { setLastName(event.target.value) }} required />
                    <label className="register-text">Email:</label>
                    <input type="email" className="register-inputs" value={email} onChange={(event) => { setEmail(event.target.value) }} required />
                    <label className="register-text">Password:</label>
                    <input type="password" className="register-inputs" value={password} onChange={(event) => { setPassword(event.target.value) }} required />
                    <label className="register-text">Re-Enter Password:</label>
                    <input type="password" className="register-inputs" value={rePassword} onChange={(event) => { setRePassword(event.target.value) }} required />
                    <button className="register-button">Sign Up</button>
                </form>
            </div>
            <Footer />
        </div>

    )
}

export default RegisterView;