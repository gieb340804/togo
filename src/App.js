import './App.css';
import List from './components/List';
import menuPng from './assets/img/menu.png';


function App() {
  return <div className="todo">
    <div className="todo__sidebar">
      <List 
      items={[
        {
          img: null,
          name: 'Все задачи'
        },
        {
          img: null,
          name: 'Все задачи'
        }
        {
          img: null,
          name: 'Все задачи'
        }
      ]}
      />
    </div>
    <div className="todo__tasks"></div>
  </div>
}

export default App;
