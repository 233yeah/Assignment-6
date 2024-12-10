import "./HomeView.css";
import HeroImage from "../assets/image/heroSection.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

function HomeView() {
    const [image, setImage] = useState([]);

    useEffect(() => {
        (async function getImages() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
            );
            setImage(response.data.results);
            console.log(image);

        })()
    }, [])
    return (
        <div>
            <div className="top-bar">
                <h className="logo">WacFlix</h>
                <div className="buttons">
                    <button>Sign Up</button>
                    <button>Sign In</button>
                </div>
            </div>

            <div class="hero">
                <img className="hero-image" src={HeroImage} />
                <div class="hero-text"> <label>Free Movies at Your Fingertips</label></div>
            </div>

            <div className="feature">

                <p2>Movies for rent($2.99 a month)</p2>
                <div className="feature-flex">
                  
                    <img
                        className="movie-poster"
                        src={`https://image.tmdb.org/t/p/w500${response.data.results[0].poster_path}`}
                    /> 
                </div>
            </div>


            <div className="tb-item bottom-item">
                <div className="bottom-text">
                    <p>Contact - 123-456-7890</p>
                    <p>Email - WacFlix@gmail.com</p>
                    <p>Instagram - WacFlix CA</p>
                </div>
            </div>
        </div>

    )
}

export default HomeView;