import DetailsCounter from "./components/DetailsCounter";
import ExpertAnalysis from "./components/ExpertAnalysis";
import GrowthJourney from "./components/GrowthJourney";

function App() {
	return (
		<div className="bg-black overflow-hidden">
			<GrowthJourney />
			<ExpertAnalysis />
			<DetailsCounter />
		</div>
	);
}

export default App;
