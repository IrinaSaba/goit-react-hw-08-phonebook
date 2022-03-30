import { useState } from "react";
import { logIn } from "redux/auth/auth-operations";
import { useDispatch } from "react-redux";


export default function LoginForm() {
   const  [email, setEmail] = useState("");
   const  [password, setPassword] = useState("");
 
   const dispatch = useDispatch();
   // const items = useSelector(state => state.contacts.items);
 
   const handleChange = event => {
     const {name, value} = event.target;
     switch(name) {
       case "email" :
         setEmail(value)
         break;
       case "password" :
         setPassword(value)
         break;
     }
   }
    const clearFields = () => {
      setEmail('');
     setPassword('');
    }
 
    const  handleSubmit = (event) => {
     event.preventDefault();
     dispatch(logIn({email, password}))  
   //   if (items.find(contact =>contact.name.toLowerCase().includes(newContact.name.toLowerCase()))) {
   //     clearFields();
   //         return alert(`I have your contact already Sergey ))), i would call you`);
   //       }
     // console.log(addContact(newContact))
   //   dispatch(addContact(newContact));
     clearFields();
 
   };
   
   return (
       <form onSubmit={handleSubmit}>
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
          Login
       </button>
       </form>
    
 );
   }
 