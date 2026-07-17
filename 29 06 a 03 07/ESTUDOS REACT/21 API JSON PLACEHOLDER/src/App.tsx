import { useEffect, useState } from "react";
interface user{
  id:string,
  name:string,
  username:string,
  email:string,
  address: {
    street:string,
    suite: string,
    city:string,
    zipcode:string,
    geo:{
      lat:string,
      long:string
    }
  },
  phone:string,
  website:string,
  company:{
    name:string,
    catchPhrase:string
  }
}


function App() {
  const [data, setData] = useState<user[]>();


  async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataRes = await res.json();
    setData(dataRes);
  }

  useEffect(() => {
    const buscarDados = async () => {
      await getData();
    }


    buscarDados();
  },[])

  return (
    <>
      <h1>API JSON PLACEHOLDER</h1>
      {data != null && (
        <div className="conatinerDataJson">
          {data.map((u)=>(
            <>
              <div className="user">
                <p>Id:{u.id}</p>
                <p>Name:{u.name}</p>
                <p>Username: {u.username}</p>
                <p>Email: {u.email}</p>
                
                <p>street: {u.address.street}</p>
                <p>suite: {u.address.suite}</p>
                <p>city: {u.address.city}</p>
                <p>zipcode: {u.address.zipcode}</p>
                <p>GEO LAT: {u.address.geo.lat}</p>
                <p>GEO LONG: {u.address.geo.long}</p>

                <p>phone: {u.phone}</p>
                <p>website: {u.website}</p>
                <p>Company: {u.company.name}</p>
                <p>Company catchPhrawse: {u.company.catchPhrase}</p>
              </div>
            </>
          ))}
        </div>
      )}
    </>
  )
}

export default App
