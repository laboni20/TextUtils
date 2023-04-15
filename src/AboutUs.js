import React, { useState } from 'react'

export default function AboutUs(props) {
  // let myStyle = {
  //   color: "white",
  //   backgroundColor: "black",
  // }
  // const [myStyle, setmyStyle] = useState({
  //   color:'black',
  //   backgroundColor:'white'
  // })
  // const [btnText, setbtnText] = useState("Convert to Dark Mode");

  // const converttoDark = ()=>{
  //   
  //   if(myStyle.color==='black'){
  //     setmyStyle({
  //       color:'white',
  //       backgroundColor:'black'
  //     });
  //     setbtnText("Convert to Light mode");
  //   }
  //   else{
  //     setmyStyle({
  //       color:'black',
  //       backgroundColor:'white'
  //     });
  //     setbtnText("Convert to Dark mode");
  //   }
  // }
  let myStyle = {
    color: props.mode==='dark'?'white':'#00152e',
    backgroundColor: props.mode==='dark'?'#00152e':'white',
  }
  return (
  
    <div className='container my-3 p-4' style={myStyle}>
      <h2>About Us</h2>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Textutils gives you a way to analyze your text quicky and efficiently.</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>It is a free character counter tool that provides instant character count and word count, it can convert the given texts to uppercase, lowercase. Also it will copy the texts to keyboard and if you want to listen to the sentences you can directly click on the 'Speak' button.</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This word counter software can work in any browser.</strong>
      </div>
    </div>
  </div>
</div>
{/* <button onClick={converttoDark} className='btn btn-secondary my-3'>{btnText}</button> */}
    </div>
    
  )
}
