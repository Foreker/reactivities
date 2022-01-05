import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  // method to retrieve the data from DB using axios
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(respose => {
      console.log(respose);
      setActivities(respose.data);
    })
  }, [])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />
        <img src={logo} className="App-logo" alt="logo" />
        <List>
          {activities.map((activity: any) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
