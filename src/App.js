import { useEffect } from 'react'
import './App.css'
const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready()  // убрали eslintConfig из package.json
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
