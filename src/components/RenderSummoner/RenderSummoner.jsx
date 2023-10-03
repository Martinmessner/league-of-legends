import useSummonerStore from '../../store/Store';
import GetMatchesPuuid from '../CenterFetchs/MatchesPuuid';
import GetRankTierSummonerName from '../CenterFetchs/RankSummonerName';
import ProfileIcon from '../helpers/ProfileIconSummoner';

function RenderSummonerName() {
  const { summonerName } = useSummonerStore();

  const isEmptyObject = Object.keys(summonerName).length === 0;

  return (
    <>
      {isEmptyObject ? null : (
        <section className="summonername-main">
          <div className="summonername-div">
            <ProfileIcon iconId={summonerName.profileIconId} />
            <p>{summonerName.name}</p>
            <p>Nivel {summonerName.summonerLevel}</p>
          </div>
          <GetRankTierSummonerName />
          <GetMatchesPuuid />
        </section>
      )}
    </>
  );
}

export default RenderSummonerName;

// <div class="loader"></div>
