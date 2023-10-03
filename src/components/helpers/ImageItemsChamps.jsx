const ImgItemsChampionsSummoners = ({ idItem }) => {
  if (!idItem) {
    return;
  }
  const itemChampion = `https://ddragon.leagueoflegends.com/cdn/13.15.1/img/item/${idItem}.png`;

  return (
    <img
      className="item-champion"
      src={itemChampion}
      alt="item"
      title={idItem}
    />
  );
};

export default ImgItemsChampionsSummoners;
