import React from 'react'

function Finish() {

  const styles = {
    fontSize: "1rem",
    color: "#536471",
    marginTop: "2rem"
  }
  const Title = {
    marginBottom: "2rem",
    fontWeight: "bold",
    fontSize: "2rem"
  }

  const data = localStorage.getItem('data-info');
  const Add = localStorage.getItem('Address-info');
  const pay = localStorage.getItem('payment-info');
  const Data = JSON.parse(data);
  const Address = JSON.parse(Add);
  const Payment = JSON.parse(pay);

  return (
    <div
      style={styles}
    >
      <div>
        {Data.Name.length === 0 || Data.Email.length === 0 || Data.Phone.length === 0 || Address.Address.length === 0 || Payment.pay.length === 0 ?
          <div style={Title}>Your Details are not properly saved..!!</div>
          :
          <>
            <div style={Title}>Thanks, Your payment Details:-</div>
            <div>Name: {Data.Name}</div>
            <div>Email : {Data.Email}</div>
            <div>Contact : {Data.Phone}</div>
            <div>Address : {Address.Address}</div>
            <div>Payment status: paid ({Payment.pay}Rs.) </div>
          </>
        }
      </div>
    </div>
  )
}

export default Finish