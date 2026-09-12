
import { Activity, useEffect, useState } from 'react'
import './App.css'
import { ListItemText, Typography } from '@mui/material';
import axios from 'axios';

function App() {
  const title = 'Welcome to Reactivites'
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
         .then(response => setActivities(response.data))       
      .catch(error => console.error('Error fetching activities:', error));
      return() =>{}
      
  }, 
 []); 
  return (
    <>
      <Typography variant="h3">
        {title}
      </Typography>
        <>
        {activities.map(activity => (
          <ul key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ul>
        ))}
      </>
    </>

  )
}

export default App
