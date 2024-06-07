import logo from '../../images/logo.svg'; 
import lendo from '../../images/lendo.svg'; 
import chevron_right from '../../images/chevron_right.svg'; 
import warning from '../../images/warning.svg'; 
import person from '../../images/person.svg'; 
import wallet from '../../images/wallet.svg'; 

import './Sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar">
      
      <div className="logo">
        <img src={logo} alt=""/>
        <img src={lendo} alt=""/>
      </div>

      <div className="center">

        <div className="financials">
          <img className="financials-wallet" src={wallet} alt=""/>
          <div className='financials-overview'>
            <div className="financials-count">62,540 SAR</div>
            <div className="financials-heading">Account Balance</div>
            <img className="financials-chevron" src={chevron_right} alt=""/>
          </div>
        </div>

        <div className="action">
         
         <div className="action-box">
            <button className="action-deposit">Deposit</button>
            <button className="action-withdraw">Withdraw</button>
         </div>

          <div className="verify">
            <img src={warning} alt="" />
            <p>To withdraw more than 10,000 <br /> SAR you need to verify your <br /> banking account.</p>
          </div>
        
        </div>

      </div>

      <div className="trustbox">
        <img src={person} alt="" />
        <h5>Why Should You Trust It?</h5>
        <p>Because of this and that. <br />Anyway investing is very good</p>
      </div>


    </div>
  );
}

export default Sidebar;
