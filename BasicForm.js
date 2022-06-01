import React, {useState} from 'react'

const BasicForm = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const[allEntry,setAllEntry] = useState([]);

    const submitForm = (e) =>{
      e.preventDefault();   
        if(email && password){
              const newEntry = {id:new Date().getTime().toString(), email:email, password:password};

            setAllEntry([...allEntry,newEntry]);
            console.log(allEntry);

            setEmail("");
            setPassword("");
        }else{
          alert("please fil the data");
        }
    }
  return (
    <>
        <form action='' onSubmit={submitForm}>
            <div>
                <label htmlFor="email">Email</label>
                <input type='text' name='email' id='email' value={email} 
                onChange={(e)=>setEmail(e.target.value)} autoComplete='off' />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type='password' name='password' id='password' value={password}
                 onChange={(e)=>setPassword(e.target.value)} autoComplete='off'/>
            </div>
            <button type='submit'>Login</button>
            <div>
              {
                allEntry.map((curElem)=>{
                  const {id,email,password} = curElem;
                  return(
                    <div className='showDataStyle' key={id}>
                      <p>{email}</p>
                      <p>{ password}</p>
                    </div>
                  )
                })
              }
            </div>
        </form>
    </>
  )
}

export default BasicForm
