import React,{useState} from 'react'

const Sample = () => {
   // const [count,setCount]=useState(0);
    const[input,setInput]=useState([{name:'',grade:''}])

    const add=()=>{
        let a=[...input];
        console.log('add data is',a)
       // console.log('add data is ::',[...input])
    }
   // const Increment=()=>setCount(count+2);
//  const Change=(e)=>{
//     setInput(e.target.value)
//  }
 const ADD=()=>{
    setInput([...input,{name:'',grade:''}])

 }
 const Remove=(i)=>{
    const ne=[...input]
    ne.splice(i,1)
    setInput(ne)
 }
 const onSubmit=(e)=>{
    e.preventDefault();
    console.log('data is',input)



 }
 const onChangeHandle=(e,i)=>{
    let ne=[...input]
    ne[i][e.target.name]=[e.target.value]

    setInput(ne);

 }

  return (
    <div>
        <h1>sample</h1>
        <form onSubmit={onSubmit}>
            {input.map((item,i)=>{
return(
         <div key={i}>
       <label>marks</label>
        <input placeholder='text here ' type ='text' onChange={(e)=>onChangeHandle(e,i)} name='name' autoFocus value={item.name || ''} required/>
       <label>grade</label>
        <input placeholder='text here ' type ='text' onChange={(e)=>onChangeHandle(e,i)} name='grade' autoFocus value={item.grade || ''} required/>
     
        <button onClick={ADD}> ADD</button>
        { i==0 ? '':  <button onClick={Remove}> Remove</button>

        }
      
        </div>)
            
            })}
     
        <button type='submit'>Submit</button>

        </form>

      <h2>{}</h2>

        {/* <h1>sample {count}</h1> */}
        {/* <button onClick={Increment}> ADD</button> */}
   
    </div>
  )
}

export default Sample
