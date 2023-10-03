const ImageChampionSummoner = ({ imageChampion }) => {
  if (!imageChampion) {
    return;
  }
  const imgChampion = `https://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/${imageChampion}.png`;

  return (
    <img
      className="champion-icon"
      src={imgChampion}
      alt={imageChampion}
      title={imageChampion}
    />
  );
};

export default ImageChampionSummoner;
