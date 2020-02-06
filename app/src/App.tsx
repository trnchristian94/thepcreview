import React, { Component, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

import Contacts from "src/components/contacts";

const App: React.FC = () => {
  const [showContacts, setContacts] = useState();
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setContacts(data);
      })
      .catch(console.log);
  }, []);

  return (
    <div id="principalApp">
      <div className="App-header">
        The PC Review.
        <div id="reactV">R-{React.version}</div>
        {showContacts && <Contacts contacts={showContacts} />}
        {/* if(showContacts){<Contacts contacts={showContacts} />} */}
      </div>
    </div>
  );
};

export default App;
