import React,{useState} from 'react'
import './form.css'

export const Form = () => {

const [empInfo,setInfo] = useState({
  name:"",
  dep:"",
  rating:""
});
const [record,setRecord] = useState([]);

const getDetails = (e) =>{
    e.preventDefault();
    setRecord([...record,empInfo])
    record.push(empInfo)
    console.log(record)
    setInfo({name:"",dep:"",rating:""})
}

  return (
    <div>
        <h1>Employee Feedback Form</h1><br/>
        <form>
            <label htmlFor="name">Name &nbsp;</label>
            <input type="text" autoComplete='off' className='text-field' id="name" value={empInfo.name} onChange={e=>setInfo({ ...empInfo, name:e.target.value })}
             name="NAME"/><br/><br/>
            <label htmlFor="dep">Department &nbsp;</label>
            <input type="text" autoComplete='off' className='text-field' id="dep" value={empInfo.dep} onChange={e=>setInfo({ ...empInfo, dep:e.target.value })} name="DEP"/><br/><br/>
            <label htmlFor="rating">Rating &nbsp;</label>
            <input type="number" autoComplete='off' className='text-field' id="rating" value={empInfo.rating} onChange={e=>setInfo({ ...empInfo, rating:e.target.value })} name="RATING"/><br/><br/>
        </form>
        <button className='btn btn-success' onClick={getDetails}>Submit</button>
        <br/>   <br/>   <br/>
           <div className='container'>
                {
                  Record.map((current,index) => {
                      return (
                          <div className='box' key={index}>
                             <b> Name :</b> <span>{current.name}</span><br />
                             <b> Department :</b> <span>{current.dep}</span><br />
                             <b> Rating : </b><span>{current.rating}</span><br />
                          </div>
                      )
                  })}
        </div>

    </div>
  )
}











