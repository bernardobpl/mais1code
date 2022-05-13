import axios from "axios"
import { useState, useEffect } from "react"

export function ShowDonations({ donations }){
  return (
    <>
      {
        donations.map(donation => (
          <div 
            key={donation.id} 
            style={{
              border: '1px solid blue',
              marginBottom: '1rem', 
              padding: '0.5rem', 
              borderRadius: '4px',
              width: '300px'
            }}
          >
            <h5 style={{marginBlock: '5px'}}>{donation.name} - {new Date(donation.created_at).toLocaleDateString()}</h5>
            <textarea defaultValue={donation.description} readOnly/>
          </div>
        ))
      }
    </>
  )
}