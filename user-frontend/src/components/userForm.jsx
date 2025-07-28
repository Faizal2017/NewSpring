import { useState } from 'react';
import axios from 'axios';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/api/users', { name, email });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;
/*   

function userform()=>{
    
    const [name , setNmae] = useState(')
    const [email , setEmail] = useState('')

    const handleSubmit = async (e)=>{
        e.prevent.default();

        await axios.post("httttmp",{name ,maeil})
        }
    
    
    return (
    <form onsubmit={handleSubmit}>

    <input type="text" value={name} placeholdder="name" onchange={(e)=>{setname(e.targert.value)}}
    </form>)}
    <input value={email} id="email" placeholder="email.com" onChange={(e)=> setEmail(e.targert.value)}





function userlist(){

const [users, setUsers] = useState([]);


useEffect({

const getUser = async ()=>{
    
    const res = await axios.get()
    set}
},[])

    }

* */
