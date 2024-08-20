import React, { useContext } from 'react'
import Nav from './nav'
import { MyContext } from '@/Helper/context'

const header = (props) => {
  const user = useContext(MyContext)
    console.log(props.num)
    return (
        <div>
      This is Header
      {/* <h2>{user}</h2> */}
        <Nav/>

    </div>
  )
}

export default header
