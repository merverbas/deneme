import './App.css';
import Navbar from "./components/Navbar";
import User from "./components/User";

function App() {

  return (
    <div className="container">
      <Navbar title ="User-App-2"/>
      <hr/>
      <User
      name = "Merve Erbaş"
      department = "bilişim"
      salary = "5000"

      />
         <User
      name = "Melike Koçgürbüz"
      department = "bilişim"
      salary = "6000"

      />
    </div>
  );
}

export default App;
