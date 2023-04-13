
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="cardLogin">
        <h1>Login</h1>
        <div className="cardInputs">
          <input type="text" placeholder="email"/>
          <input type="password" placeholder="senha" />
        </div>
        <div className="cardLembreDeMim">
          <input type="checkbox" />
          <label>Lembrar desse computador ?</label>
        </div>
        <div className="cardButton">
          <button>ENTRAR</button>
        </div>
      </div>
    </div>
  );
}

export default App;
