import React, { useState } from 'react';

function Info() {

  const style = {
    width: "60%",
    height: "3rem",
    borderRadius: "8px",
    border: "1px solid #00000061",
    fontSize: "1rem",
    paddingLeft: "10px",
    marginBottom: "2rem"
  }

  const [Phone, setPhone] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const data = { Phone, Name, Email };
  localStorage.setItem('data-info', JSON.stringify(data));

  return (
    <div>
      <form>
        <input
          type="text"
          value={Name}
          className="TextField"
          onChange={(e) => {
            if (e.target.value.length === 15) return false;
            setName(e.target.value);
          }}
          placeholder="Name"
          style={style}
        />
        <input
          type="email"
          className="TextField"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={style}
        />
        <input
          type="number"
          className="TextField"
          value={Phone}
          onChange={(e) => {
            if (e.target.value.length === 11) return false;
            setPhone(e.target.value);
          }}
          placeholder="Mobile No."
          style={style}
        />
      </form>
    </div>
  )
}

export default Info