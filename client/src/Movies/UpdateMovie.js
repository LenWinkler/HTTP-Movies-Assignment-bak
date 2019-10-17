import React, { useState } from 'react';

const initialMovie = {
    title: '',
    director: '',
    metascore: 0,
    stars: []
}

const UpdateMovie = props => {
    const [movie, setMovie] = useState(initialMovie);

    return (
        <form>
            <input type="text" placeholder="title" />
            <input type="text" placeholder="director" />
            <input type="number" placeholder="metascore" />
            <input type="text" placeholder="stars" />
        </form>
    )
}

export default UpdateMovie;