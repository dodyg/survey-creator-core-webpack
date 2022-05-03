import './App.css';
import "survey-core/defaultV2.min.css"
import "survey-creator-core/survey-creator-core.min.css"
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

export function SurveyCreatorWidget() {
  const creator = new SurveyCreator(creatorOptions);
  creator.text = "hello world";
  return (
    <SurveyCreatorComponent creator={creator} />
  )
}

function App() {
  return (
    <div className="App">
         <SurveyCreatorWidget></SurveyCreatorWidget>
    </div>
  );
}

export default App;
