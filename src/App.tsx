import './App.css'
import Items from "./Components/Items";
import Comments from "./Components/Comments";
import {StoreProvider} from "./redux/store.tsx";

function App() {


  return (
    <StoreProvider>
      <div className="app">
        <div className="info-bar">
          <h1>Info bar</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, temporibus?</span>
        </div>
        <div className='content'>
          <Items/>
          <Comments/>
        </div>
      </div>
    </StoreProvider>
  )
}

export default App
