import { RankImagesInfo } from '../helpers/InfoDataImageRank';

function ImagesRankingAndTier({ tier }) {
  const matchingRank = RankImagesInfo.find((ranks) => ranks.rank === tier);

  if (matchingRank) {
    const { rank, url } = matchingRank;
    return (
      <div key={rank}>
        <img
          className="test-image"
          alt={rank}
          title={rank[0] + rank.slice(1).toLowerCase()}
          src={url}
        ></img>
      </div>
    );
  } else {
    return null;
  }
}

export default ImagesRankingAndTier;
