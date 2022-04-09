import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from '../components/MovieInfo';
import styles from './Detail.module.css';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getMovie();
  });

  const backgroundStyle = {
    backgroundImage: `url(${movie.medium_cover_image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  }

  return (
    <div>{loading ? (
      <h1 className={styles.loader}>Loading . . .</h1>
    ) : (
      <div style={backgroundStyle}>
        <MovieInfo
          coverImg={movie.medium_cover_image}
          title={movie.title}
          year={movie.year}
          runtime={movie.runtime}
          summary={movie.description_intro}
          genres={movie.genres}
          download_count={movie.download_count}
          like_count={movie.like_count} />
      </div>
    )}
    </div>
  );
}

export default Detail;