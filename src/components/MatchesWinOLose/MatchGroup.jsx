import { useState } from 'react';
import ImageChampionSummoner from '../helpers/ImageChampions';
import ImgItemsChampionsSummoners from '../helpers/ImageItemsChamps';

function MatchGroup({ participants, winGroup, summonerName, quantityItems }) {
  const [toggle, Settoogle] = useState(false);

  const ActivateToogle = () => {
    Settoogle(!toggle);
  };

  return (
    <section>
      {participants.map((participant) => (
        <div
          className={`${
            winGroup === true ? 'victoria' : 'derrota'
          }  div-participants-info-1`}
          key={participant.puuid}
        >
          <ImageChampionSummoner imageChampion={participant.championName} />
          <small className="champlevel-absolute">
            {participant.champLevel}
          </small>
          <h4
            className={`${
              participant.summonerName === summonerName.name
                ? 'colorunico'
                : 'no-selected-username'
            } participant-summonername`}
          >
            {participant.summonerName}
            <div className="list-items">
              {quantityItems.map((itemIndex) => (
                <ImgItemsChampionsSummoners
                  key={itemIndex}
                  idItem={participant[`item${itemIndex}`]}
                />
              ))}
            </div>
            <button className="toogle-button" onClick={ActivateToogle}>
              {toggle === false ? '🔽 Mostrar Mas' : '🔼 Ocultar'}
            </button>
          </h4>
          <div className="info-aditional">
            <h4>
              KDA: {participant.kills}/
              <span className="deaths-red">{participant.deaths}</span>/
              {participant.assists}
            </h4>
            {toggle && (
              <div className="info-aditional">
                <h5>Daño Recibido: {participant.totalDamageTaken}</h5>
                <h5>
                  Daño a Campeones: {participant.totalDamageDealtToChampions}
                </h5>
                <h5>Subditos: {participant.totalMinionsKilled}</h5>
                <h5>
                  Pinks/Control Ward: {participant.visionWardsBoughtInGame}
                </h5>
                <h5>Wards Destroy: {participant.wardsKilled}</h5>
                <h5>Wads Puestas: {participant.wardsPlaced}</h5>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default MatchGroup;
