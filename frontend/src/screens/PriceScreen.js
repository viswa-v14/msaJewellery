import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
export default function PriceScreen() {
  const [price, setPrice] = useState();
  useEffect(() => {
    axios.get('http://localhost:4000/').then((res) => {
      setPrice(res.data.val[0]);
    }).catch((err)=>{console.log(err)})
  }, []);
  const datas = price?.map((i) => (<>
  <Button variant='dark' style={{width:"50%",margin:"10px"}}>{i}</Button> <br/></>
    
  ))
  return (

    <div className='price_css'>
      {console.log("data - "+ price)}
      
      
         <h1>Price Today</h1>
        
          {datas}
     
      
      
    </div>
  );
}
