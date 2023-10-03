import { create } from 'zustand';

const useSummonerStore = create((set) => ({
  pagination: 4,
  // items de cada jugador
  quantityItems: [0, 1, 2, 3, 4, 5, 6],
  currentPage: 1,
  summonerName: [],
  puuidSummonerName: [],
  historyMatchGames: [],
  valueSummoner: '',
  rankSummonerId: '',
  getUserRankAndLP: {},
  error: '',
  disabled: false,
  loading: false,
  // Regiones Del Mundo Todas
  regionWorld: [
    {
      Brasil: 'br1',
    },
    {
      LAS: 'la2',
    },
    {
      LAN: 'la1',
    },
    {
      NorthAmerica: 'na1',
    },
    {
      Japon: 'jp1',
    },
    {
      Korea: 'kr',
    },
    {
      EuropaOeste: 'eun1',
    },
    {
      EuropaWest: 'euw1',
    },
    {
      Turkey: 'tr1',
    },
    {
      Russia: 'ru',
    },
    {
      Vietnam: 'vn2',
    },
    {
      Oceania: 'oc1',
    },
    {
      Philippines: 'ph2',
    },
    {
      Singapore: 'sg2',
    },
    {
      Thailand: 'th2',
    },
    {
      Taiwan: 'tw2',
    },
  ],
  selectedRegion: '',
  // Continentes para las API - americas - sea - europe - asia
  regionsContinents: {
    americas: 'Brasil, LAS, LAN, NorthAmerica',
    sea: 'Oceania, Taiwan, Singapore, Philippines, Thailand',
    europe: 'Turkey, Vietnam, Russia, EuropaOeste, EuropaWest',
    asia: 'Japon, Korea',
  },
  modifyContinentSelected: '',
  setmodifyContinentSelected: (modifyContinent) =>
    set({ modifyContinentSelected: modifyContinent }),
  setselectedRegionWorld: (selected) => set({ selectedRegion: selected }),
  toggleDisabled: () => set((state) => ({ disabled: !state.disabled })),
  setCurrentPage: (pages) => set({ currentPage: pages }),
  setHistoryMatchGames: (matches) => set({ historyMatchGames: matches }),
  setSummonerName: (data) => set({ summonerName: data }),
  setPuuidSummonerName: (data) => set({ puuidSummonerName: data }),
  SetvalueSummoner: (value) => set({ valueSummoner: value }),
  SetrankSummonerId: (value) => set({ rankSummonerId: value }),
  SetgetUserRankAndLP: (value) => set({ getUserRankAndLP: value }),
  Seterror: (errorMsg) => set({ error: errorMsg }),
  Setloading: (isLoading) => set({ loading: isLoading }),
}));

export default useSummonerStore;
