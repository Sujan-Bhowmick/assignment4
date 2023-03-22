import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
import BooksContainer from './components/BooksContainer';
import { Provider } from 'react-redux';
import store from './redux/store';



function App() {
  return (
    <Provider store={store}>
    <div className='App'>
      <Navbar />
      <Container />
      {/* <BooksContainer /> */}
    </div>
    </Provider>
  );
}

export default App;
