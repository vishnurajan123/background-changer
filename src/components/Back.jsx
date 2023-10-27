import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { black, green, purple, red } from '../redux/BackSlice'
import './Back.css'

function Back() {
    const dispatch=useDispatch()
    const back=useSelector((state)=>state.backk.count)
    var bcolor=""
    if(back==0){
        bcolor="rrr"
    }
    else if(back==2){
        bcolor="bbb"
    }
    else if(back==3){
        bcolor="ggg"
    }
    else if(back==4){
        bcolor="ppp"
    }
    console.log(bcolor);
  return (
    <div className={bcolor} style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>

       <div>
            <h1 style={{marginTop:"-50px"}} className='text-light'>Background Color Changer</h1>
    
            <div className='d-flex justify-content-evenly mt-5' >
                <button className='btn btn-light' onClick={()=>dispatch(red())}>Red</button>
                <button className='btn btn-light'  onClick={()=>dispatch(black())}>Blue</button>
                <button className='btn btn-light'  onClick={()=>dispatch(green())}>Green</button>
                <button className='btn btn-light'  onClick={()=>dispatch(purple())}>Purple</button>
    
            </div>
       </div>


    </div>
  )
}

export default Back