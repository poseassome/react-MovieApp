import PropTypes from "prop-types";
import styles from "./MovieInfo.module.css";

function MovieInfo({ coverImg, title, summary, genres, year, runtime, download_count, like_count }) {
  return (
    <div style={{ backdropFilter: "blur(10px)", height: "100%", position: "relative" }}>
      <div className={styles.background}>
        <img src={coverImg} alt={title} className={styles.img} />
        <div className={styles.desc}>
          <h2 className={styles.movieName}>{title} ({year})</h2>
          <ul className={styles.genresWrap}>
            {genres.map((g) => (
              <li key={g} className={styles.genres}>{g}</li>
            ))}
          </ul>
          <p className={styles.runtime}>{runtime} min</p>
          <p className={styles.summary}>{summary}</p>
          <p className={styles.like}>★ Download : {download_count}  | ♥︎ Like : {like_count}</p>
        </div>
      </div>
    </div>
  )
}

MovieInfo.propTypes = {
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  download_count: PropTypes.string.isRequired,
  like_count: PropTypes.string.isRequired
}

export default MovieInfo