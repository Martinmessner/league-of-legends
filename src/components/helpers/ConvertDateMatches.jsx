export const getDateCreationGame = (game) => {
  const gameCreationDate = new Date(game);

  const options = { year: 'numeric', month: 'numeric', day: 'numeric' }; // long o numeric
  const formattedGameCreationDate = gameCreationDate.toLocaleDateString(
    'es-ES',
    options
  );
  return formattedGameCreationDate;
};

export const getMinutesDurationGame = (game) => {
  const gameDuration = new Date(game);
  const duracionPartidaMinutos = gameDuration / 60;

  return duracionPartidaMinutos.toFixed();
};

export const getHourExactlyGame = (game) => {
  const gameEndDate = new Date(game);
  const optionsHorario = { hour: 'numeric', minute: 'numeric' };
  const formattedGameEndDate = gameEndDate.toLocaleTimeString(
    'es-ES',
    optionsHorario
  );

  return formattedGameEndDate;
};

export const getTimeStampsGame = (timestamps) => {
  const minutos = [];

  for (let i = 0; i < timestamps.length; i++) {
    const milisegundos = timestamps[i];
    const minutosItem = Math.floor(milisegundos / (1000 * 60));

    minutos.push(minutosItem);
  }

  return minutos;
};
