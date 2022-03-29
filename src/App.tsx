import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from './components/Card'
import UserList from "./components/UserList";
import {IUser} from "./type/types";
import axios from "axios";


function App() {
const [user, setUsers] = useState<IUser[]>([])

    useEffect(() => {
fetchUsers()
    }, [])
    async function fetchUsers( ) {
    try {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
    }catch (e) {
        alert(e)
    }
    }
  return (
    <div className="App">
      <Card onclick={(num) => console.log('click', num)} variant={CardVariant.primary} width='200px' height='200px'>
          <button>
KNOPKA
          </button>
      </Card>
        <UserList users={  user } />
    </div>
  );
}

export default App;

