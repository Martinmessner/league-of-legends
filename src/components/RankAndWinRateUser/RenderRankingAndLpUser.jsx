import useSummonerStore from '../../store/Store';
import ImagesRankingAndTier from '../RankImages/RenderRankImages';
import CalculateWinRateUser from '../helpers/CalculateWinRate';
import { TypeQueueRanked } from '../helpers/TypesQueueRanked';

function RankingAndPointsDivisionUser() {
  const { getUserRankAndLP } = useSummonerStore();

  return (
    <section className="contenedor-ranks">
      {getUserRankAndLP.length > 0 && (
        <>
          {getUserRankAndLP
            .filter((test) => test.queueType !== 'CHERRY')
            .map((RankUser) => {
              const {
                freshBlood,
                hotStreak,
                inactive,
                leaguePoints,
                losses,
                queueType,
                wins,
                rank,
                tier,
                leagueId,
              } = RankUser;

              const win_rate = CalculateWinRateUser(wins, losses);
              const totalGames = wins + losses;
              return (
                <article className="contenedor-ranks-article" key={leagueId}>
                  <p>{TypeQueueRanked[queueType]}</p>
                  <p>{freshBlood}</p>
                  <p>{hotStreak}</p>
                  <p>{inactive}</p>
                  <div className="imagerank-lp-rank">
                    <ImagesRankingAndTier tier={tier} />
                    <small>Rank: {rank}</small>
                    <small>LP: {leaguePoints}</small>
                  </div>
                  <div className="small-wins-losses-wr">
                    <small>Partidas Totales: {totalGames}</small>
                    <small>Wins: {wins}</small>
                    <small>Losses: {losses}</small>
                    <small>Win rate: {win_rate}%</small>
                  </div>
                </article>
              );
            })}
        </>
      )}

      {getUserRankAndLP.length === 0 && <p>Este usuario es Unranked.</p>}
    </section>
  );
}

export default RankingAndPointsDivisionUser;
