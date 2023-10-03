import useSummonerStore from '../../store/Store';
import {
  getDateCreationGame,
  getMinutesDurationGame,
  getHourExactlyGame,
} from '../helpers/ConvertDateMatches';
import MatchGroup from '../MatchesWinOLose/MatchGroup';

function MatchesInfoSummoners() {
  const { historyMatchGames, summonerName, quantityItems } = useSummonerStore();

  console.log(historyMatchGames);

  return (
    <>
      {historyMatchGames.map((data) => {
        const { info } = data;
        console.log(info);
        const { gameCreation, gameVersion, gameDuration, gameEndTimestamp } =
          info;

        const participants = info.participants;

        const firstGroup = participants.slice(0, 5);
        const secondGroup = participants.slice(5, 10);
        const winFirstGroup = firstGroup[0].win;
        const winSecondGroup = secondGroup[0].win;

        return (
          <section key={info.gameId}>
            <section className="header-info-data-game">
              <h2>
                {getDateCreationGame(gameCreation)},{' '}
                {getHourExactlyGame(gameEndTimestamp)}.
              </h2>
              <h2>Duracion: {getMinutesDurationGame(gameDuration)} Minutos.</h2>

              <h2>Version: {gameVersion.slice(0, 5)}.</h2>
            </section>
            <div className="div-win-o-lose">
              <h3
                className={winFirstGroup === true ? 'win-color' : 'lose-color'}
              >
                {winFirstGroup === true ? 'VICTORIA' : 'DERROTA'}
              </h3>
              <h3
                className={winSecondGroup === true ? 'win-color' : 'lose-color'}
              >
                {winSecondGroup === false ? 'DERROTA' : 'VICTORIA'}
              </h3>
            </div>
            <section key={info.gameId} className="section-participants-info">
              <MatchGroup
                participants={firstGroup}
                winGroup={winFirstGroup}
                summonerName={summonerName}
                quantityItems={quantityItems}
              />
              <div className="test2">
                <MatchGroup
                  participants={secondGroup}
                  winGroup={winSecondGroup}
                  summonerName={summonerName}
                  quantityItems={quantityItems}
                />
              </div>
            </section>
          </section>
        );
      })}
    </>
  );
}

export default MatchesInfoSummoners;
