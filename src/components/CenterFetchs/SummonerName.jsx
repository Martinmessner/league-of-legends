import useSummonerStore from '../../store/Store';
import GetPuuidSummoner from './PuuidSummoner';
import RenderSummonerName from '../RenderSummoner/RenderSummoner';
import ErrorMessagesAlert from '../helpers/ErrorMessages';
import { LoadingOn } from '../helpers/LoadingRender';

const API_KEY_VITE = import.meta.env.VITE_API_KEY;

function GetSummonerName() {
  const {
    summonerName,
    setSummonerName,
    valueSummoner,
    SetvalueSummoner,
    error,
    Seterror,
    disabled,
    toggleDisabled,
    Setloading,
    loading,
    regionWorld,
    setselectedRegionWorld,
    selectedRegion,
    regionsContinents,
    setmodifyContinentSelected,
  } = useSummonerStore();

  console.log(selectedRegion);

  const fetchSummonerName = async () => {
    Setloading(true);
    toggleDisabled();
    try {
      const response = await fetch(
        `https://${selectedRegion}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${valueSummoner}?api_key=${API_KEY_VITE}`
      );

      const data = await response.json();
      setSummonerName(data);
    } catch (err) {
      Seterror('Error al obtener los datos del invocador.');
      setSummonerName('');
    } finally {
      toggleDisabled();
      Setloading(false);
    }
  };

  const handleChange = (e) => {
    SetvalueSummoner(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (valueSummoner.trim() === '') {
      Seterror('No has ingresado nada, intentalo nuevamente.');
    } else {
      fetchSummonerName();
      SetvalueSummoner('');
      Seterror('');
    }
  };

  const handleChangeRegion = (e) => {
    const selectedRegion1 = e.target.value;

    for (let tomate of regionWorld) {
      const keys = Object.keys(tomate);
      const value = Object.values(tomate);

      if (keys.includes(selectedRegion1)) {
        const valueToString = value.toString();
        console.log(`La región "${selectedRegion1}": ${value}.`);
        setselectedRegionWorld(valueToString);
      }
    }
    console.log(regionsContinents);
    const searchUniqueRegion = Object.entries(regionsContinents);
    searchUniqueRegion.some((data) => {
      const [key, value] = data;
      const countries = value.split(', ');
      if (countries.includes(selectedRegion1)) {
        setmodifyContinentSelected(key);
      }
    });
  };

  return (
    <>
      <header className="header">
        <div>
          <h1 className="nick-principal">Busca tu Nombre de Invocador de </h1>
          <img src="/lol.svg" alt="lol" width="40px"></img>
        </div>
        <form onSubmit={handleSubmit}>
          {regionWorld ? (
            <select onChange={handleChangeRegion}>
              <option value="">Selecciona una región.</option>
              {regionWorld.map((region) => {
                const regionKey = Object.keys(region);
                return (
                  <option key={regionKey} value={regionKey}>
                    {regionKey}
                  </option>
                );
              })}
            </select>
          ) : null}
          <input
            onChange={handleChange}
            type="text"
            placeholder="Invocador..."
            value={valueSummoner}
          ></input>
          <button disabled={disabled}>Buscar</button>
        </form>
      </header>

      <ErrorMessagesAlert error={error} />

      {loading ? (
        <LoadingOn />
      ) : (
        <>
          <RenderSummonerName />
          {summonerName ? <GetPuuidSummoner /> : null}
        </>
      )}
    </>
  );
}

export default GetSummonerName;
