import React from 'react';
import Card, {CardVariant} from './components/Card'
import UserList from "./components/UserList";
import {IUser} from "./type/types";


function App() {

    const users: IUser[] = [
        {id: 1, name: 'Arseniy', email: 'gh.blacktrade.com', address: {city: 'Saint-Petersberg', street: 'Kazanskaya', zipcode: '43'}},
        {id: 2, name: 'Valeria', email: 'gh.blacktrade.com', address: {city: 'Saint-Petersberg', street: 'Kazanskaya', zipcode: '43'}}

    ]
  return (
    <div className="App">
      <Card onclick={(num) => console.log('click', num)} variant={CardVariant.primary} width='200px' height='200px'>
          <button>
KNOPKA
          </button>
      </Card>
        <UserList users={  users } />
    </div>
  );
}

export default App;

