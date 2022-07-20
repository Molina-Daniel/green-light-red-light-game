import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import styles from "./GameRules.module.css";

const GameRules = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Game Rules</h1>
      <p>The rules are very simple:</p>
      <div className={styles.rules}>
        <p>
          1. When the light is Green, press the Left Step and Right Step buttons{" "}
          <strong>alternatively</strong>. You gain 1 point for each step.
        </p>
        <p>
          2. If you press either the Left Step or Right Step button while the
          light is Red, you will lose all your current points.
        </p>
        <p>
          3. If you repeatedly press the same button (Left Step or Right Step),
          your score will be reduced to 1 point for each press until you hit 0.
        </p>
        <p>
          **Hint: The Red Light time is fixed and will not change. The Green
          Light time will change depending on the Score and some randomness ;)
        </p>
      </div>
      <Button onClick={() => navigate(-1)}>Understood!</Button>
    </>
  );
};

export default GameRules;
