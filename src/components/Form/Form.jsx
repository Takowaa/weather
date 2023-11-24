import styles from './Form.module.css'
import PropTypes from "prop-types";
import {useState} from "react";

const Form = ({getData}) => {
  const [value, setValue] = useState('')
  const handleSearch = () => {
    getData(value)
    setValue('')
  }
  return (
    <div className={styles.container}>
        <input
          onChange={(e)=>{
            setValue(e.target.value)
          }}
          value={value}
          type="text"
          name="city"
          aria-label="location"
          className={styles.inputBox}
          placeholder="Search for Country"
          required
        />
  <button onClick={handleSearch}  type="submit">SEARCH</button>
    </div>
  );
};

export default Form;

Form.propTypes = {
    getData: PropTypes.object
}