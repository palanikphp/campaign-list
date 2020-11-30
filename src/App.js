import React from "react";
import CampaignList from "./views/campaign-list";

import { messages } from "./constants"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {messages.WEBSITE_TITLE}
      </header>
      <CampaignList />
    </div>
  );
}

export default App;
