import useSummonerStore from '../../store/Store';

function RenderTimelinesItems() {
  const { itemsPurchasedFiltered } = useSummonerStore();

  const primerGrupoTimeline = itemsPurchasedFiltered.map((elements) =>
    elements.map((element) =>
      element.filter((element) => element.participantId <= 5)
    )
  );
  console.log(primerGrupoTimeline);

  const segundoGrupoTimeline = itemsPurchasedFiltered.map((elements) =>
    elements.map((element) =>
      element.filter((element) => element.participantId >= 6)
    )
  );
  console.log(segundoGrupoTimeline);
}

export default RenderTimelinesItems;
