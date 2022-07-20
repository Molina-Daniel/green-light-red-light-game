import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import styles from "./Home.module.css";
import logo from "../../../assets/images/logo.png";

const Home = () => {
  // states
  const [playerName, setPlayerName] = useState("");
  const [nameIsValid, setNameIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // react-router
  const navigate = useNavigate();

  // Manage the player name input
  const playerNameChangeHandler = (event) => {
    const inputValue = event.target.value.trim();

    setPlayerName(inputValue);
    setNameIsValid(inputValue.length > 2 ? true : false);
    setFormIsValid(inputValue.length > 2);
  };

  // Validate the player name input on blur
  const validatePlayerName = () => {
    setNameIsValid(playerName.trim().length > 2);
  };

  // Controls the events when players submit to join the game
  const submitHandler = (event) => {
    event.preventDefault();

    // if new player, create new player in local storage
    storePlayer(playerName);

    // navigate to the Game page
    navigate("/game", { state: { playerName } });
  };

  function storePlayer(name) {
    // try to fetch the player information from the local storage
    const player = JSON.parse(localStorage.getItem(name));

    // if the player name doesn't exist, create a new player
    if (!player) {
      const initialScore = 0;
      return localStorage.setItem(name, JSON.stringify(initialScore));
    }
  }

  return (
    <>
      <img className={styles.logo} src={logo} alt="Pollito Inglés" />
      <p className={styles.green}>Green Light</p>
      <p className={styles.red}>Red Light</p>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            nameIsValid === false ? styles.invalid : ""
          }`}
        >
          <label>Player Name</label>
          <input
            className={styles.input}
            type="text"
            id="playerName"
            value={playerName}
            onChange={playerNameChangeHandler}
            onBlur={validatePlayerName}
            minLength="3"
            placeholder="Minimum 3 characteres"
          />
        </div>

        <Button type="submit" disabled={!formIsValid}>
          Join
        </Button>
      </form>
      <Button type="button" onClick={() => navigate("/rules")}>
        Game Rules
      </Button>
    </>
  );
};

export default Home;
