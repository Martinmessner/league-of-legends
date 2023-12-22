import { useEffect } from 'react';
import useSummonerStore from '../../store/Store';

function TimelinesSummoner() {
  const { TimelineItemId, setItemsPurchasedFiltered } = useSummonerStore();

  useEffect(() => {
    const itemPurchased = TimelineItemId.map((data) =>
      data.info.frames
        .map((data) =>
          data.events
            .map((data) => {
              const { participantId, timestamp, type, itemId } = data;
              return { participantId, timestamp, type, itemId };
            })
            .filter((dataType) => {
              return dataType.type === 'ITEM_PURCHASED';
            })
        )
        .filter((elements) => elements.length > 0)
    );

    setItemsPurchasedFiltered(itemPurchased);
  }, [TimelineItemId, setItemsPurchasedFiltered]);
}

export default TimelinesSummoner;
