import useSummonerStore from '../../store/Store';
import {
  getDateCreationGame,
  getMinutesDurationGame,
  getHourExactlyGame,
} from '../helpers/ConvertDateMatches';
import MatchGroup from '../MatchesWinOLose/MatchGroup';

function MatchesInfoSummoners() {
  const { historyMatchGames, summonerName, quantityItems } = useSummonerStore();

  return (
    <>
      {historyMatchGames.map((data) => {
        const { info } = data;
        const { teams } = info;

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
                {getDateCreationGame(gameCreation)},
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
            <section className="teamskills-section">
              {teams.map((data, indexTemporal) => {
                const { objectives } = data;

                return (
                  <section
                    className="section-images-teamskill"
                    key={indexTemporal}
                  >
                    <div className="image-baron">
                      <img
                        src="/kill.svg"
                        alt="Asesinatos"
                        title="Asesinatos"
                      ></img>
                      <p> {objectives.champion.kills}</p>
                    </div>
                    <div className="image-baron">
                      <img src="/baron.svg" alt="Baron" title="Baron"></img>
                      <p> {objectives.baron.kills}</p>
                    </div>
                    <div className="image-drake">
                      <img
                        src="/dragon.svg"
                        alt="Dragones"
                        title="Dragones"
                      ></img>
                      <p> {objectives.dragon.kills}</p>
                    </div>
                    <div className="image-drake">
                      <img src="/tower.svg" alt="Torres" title="Torres"></img>
                      <p> {objectives.tower.kills}</p>
                    </div>
                  </section>
                );
              })}
            </section>
            <section key={info.gameId} className="section-participants-info">
              <MatchGroup
                participants={firstGroup}
                winGroup={winFirstGroup}
                summonerName={summonerName}
                quantityItems={quantityItems}
              />

              <MatchGroup
                participants={secondGroup}
                winGroup={winSecondGroup}
                summonerName={summonerName}
                quantityItems={quantityItems}
              />
            </section>
          </section>
        );
      })}
    </>
  );
}

export default MatchesInfoSummoners;
