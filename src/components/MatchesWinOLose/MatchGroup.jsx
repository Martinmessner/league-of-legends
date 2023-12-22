import { useState } from 'react';
import ImageChampionSummoner from '../helpers/ImageChampions';
import ImgItemsChampionsSummoners from '../helpers/ImageItemsChamps';
import TimelinesSummoner from '../TimelinesItemsSummoner/TimelinesIdItems';
import useSummonerStore from '../../store/Store';

function MatchGroup({
  participants,
  winGroup,
  quantityItems,
  expandedParticipants,
  onToggle,
}) {
  const [timelinesToogle, setTimelinesToogle] = useState(false);
  const [test, setTest] = useState([]);
  const { itemsPurchasedFiltered } = useSummonerStore();

  const ToogleTimeLines = (data) => {
    onToggle(data);
    setTimelinesToogle(!timelinesToogle);

    const testPrueba = itemsPurchasedFiltered.map((dataInfo) =>
      dataInfo.map((dataInfo) => dataInfo.map((data) => data))
    );

    const testRender = testPrueba.map((info) =>
      info
        .map((info) =>
          info
            .map((element) => {
              const { participantId, itemId, timestamp, type } = element;
              return { participantId, itemId, timestamp, type };
            })
            .filter((number) => number.participantId === data)
        )
        .filter((elements) => elements.length > 0)
    );

    setTest(testRender[0]);
  };

  return (
    <section>
      {participants.map((participant) => {
        const {
          puuid,
          champLevel,
          championName,
          summonerName,
          participantId,
          kills,
          assists,
          deaths,
          totalDamageTaken,
          totalDamageDealtToChampions,
          totalMinionsKilled,
          visionWardsBoughtInGame,
          wardsKilled,
          wardsPlaced,
        } = participant;

        return (
          <div
            className={`${
              winGroup === true ? 'victoria' : 'derrota'
            }  div-participants-info-1 `}
            key={puuid}
            onClick={() => onToggle(participantId)}
          >
            <ImageChampionSummoner imageChampion={championName} />
            <small className="champlevel-absolute">{champLevel}</small>
            <h4
              className={`${
                summonerName === summonerName.name
                  ? 'colorunico'
                  : 'no-selected-username'
              } participant-summonername`}
            >
              {summonerName}
              <div className="list-items">
                {quantityItems.map((itemIndex) => (
                  <ImgItemsChampionsSummoners
                    key={itemIndex}
                    idItem={participant[`item${itemIndex}`]}
                  />
                ))}
              </div>
              <button
                className="toogle-button"
                onClick={() => onToggle(participantId)}
              >
                {expandedParticipants.includes(participantId)
                  ? '🔼 Ocultar'
                  : '🔽 Mostrar Mas'}
              </button>
              <button onClick={() => ToogleTimeLines(participantId)}>
                Items :D
                {timelinesToogle === true ? <TimelinesSummoner /> : null}
              </button>
            </h4>
            <div className="info-aditional">
              <h4>
                KDA: {kills}/<span className="deaths-red">{deaths}</span>/
                {assists}
              </h4>
              {expandedParticipants.includes(participantId) && (
                <div className="info-aditional">
                  <h5>Daño Recibido: {totalDamageTaken}</h5>
                  <h5>Daño a Campeones: {totalDamageDealtToChampions}</h5>
                  <h5>Subditos: {totalMinionsKilled}</h5>
                  <h5>Pinks/Control Ward: {visionWardsBoughtInGame}</h5>
                  <h5>Wards Destroy: {wardsKilled}</h5>
                  <h5>Wards Puestas: {wardsPlaced}</h5>
                </div>
              )}

              {timelinesToogle && (
                <div className="image-timelines-items">
                  {test.length > 0
                    ? test.map((data) =>
                        data.map((element, index) => (
                          <section key={index}>
                            <ImgItemsChampionsSummoners
                              key={element.participantId}
                              idItem={element.itemId}
                            />
                            <p>{element.timestamp}</p>
                          </section>
                        ))
                      )
                    : null}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default MatchGroup;
