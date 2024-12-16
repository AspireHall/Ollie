import gameData from "./web3Games.json";
import classes from "./Web3Games.module.css";
const Web3Games = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleContainer}>Blockchain Games (Web3Games)</div>
      <div className={classes.subContainer}>
        {gameData.map((data) => (
          <a href={data.url} target="_blank" rel="noreferrer">
            <div className={classes.card}>
              <img
                className={classes.gameLogo}
                src={data.logo}
                alt={data.name}
              />
              <di className={classes.cardTitle}>{data.name}</di>
            </div>
          </a>
        ))}
      </div>
      <div className={classes.note}>More being added regularly</div>
    </div>
  );
};

export default Web3Games;
