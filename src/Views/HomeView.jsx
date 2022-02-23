// import { useState, useEffect } from 'react'
// import { Link, useLocation } from 'react-router-dom';
// import * as getSearchApi from '../data/GetSearchApi'


// export default function HomePage() {
//    const location = useLocation();
//    const [movieList, setMovieList] = useState([]);

// useEffect(() => {
//    getSearchApi.getPopularMovies().then((setMovieList));
// },[]);

//    return(
//           <ul>
//          {movieList.map(movie => (
//             <li key={movie.id} style={{margin: "10px", fontSize:"15px"}}>
//                <Link to={{
//                   pathname: `movies/${movie.id}`,
//                   state: { from: location},
//                }}>
//                {movie.original_title}</Link>  
//             </li>
//          ))}
//       </ul>
//    )
// }