import "./RegisterView.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from '../context';

function RegisterView() {
    const firstName = useRef('');
    const { setFirstName } = useStoreContext();
    const lastName = useRef('');
    const { setLastName } = useStoreContext();
    const email = useRef('');
    const { setEmail } = useStoreContext();
    const password = useRef('');
    const { setPassword } = useStoreContext();
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

    function register(event) {
        event.preventDefault();
        if (password.current.value === rePassword) {
            setFirstName(firstName.current.value);
            setLastName(lastName.current.value);
            setEmail(email.current.value);
            setPassword(password.current.value);
            navigate(`/movie/genre/28`);
        } else {
            alert("passwords don't match");
        }
    }
    useEffect(() => {
        console.log('Current context values:', { firstName, lastName, email, password });
    }, [firstName, lastName, email, password]);

    return (
        <div>
            <Header />
            <div className="register-flex">
                <div className="genre-checklist">
                    <h className="genre-title">Genres</h>
                    <p className="genre-paragraph">Please choose up to 10 genres so we can personalize your account</p>
                    {genres.map((item, i) => (
                        <div key={i}>
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={(e) => handleCheckBox(e, i)}
                                id={`checkbox-${i}`}
                            />
                            <label className="genre-name">{item.genre}</label>
                        </div>
                    ))}
                </div>

                <div className="register-container">
                    <h className="register-title">Join Us!</h>
                    <form className="register-form" onSubmit={(event) => { register(event) }}>
                        <label className="register-text">First Name:</label>
                        <input type="text" id="first-name" className="register-inputs" ref={firstName} required />
                        <label className="register-text">Last Name:</label>
                        <input type="text" id="last-name" className="register-inputs" ref={lastName} required />
                        <label className="register-text">Email:</label>
                        <input type="email" id="email" className="register-inputs" ref={email} required />
                        <label className="register-text">Password:</label>
                        <input type="password" id="email" className="register-inputs" ref={password} required />
                        <label className="register-text">Re-Enter Password:</label>
                        <input type="password" className="register-inputs" value={rePassword} onChange={(event) => { setRePassword(event.target.value) }} required />
                        <button className="register-button">Sign Up</button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default RegisterView;