import React from 'react'
import './Button.css';
function Button() {
  return (
    <div className="butt">
    <div className="b2">
    <div className="content"> Min Staking Amount</div>
    <span className="high">50 USDT</span>
    </div>
    <div className="b3">
    <div className="content">Max Staking Amount</div>
    <span className="high">500 USDT</span>
    </div>
    </div>
  )
}

export default Button