import React from 'react';
import Card, {CardVariant} from './components/Card'


function App() {
  return (
    <div className="App">
      <Card onclick={() => console.log('click')} variant={CardVariant.primary} width='200px' height='200px'>
          <button>
KNOPKA
          </button>
      </Card>
    </div>
  );
}

export default App;

