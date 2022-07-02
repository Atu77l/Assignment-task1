import React from 'react'
import './Box2.css';
function Box2() {
  return (
    <>
    <div className="main11"></div>
      <div className="first-line">
     Total Stakable Token</div><div className="result">  
         0x8F5d....8955
     </div>

     <div className="second-line">Total Stakable Token</div>
     <div className="result1">53746 TOKEN</div>

     <div className="third-line">Totak Stakable Token In USD</div>
     <div className="result2">$53467</div>

     <div className="fourth-line">Unstake Fee</div>
     <div className="result3">15%</div>

     <div className="fifth-line">Lock Deadline</div>
     <div className="result4">30 Days</div>

     <div className="sixth-line">Pool Filled</div>

      <div className="bx">45% Filled</div>

      <div className="bx1"></div>

    <div className="st_token">Stake Your Token</div>
    <input type="text" placeholder="Ente Amount Of Token" className="input"/>

    <div className="max">MAX</div>
    
    <div className="stake1">STAKE</div>

    <div className="stake2">UNSTAKE</div>

    <div className="emergency">EMERGENCY WITHDRAW</div>
    
    </>
  )
}
export default Box2