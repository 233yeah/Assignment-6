import { useStoreContext } from "../context";
import "./SettingsView.css";

function SettingsView() {
    const { password, email, firstName, lastName, checked, toggleGenre } = useStoreContext();
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

    return (
        <div className="settings-view">
            <h1>Settings</h1>
            <div className="settings-info">
                <p className="first-name">First Name: {firstName}</p>
                <p className="last-name">Last Name: {lastName}</p>
                <p className="email">Email: {email}</p>
                <p className="password">Password: {password}</p>
            </div>
            <div className="genre-checklist">
                <h className="genre-title">Genres</h>
                <p className="genre-paragraph">Please choose up to 10 genres so we can personalize your account</p>
                {genres.map((item, i) => (
                    <div key={i}>
                        <input
                            type="checkbox"
                            checked={checked[item]}
                            onChange={() => toggleGenre(item)} // Toggle the checked state of the genre
                            id={`checkbox-${i}`}
                        />
                        <label className="genre-name">{item}</label>
                    </div>
                ))}
            </div>

        </div>

    )
}

export default SettingsView;