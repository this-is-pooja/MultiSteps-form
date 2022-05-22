import React, { useState } from 'react'

function Payment() {

  const style = {
    width: "60%",
    height: "3rem",
    borderRadius: "8px",
    border: "1px solid #00000061",
    fontSize: "1rem",
    paddingLeft: "10px",
    marginBottom: "2rem"
  }

  const [pay, setPayment] = useState("");

  const data = { pay };
  localStorage.setItem('payment-info', JSON.stringify(data));

  return (
    <div style={{ marginTop: "2rem" }}>
      <form>
        <input
          type="number"
          className="TextField"
          value={pay}
          onChange={(e) => {
            if (e.target.value.length === 30) return false;
            setPayment(e.target.value);
          }}
          placeholder="Payment"
          style={style}
        />
      </form>
    </div>
  )
}

export default Payment