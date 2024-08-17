import Hello from './components/Hello';
import './App.css';

const arr = [
  {username:'ramiro', email: 'rami2'},
  {username:'juan', email: 'juia1'},
  {username:'pedro', email: 'pedro asd'},
  {username:'mari', email: 'mari123'},
  {username:'dana', email: 'dana456'},
  {username:'flor', email: 'flor123'}
]
  

function App() {
  return (
    <>
      <div>
        {arr.map ((item, indx) => {
            return (
              <div key={indx}>
                <div>
                <Hello username={item.username} email={item.email}></Hello>
                </div>
              </div>
            )
        })}
      </div>
    </>
  );
}

export default App;
