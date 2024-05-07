import { useEffect } from "react";
import useSummonerStore from "../../store/Store";

const API_KEY_VITE = import.meta.env.VITE_API_KEY;

function GetTimelineItems() {
  const {
    puuidSummonerName,
    setTimelineItemId,
    modifyContinentSelected, // americas, sea, europe, etc
    // selectedRegion, //  la1, br1, etc
  } = useSummonerStore();

  useEffect(() => {
    async function TimelineItems() {
      const matchesIdTimelines = [];
      for (let puuidTimelines of puuidSummonerName) {
        try {
          const responseTimelines = await fetch(
            `https://${modifyContinentSelected}.api.riotgames.com/lol/match/v5/matches/${puuidTimelines}/timeline?api_key=${API_KEY_VITE}`,
            { mode: "no-cors" }
          );
          const respData = await responseTimelines.json();
          matchesIdTimelines.push(respData);
        } catch (error) {
          console.log(error);
        }
      }
      setTimelineItemId(matchesIdTimelines);
    }
    TimelineItems();
  }, [puuidSummonerName, setTimelineItemId, modifyContinentSelected]);
}

export default GetTimelineItems;
