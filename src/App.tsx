import './App.css';
import { Header } from './stories/header/Header';

function App() {
  return (
    <div className="App">
      <Header title='NewsAggregator' label='NewsAggregator' />
      <h1 className="text-4xl text-blue-500">Hello World</h1>
    </div>
  );
}

export default App;
