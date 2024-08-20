// //1: TWO WAY BINDING IN REACT 
// "use client"
// import React, { useState } from 'react'

// const page = () => {
//   const [username, setusername] = useState("")
//   return (
//     <>
//     <h1 className='text-2xl'>Enter your name</h1>
//       <form>
//         <input type='text' className='border-2 border-zinc-800 px-4 py-2 text-xl' value={username} onChange={(e)=>{
//           setusername(e.target.value)
//           console.log(username)
//         }}/>
//       </form>
//     </>
//   )
// }

// export default page
// //1: TWO WAY BINDING IN REACT 

// // 2: ROUTING, DYNAMIC ROUTING or APP ROUTING

// import React from 'react'

// const page = () => {
//   return (
//     <>
//     <h1>This is Home Page</h1>
//       <a href='/Contact'>contact us</a>
//     </>
//   )
// }

// export default page

// // 2: ROUTING, DYNAMIC ROUTING



// // 3: API CALLING (FETCH API / AXIOS)

// "use client"

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import Link from "next/link"

// const page = () => {
//   const [users, setusers] = useState([])
//   const getUsers = async () => {
//     const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
//     setusers(data);
//     console.log(users)
//   }
  
//   useEffect(() => {
//     getUsers()
//   }, [])
  

//   return (
//     <>
//       <button onClick={getUsers} className='bg-green-700'>Get Data</button>
//       <div className='p-8 bg-slate-400 mt-5'>
//           <ul>
//             {
//               users.map((e, i)=>{
//                 return(
//               <li key={i}>{e.username} --- <a href={`/${e.id}`}>Explore</a></li>  
//                 )
//               })
//             }
//           </ul>
//       </div>
//     </>
//   )
// }

// export default page


// // 3: API CALLING (FETCH API / AXIOS)



// // 4: CONTEXT API
// "use client"
// import React, { useState } from 'react'
// import Header from './Components/header'


// const page = () => {
//   const [num, setnum] = useState(10)
//   return (
//     <div>
//       <Header num={num}/>
//       This is homepage
//     </div>
//   )
// }

// // export default page
// "use client"
// import  MyContext  from '@/Helper/context'
// import React, { useContext } from 'react'
// import Header from './Components/header'

// const page = () => {
//   const users = useContext(MyContext)
//   console.log(users)
//   return (
//     <div>
//       HomePage
//       <Header/>
//       <h2>{users}</h2>
//     </div>
//   )
// }

// export default page


// // 4: CONTEXT API




// // 5: SHOWING FLASH MESSAGES (REACT TOASTIFY)

// "use client"
// import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const page = () => {
//   const notify = ()=>{
//     toast.info('🦄 Wow so easy!', {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark" 
//       });
//   }
//   return (
//     <div>
//       <button onClick={notify} className='bg-green-600 px-5 py-2 text-white font-bold m-5'>Login</button>
//       <ToastContainer/>
//     </div>
//   )
// }

// export default page



// // 5: SHOWING FLASH MESSAGES (REACT TOASTIFY)




// // 6:  CLIENT SIDE AND SERVER SIDE RENDERING

// "use client"
// import axios from 'axios'
// import React, { useState } from 'react'

// const page = () => {
//   const [userData, setuserData] = useState('')
//   const [num, setnum] = useState(10)
//   const getData = async ()=>{
//     const res = await axios.get("https://picsum.photos/v2/list")
//     setuserData(JSON.stringify(res.data))
//   }
//   return (
//     <div>
//       <button onClick={getData}>Click</button>
//       {userData}
//     </div>
//   )
// }

// export default page



// // 6:  CLIENT SIDE AND SERVER SIDE RENDERING



// 7: DEPLOYMENT


import React from 'react'

const page = () => {
  return (
    <div>
      Deployment
    </div>
  )
}

export default page



// 7: DEPLOYMENT