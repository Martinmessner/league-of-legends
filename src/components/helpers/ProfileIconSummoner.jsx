import useSummonerStore from '../../store/Store';

const ProfileIcon = ({ iconId }) => {
  const { summonerName } = useSummonerStore();

  if (!iconId) {
    return;
  }

  const iconUrl = `https://ddragon.leagueoflegends.com/cdn/13.15.1/img/profileicon/${iconId}.png`;

  return (
    <img
      className="profile-icon"
      src={iconUrl}
      alt="Icono de perfil"
      title={summonerName ? summonerName.name : null}
    />
  );
};

export default ProfileIcon;
