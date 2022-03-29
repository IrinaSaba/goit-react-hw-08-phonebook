import { useState } from "react";
import { useDispatch } from "react-redux";

export default function LoginForm() {
   const  [name, setName] = useState("");
   const  [email, setEmail] = useState("");
   const  [password, setPassword] = useState("");
 
   const dispatch = useDispatch();
   // const Contacts = useSelector(state => state.contacts.items);
 
   const handleChange = event => {
     const {name, value} = event.target;
     switch(name) {
      case "name" :
         setName(value)
         break;
       case "email" :
         setEmail(value)
         break;
       case "password" :
         setPassword(value)
         break;
     }
   }
    const clearFields = () => {
      setName('');
      setEmail('');
      setPassword('');
    }
 
    const  handleSubmit = (event) => {
     event.preventDefault();
     const newUser = {
      name,
      email,
      password
    };
 
   //   if (items.find(contact =>contact.name.toLowerCase().includes(newContact.name.toLowerCase()))) {
   //     clearFields();
   //         return alert(`I have your contact already Sergey ))), i would call you`);
   //       }
     // console.log(addContact(newContact))
   //   dispatch(addUser(newUser));
     clearFields();
 
   };
   
   return (
       <form  
      //  onSubmit={handleSubmit}
       >
      <label > Name
         <input
            type="text"
            name="name"
            required
            value={name}
            onChange={handleChange}
         />
       </label>
       <br></br>
       <label > Email
             <input
                type="email"
                name="email"
                required
                value={email}
                onChange={handleChange}
             />
       </label>
       <br></br>
       <label> Password
       <input
             type="text"
             name="password"
             required
             value={password}
             onChange={handleChange}
             />
       </label>
       <br></br>
       <button type="submit">
          Register
       </button>
       </form>
    
 );
   }
 