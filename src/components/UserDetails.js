
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const UserDetails = () => {
  const [currUserData, setCurrUserData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const {id} = useParams()

  useEffect(() => {
    getDetails()
  }, [])

  async function getDetails(){
    setIsLoading(true)
    try{
      let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      let data = await response.json()
      setCurrUserData(data)
    }catch(error){
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }
  return (
    <div>
   {
    isLoading ? <div>Loading...</div> : (
      <div>
        <h1>User Details</h1>
        <p><strong>Name:</strong> {currUserData.name}</p>
        <p><strong>Username:</strong> {currUserData.username}</p>
        <p><strong>Email:</strong> {currUserData.email}</p>
        <p><strong>Phone:</strong> {currUserData.phone}</p>
        <p><strong>Website:</strong> {currUserData.website}</p>
      </div>
    )
   }
   </div>
  )
}
export default UserDetails