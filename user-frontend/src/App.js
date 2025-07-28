import logo from './logo.svg';
import './App.css';

import UserForm from './components/userForm';
import UserList from './components/userlist';
function App() {
  return (
    <div className="App">
     <UserForm />
     <UserList />
    </div>
  );
}

export default App;
