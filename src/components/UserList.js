import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const UserList = () => {
  const [userData, setUserData] = useState([])
  useEffect(() => {
    getData()
  }, [])

  async function getData(){
    try{
      let response = await fetch('https://jsonplaceholder.typicode.com/users')
      let data = await response.json()
      setUserData(data)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {
          userData.map(item => {
            return <li key={item.id}><Link to={`users/${item.id}`}>{item.name}</Link></li>
          })
        }
      </ul>
    </div>
  )
}

export default UserList