import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const initialMovie = {
    title: '',
    director: '',
    metascore: 0,
    stars: []
}

const UpdateMovie = props => {
    
    const [movie, setMovie] = useState(initialMovie);
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [metascore, setMetaScore] = useState('');
    const [stars, setStars] = useState([]);

    const titleHandler = e => {
        setTitle(e.target.value)
    };

    const directorHandler = e => {
        setDirector(e.target.value)
    };

    const metaHandler = e => {
        setMetaScore(e.target.value)
    };

    const starsHandler = e => {
        setStars(e.target.value)
    };

    console.log(movie)

    useEffect(() => {
        Axios
        .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
        .then(res => {
            setMovie(res.data)
            let updatedMovie = {
                id: res.data.id,
                title: res.data.title,
                director: res.data.director,
                metascore: res.data.metascore,
                stars: res.data.stars
            }
    })
        .catch(err => console.log('update get error', err.response))
    }, [])

    return (
        <div className="123">
            <form>
                <input type="text" value={`${movie.title}`} />
                <input type="text" value={`${movie.director}`} />
                <input type="number" value={`${movie.metascore}`} />
                <input type="text" value={`${movie.stars}`} />
                <button>Submit Changes</button>
            </form>
        </div>
    )
}

export default UpdateMovie;