import { useEffect, useState } from "react";
import useSummonerStore from "../../store/Store";
import MatchesInfoSummoners from "../MatchesInfo/RenderMatchesInfo";
import { TimeLoading } from "../helpers/LoadingRender";

const API_KEY_VITE = import.meta.env.VITE_API_KEY;

function GetPuuidSummoner() {
  const {
    summonerName,
    setPuuidSummonerName,
    pagination,
    puuidSummonerName,
    setCurrentPage,
    currentPage,
    modifyContinentSelected,
  } = useSummonerStore();

  const { puuid } = summonerName;
  const [loading, setLoading] = useState(false);

  async function fetchMatchesForPage(page) {
    try {
      setLoading(true);
      const startIndex = (page - 1) * pagination;
      const response = await fetch(
        `https://${modifyContinentSelected}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${startIndex}&count=${pagination}&api_key=${API_KEY_VITE}`
      );

      const puuidName = await response.json();
      setPuuidSummonerName(puuidName);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (puuid) {
      fetchMatchesForPage(currentPage);
    }
  }, [puuid, pagination, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      {loading ? (
        <div className="center-time-matches">
          <TimeLoading />
        </div>
      ) : (
        <>
          {puuidSummonerName.length > 0 ? (
            <div className="next-back-pages">
              <button
                className="arrow-button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              <p className="actual-page">Pagina Actual: {currentPage}</p>
              <button
                className="arrow-button"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                &gt;
              </button>
            </div>
          ) : null}
          <MatchesInfoSummoners />
        </>
      )}
    </>
  );
}

export default GetPuuidSummoner;
