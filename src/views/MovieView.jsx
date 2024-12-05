import "./MovieView.css";
import Header from "../components/Header";
import Genre from "../components/Genre";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MovieView() {
    const genres = [
        { id: 28, genre: 'Action' },
        { id: 12, genre: 'Adventure' },
        { id: 16, genre: 'Animation' },
        { id: 80, genre: 'Comedy' },
        { id: 10402, genre: 'Music' },
        { id: 27, genre: 'Horror' },
        { id: 9648, genre: 'Mystery' },
        { id: 14, genre: 'Fantasy' },
        { id: 53, genre: 'Thriller' },
        { id: 37, genre: 'Western' }
      ];

    return (
        <div>
            <Header />
            <div className="middle-container">
                <Genre genreList={genres} />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MovieView;