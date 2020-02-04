import React from "react";

const App: React.FC = () => {
  return (
    <div id="principalApp">
      <div className="App-header">
        The PC Review.
        <div id="reactV">R-{React.version}</div>
      </div>
    </div>
  );
};

export default App;
