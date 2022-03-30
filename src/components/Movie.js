import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from './Movie.module.css';

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.img} />
      <div className={styles.desc}>
        <h2 className={styles.mName}><Link to={`/movie/${id}`} className={styles.movieName}>{title}</Link></h2>
        <ul className={styles.genresWrap}>
          {genres.map((g) => (
            <li key={g} className={styles.genres}>{g}</li>
          ))}
        </ul>
        <p className={styles.summary}>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      </div>
    </div>
  )
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;