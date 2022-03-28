import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

// App.js에서 Button을 가져오고 싶으니까.
export default Button;