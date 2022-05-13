import axios from "axios";
import { useEffect, useState } from "react";
import { ShowDonations } from "../components/ShowDonations";

export function Donations(){
  const [donations, setDonations] = useState([])

  useEffect(()=>{
    function fetchDonations(){
      axios.get("http://localhost:8080/donations/all")
        .then(({data}) => setDonations(data))
        .catch(error => console.error(error))
    }

    fetchDonations()
  },[])

  return (
    <div>
      <h1>Doações</h1>
      <ShowDonations donations={donations}/>
    </div>
  )
}