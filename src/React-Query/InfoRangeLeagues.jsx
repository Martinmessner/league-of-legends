const API_KEY_VITE = import.meta.env.VITE_API_KEY;

const CATEGORY_RANKED = 'RANKED_SOLO_5x5';

const RANGE_SUMMONER = 'BRONZE';

const RANGE_SUMMONER_NUMBER = 'IV';

export async function leagueExp_v4() {
  const response = await fetch(
    `https://la2.api.riotgames.com/lol/league-exp/v4/entries/${CATEGORY_RANKED}/${RANGE_SUMMONER}/${RANGE_SUMMONER_NUMBER}?api_key=${API_KEY_VITE}`
  );
  const res = await response.json();

  return res;
}
