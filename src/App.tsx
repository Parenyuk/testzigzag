import React from 'react';
import './App.scss';
import {MainModal} from './components/MainModal/MainModal';

function App() {
    const [isShown, setIsShown] = React.useState(false);

    const openMainModal = () => {
        setIsShown(true)
    }
    return (
        <div className='App'>
            {isShown &&  <MainModal title={'Увеличьте свой депозит!'} setIsShown={setIsShown}  />}
              <button onClick={openMainModal} className='openButton' >
                  Открыть модалку </button>
        </div>
    );
}

export default App;
