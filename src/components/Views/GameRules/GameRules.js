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
        {/* &nbsp; &#8226;{" "} */}
        <p>
          1. When the light is Green, press the Left Step and Right Step buttons{" "}
          <strong>alternatively</strong>. You gain 1 point for each step.
        </p>
        <p>
          2. If you press either Left Step or Right Step button while the light
          is Red, you will lost all you current points.
        </p>
        <p>
          3. If you press the same button (Left Step or Right Step) repeatedly,
          you Score will be reduced in 1 point for each press.
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
