import React, { useState } from 'react'

function Address() {

  const style={
    width: "60%",
    height: "5rem",
    borderRadius: "8px",
    border: "1px solid #00000061",
    fontSize: "1rem",
    paddingLeft: "10px",
    marginBottom: "2rem"
  }
 
  const [Address, setAddress] = useState("");

  const data = { Address };
  localStorage.setItem('Address-info', JSON.stringify(data));    

  return (
    <div style={{ marginTop: "2rem" }}>
      <form>
        <input
          type="text"
          value={Address}
          className="TextField"
          onChange={(e) => {
            if (e.target.value.length === 30) return false;
            setAddress(e.target.value);
          }}
          placeholder="Address"
          style={style}
        />
      </form>
    </div>
  )
}

export default Address