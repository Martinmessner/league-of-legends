import GetSummonerName from './components/CenterFetchs/SummonerName';
import GetTimelineItems from './components/CenterFetchs/TimelineItemsSummoner';
import TimelinesSummoner from './components/TimelinesItemsSummoner/TimelinesIdItems';

function App() {
  return (
    <>
      <GetSummonerName />
      <GetTimelineItems />
      <TimelinesSummoner />
    </>
  );
}

export default App;
