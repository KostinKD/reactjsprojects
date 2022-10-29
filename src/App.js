
import './App.css';
import {useState} from "react";

function App() {

    const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <div className="modal">
        <p className="message">Открой меня</p>
        <div className="options">
          <button className="btn" onClick={() => setOpen(true)}>Модальное окно</button>
        </div>
      </div>
        {/*ХОРОШО КОГДА НЕТУ АНИМАЦИИ*/}
        {open && (
            <div className="overlay" onClick={() => setOpen(false)}>
            <div className="overlay-in">
                <div className="overlay-modal">
                    <iframe src="https://giphy.com/embed/5DQdk5oZzNgGc" width="480" height="403" frameBorder="0"
                            className="giphy-embed" allowFullScreen></iframe>
                    <div className="options-overlay">
                        <button className="btn" onClick={() => setOpen(false)}>Закрыть окно</button>
                    </div>
                </div>
            </div>
            </div>
        )}

    </div>
  );
}

export default App;
