import PropTypes from "prop-types";

function MovieInfo({ coverImg, title, summary, genres, year, runtime, download_count, like_count }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title} ({year})</h2>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>{runtime} min</p>
      <p>{summary}</p>
      <p>{download_count} {like_count}</p>
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