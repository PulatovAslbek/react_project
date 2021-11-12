import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {

  return (
    <>
      <div className='container d-flex flex-column justify-content-between'>
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
