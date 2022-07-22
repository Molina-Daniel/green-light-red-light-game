import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import styles from "./Game.module.css";

import useSound from "use-sound";
import music from "../../../assets/sounds/music.mp3";

const Game = () => {
  // states
  const [gameStarted, setGameStarted] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [redLight, setRedLight] = useState(true);
  const [lastFootClicked, setLastFootClicked] = useState("");
  // sound states
  const [playbackRate, setPlaybackRate] = useState(0.75);
  const [play, { stop }] = useSound(music, {
    playbackRate,
    interrupt: true,
  });

  // react-router
  const location = useLocation();
  const navigate = useNavigate();
  const { playerName } = location.state || "";

  // Set the player's high score, only runs once
  useEffect(() => {
    const playerStoredScore = JSON.parse(localStorage.getItem(playerName));
    setHighScore(playerStoredScore);
  }, []);

  // Gets number between min (inclusive) and max (inclusive)
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Determines the green light duration (in milliseconds)
  function greenLightCalc(score) {
    return (
      Math.max(10000 - score * 100, 2000) + randomNumberInRange(-1500, 1500)
    );
  }

  // Controls the green light red light game flow
  useEffect(() => {
    const greenLightDuration = greenLightCalc(currentScore);
    const redLightDuration = 3000;

    if (gameStarted && redLight === true) {
      setTimeout(() => {
        setRedLight(false);
      }, redLightDuration);
    } else if (redLight === false) {
      setTimeout(() => {
        setRedLight(true);
      }, greenLightDuration);
    }
  }, [gameStarted, redLight]);

  // Manage the sound speed multiplier
  function playbackRateCalc(score) {
    return Math.floor(score / 10) / 10;
  }

  // Controls the sound while playing
  useEffect(() => {
    const speedMultiplier = playbackRateCalc(currentScore);

    if (redLight) {
      stop();
      setPlaybackRate(0.75);
    } else {
      setPlaybackRate(playbackRate + speedMultiplier);
      play();
    }
  }, [redLight]);

  // Manage the scoring logic when pressing the foot buttons
  const stepsHandler = (foot) => {
    setLastFootClicked(foot);

    if (!redLight) {
      switch (lastFootClicked !== foot) {
        case true:
          setCurrentScore(currentScore + 1);
          break;
        case false:
          if (currentScore > 0) {
            setCurrentScore(currentScore - 1);
          }
          break;
        default:
          break;
      }
    } else {
      setCurrentScore(0);
    }
  };

  // Updates the high score when new record
  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
      updateStoredPlayerScore(currentScore);
    }
  }, [currentScore]);

  // Updates player's high score in local storage
  function updateStoredPlayerScore(score) {
    return localStorage.setItem(playerName, JSON.stringify(score));
  }

  return (
    <>
      <h1>Let's Play</h1>
      <p className={styles.p}>Player Name: {playerName}</p>
      <p className={styles.p}>Highest Score: {highScore}</p>
      <div>
        <span
          className={`${styles.dot} ${
            redLight === true ? styles.red : styles.green
          }`}
        ></span>
      </div>
      <p className={styles.p}>Score: {currentScore}</p>
      {!gameStarted && (
        <Button onClick={() => setGameStarted(true)}>Start</Button>
      )}
      {gameStarted && (
        <>
          <Button onClick={() => stepsHandler("left")}>Left Step</Button>{" "}
          <Button onClick={() => stepsHandler("right")}>Right Step</Button>
        </>
      )}
      <Button className={styles.btn} onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </>
  );
};

export default Game;
