import { useStoreContext } from "../context";
import "./SettingsView.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function SettingsView() {
    const { password, email, firstName, lastName, checked, toggleGenre, setFirstName, setLastName } = useStoreContext();
    const genres = [
        'Action',
        'Adventure',
        'Animation',
        'Comedy',
        'Music',
        'Horror',
        'Mystery',
        'Fantasy',
        'Thriller',
        'Western'
    ];
    const navigate = useNavigate();

    function changeName(event) {
        event.preventDefault();
        alert("changed!");
    }

    function backPage() {
        navigate(`/movie/genre/28`);
    }

    return (
        <div>
            <Header />
            <div className="register-flex">
                <div className="settings-checklist">
                    <h className="genre-title">Genres</h>
                    <p className="settings-paragraph">Please choose up to 10 genres so we can personalize your account</p>
                    {genres.map((item, i) => (
                        <div key={i}>
                            <input
                                type="checkbox"
                                checked={checked[item]}
                                onChange={() => toggleGenre(item)} // Toggle the checked state of the genre
                                id={`checkbox-${i}`}
                            />
                            <label className="settings-name">{item}</label>
                        </div>
                    ))}
                </div>
                <div className="settings-view">
                    <button onClick={() => backPage()} className="back-button">Back</button>
                    <h1>Settings</h1>
                    <div className="settings-info">
                        <form className="settings-form" onSubmit={(event) => { changeName(event) }}>
                            <label className="settings-text">First Name:</label>
                            <input type="text" id="first-name" className="settings-inputs" value={firstName} onChange={(event) => { setFirstName(event.target.value) }} required />
                            <label className="settings-text">Last Name:</label>
                            <input type="text" id="last-name" className="settings-inputs" value={lastName} onChange={(event) => { setLastName(event.target.value) }} required />
                            <button className="settings-button">Change First/Last Name?</button>
                        </form>
                        <label className="settings-text">Email:</label>
                        <input type="email" id="email" className="settings-inputs readOnly" value={email} required />
                        <label className="settings-text">Password:</label>
                        <input type="text" id="email" className="settings-inputs readOnly" value={password} required />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SettingsView;