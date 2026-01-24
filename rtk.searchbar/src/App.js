import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import { setSearchTerm } from './redux/slice';

function App() {

  const dispatch = useDispatch();

  const { list, searchTerm } = useSelector(
    (state) => state.criketers
  )

  const filterNames = list.filter((names) => {
    return names.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className="App">
      <h1>Indian Women Cricketers</h1>

      <input
        className='searchBar'
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />

       <ul>
        {filterNames.map((name, index) => (
          <li key={index}>{index + 1}) {name}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
