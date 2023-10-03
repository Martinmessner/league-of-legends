import { useEffect } from 'react';

const API_KEY_VITE = import.meta.env.VITE_API_KEY;

const CATEGORY_RANKED = 'RANKED_SOLO_5x5';

const RANGE_SUMMONER = 'BRONZE';

const RANGE_SUMMONER_NUMBER = 'IV';

export default function TestSecondApi() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://la2.api.riotgames.com/lol/league/v4/entries/${CATEGORY_RANKED}/${RANGE_SUMMONER}/${RANGE_SUMMONER_NUMBER}?api_key=${API_KEY_VITE}`
        );

        const data = await response.json();
        console.log('SEGUNDA API:', data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <p>TestApi..</p>;
}

/*

import { leagueExp_v4 } from '../React-Query/InfoRangeLeagues';

 // freshBlood, hotStreak, inactive, leagueId, leaguePoints, losses, queueType, rank, summonerId, summonerName, tier, veteran, wins

 const { isLoading, error, data } = useQuery({
    queryKey: ['data'],
    queryFn: leagueExp_v4,
  });

  if (isLoading) return 'Loading...';
  console.log(teamsQuery.data);
  return (
    <div>
      1er Api.
      {data ? (
        data.map((info) => {
          return (
            <div key={info.summonerId}>
              <p>{info.queueType}</p>
              <p>{info.summonerName}</p>
              <p>Wins:{info.wins}</p>
              <p>Losses: {info.losses}</p>
              <p>{info.rank}</p>
              <p>{info.tier}</p>
            </div>
          );
        })
      ) : (
        <>
          <p>{error}</p>
        </>
      )}





*/
