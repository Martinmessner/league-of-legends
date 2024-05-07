import useSummonerStore from "../../store/Store";
import { useEffect } from "react";

const API_KEY_VITE = import.meta.env.VITE_API_KEY;

function GetMatchesPuuid() {
  const {
    puuidSummonerName,
    setHistoryMatchGames,
    Seterror,
    modifyContinentSelected,
  } = useSummonerStore();

  useEffect(() => {
    async function fetchAllData() {
      const matchesDataArray = [];

      for (const matchesId of puuidSummonerName) {
        try {
          const url = await fetch(
            `https://${modifyContinentSelected}.api.riotgames.com/lol/match/v5/matches/${matchesId}?api_key=${API_KEY_VITE}`,
            { mode: "no-cors" }
          );
          const data = await url.json();
          matchesDataArray.push(data);
        } catch (error) {
          Seterror("No Tiene Partidas Disponibles.");
        }
      }
      setHistoryMatchGames(matchesDataArray);
    }

    fetchAllData();
  }, [puuidSummonerName]);
}

export default GetMatchesPuuid;
