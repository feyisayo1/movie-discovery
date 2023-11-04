// import { useState } from "react";

// export default function App() {
//   const [todo, setTodo] = useState('');
//   const [todos, setTodos] = useState([
//     {name: 'Buy Milk', isCompleted: false},
//     {name: 'Buy Bread', isCompleted: false },
//     {name: 'Buy Moi Moi', isCompleted: false }
//   ])

//   const handleChange = (event) => {
//     console.log(event.target.value);
//     setTodo(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setTodos([...todos, {name: todo, isCompleted :false}])
//     setTodo('');
//   }


//   return(
//     <>
//       <form action="" onSubmit={handleSubmit}>
//         <div>
//           <input type="text" value={todo} onChange={handleChange}/>
//           <button style={{color: 'red'}} type="submit">Add Todo</button>
//         </div>
//         <div>
//           {todos.map((todo) => (
//               <div>{todo.name}</div>
//             ))}
//         </div>
//       </form>
//     </>
//   )

// }

// form 
// export default function App(){
//   const [user, setUser] = useState({
//     firstName:'',
//     lastName:'',
//     email:''
//   })

//   // const [firstName, setfirstName] = useState('')
//   // const [lastName, setlaastName] = useState('')
//   // const [email, setemail] = useState('')

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(user);
//   }

//   const handleChange = (event) => {
//     setUser({...user, [event.target.name]: event.target.value})
//   }


//   return(
//     <>
//     <h1>SignUp</h1>
//     <form action="" onSubmit={handleSubmit}>
//       <label htmlFor="">
//         First Name:
//         <input type="text" name="firstName" onChange={handleChange}/>
//       </label>
//       <br />

//       <label htmlFor="">
//         Last Name:
//         <input type="text" name="lastName" onChange={handleChange} />
//       </label>
//     <br />

//     <label htmlFor="">
//       Email:
//       <input type="email" name="email" onChange={handleChange} />
//     </label>
//     <br />
//     <button>signup...</button>

//     </form>
    
//     </>
//   )
// }



// hng task starts here 

import NavBar from "./NavBar";
import Movies from "./Movies"

export default function App(){


    return(
        <>
            <NavBar/>
            <Movies/>
        </>
    )
}

