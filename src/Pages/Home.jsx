import React, { useState } from 'react'

function Home() {
    
    const [bmi, setBmi]=useState("")
    const [hei ,setHei] = useState ("")
    const [wei , setWei] = useState ("")
    const [bmicount, setBmicount] = useState(0)

    const Validate=(e)=>{
      const {name, value} = e.target
      console.log(name);
      console.log(value);
      
      if(!!value.match('^[0-9]*$')){
        if(name == "bmi"){
            setBmi(value)
            console.log(bmi);
        }else if(name == "hei"){
            setHei(value)
        }else{
            setWei(value)
        }
      }else{

      }
    }
    
        const calculate =()=>{
            setBmicount(Math.trunc((wei)/((hei/100)*(hei/100))))
             
        }
    
  return (
    <>
    <div className="container-fluid mt-lg-5 mt-3" >
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <div className='p-3 bg-secondary rounded  shadow' style={{color:"black"}}>
                    <h1 className='text-center '>Calculate your BMI</h1>
                    <div className='d-flex justify-content-center align-items-center mt-lg-3 mt-2 mb-lg-3 mb-2'>
                        <div style={{width:"160px", height:"2px", backgroundColor:"black"}}></div>
                        <div style={{height:"30px", width:"30px", border:"4px solid violet", borderRadius:"50%"}}></div> 
                        <div style={{width:"180px", height:"2px", backgroundColor:"black"}}></div>
                    </div>
                    
                    
                        <div className='d-flex justify-content-center gap-3 '>
                            <h4>Weight:</h4>
                            <input type="number"  onChange={(e)=>Validate(e)}  name='wei' style={{height:"30px", width:"60px", backgroundColor:"whitesmoke",outlineStyle:"none"}}/>
                            <h4>Kg</h4>
                        </div>
                        <div className='d-flex justify-content-center align-items-center mt-lg-3 mt-2 mb-lg-3 mb-3'>
                        <div style={{width:"180px", height:"1.5px", backgroundColor:"black"}}></div>
                        <div style={{height:"30px", width:"30px", border:"4px solid violet", borderRadius:"50%"}}></div> 
                        <div style={{width:"160px", height:"1.5px", backgroundColor:"black"}}></div>
                    </div>
                        <div className='d-flex justify-content-center gap-3 '>
                            <h4>Height:</h4>
                            <input type="number" onChange={(e)=>Validate(e)} name='hei'  style={{height:"30px", width:"60px"}}/>
                            <h4>Cm</h4>
                        </div>

                        <button className='btn btn-primary w-100 mt-3' onClick={calculate}>Calculate</button>

                        <h4 className='text-center mt-2' onChange={(e)=>Validate(e)}  name='bmi' >Your BMI: <span>{bmicount}</span></h4>
                        <h6 className='text-center mt-2'>Start Workout</h6>

                </div>
            </div>
            <div className="col-md-4"></div>
        </div>
    </div>
    </>
  )
}

export default Home