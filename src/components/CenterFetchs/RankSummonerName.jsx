import { useState, useEffect } from 'react';
import useSummonerStore from '../../store/Store';
import RankingAndPointsDivisionUser from '../RankAndWinRateUser/RenderRankingAndLpUser';
import { TimeLoading } from '../helpers/LoadingRender';

const API_KEY_VITE = import.meta.env.VITE_API_KEY;

function GetRankTierSummonerName() {
  const {
    historyMatchGames,
    summonerName,
    rankSummonerId,
    SetrankSummonerId,
    SetgetUserRankAndLP,
    Seterror,
    selectedRegion,
  } = useSummonerStore();

  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  const fetchAllData = async () => {
    try {
      const responseRank = await fetch(
        `https://${selectedRegion}.api.riotgames.com/lol/league/v4/entries/by-summoner/${rankSummonerId}?api_key=${API_KEY_VITE}`
      );
      const data = await responseRank.json();
      SetgetUserRankAndLP(data);
      setLoading(false);
      setIsSearching(false);
    } catch (error) {
      Seterror('Error en el Servidor');
      setIsSearching(false);
    }
  };

  useEffect(() => {
    const newRankSummonerId = historyMatchGames
      .flatMap((data) => data.info.participants)
      .find((data2) => data2.summonerName === summonerName.name)?.summonerId;

    if (newRankSummonerId) {
      SetrankSummonerId(newRankSummonerId);
      setIsSearching(true); // Marcamos que se está realizando una búsqueda
    }
  }, [summonerName.name, historyMatchGames, SetrankSummonerId, setIsSearching]);

  useEffect(() => {
    if (rankSummonerId.length > 0 && isSearching) {
      // Verificamos si se está realizando una búsqueda y esperamos 1 segundo antes de realizar la solicitud.
      const timeout = setTimeout(() => {
        fetchAllData();
      }, 1000);

      return () => clearTimeout(timeout); // Limpiamos el temporizador si el componente se desmonta
    }
  }, [rankSummonerId, isSearching]);

  return (
    <>
      {loading ? (
        <div className="center-time-ranks">
          <TimeLoading />
        </div>
      ) : (
        <RankingAndPointsDivisionUser />
      )}
    </>
  );
}

export default GetRankTierSummonerName;
