import './Content.scss';
import help from '../../images/help.svg'; 

import Accordion from '../Accordion/Accordion';
import BarChart from '../BarChart/BarChart';
import DonutChart from '../DonutChart/DonutChart';

function Content() {
  return (
    
    <div className="content">

        <div className="stats">

            <div className="interest-box">
                <h4 className="interest-heading">Conservative</h4>
                <p className="interest-rates">10-14%</p>
                <p className="interest-text">Interest Rate</p>
            </div>

            <div className="container">

                <div className="status-information">
                    
                    <div className="active">
                        <h4>Active</h4>
                        <span>Status</span>
                    </div>

                    <div className="investment">
                        <h4>1500 SAR</h4>
                        <span>Max. Investement</span>
                    </div>

                    <div className="loans">
                        <h4>26</h4>
                        <span>Loans Funded</span>
                    </div>

                </div>

                <div className="strategy">
                    
                    <div className="strategy-heading">* Strategy started at 20th March 2021 </div>

                    <div className="actions">
                        <button className="stop">Stop</button>
                        <button className="settings">Change Settings</button>
                    </div>

                </div>

            </div>

        </div>

        <div className="charts">
            <div className="investmentbar">

                <div className="heading">
                    <h3>Invested</h3>
                    <img src={help} alt="" />
                </div>
                
                <BarChart />

                <div className="labels">
                    <div className="labels-spent">Spent</div>
                    <div className="labels-excepted">Excepted</div>
                </div>

            </div>
        
            <div className="distribution">
               
                <h3>Excepted Risk Score <br />Distribution</h3>
               
                <div className="chart">
                  <DonutChart />
                    <div className="dlabels">
                        <div className="dlabels-a">A - 45.7%</div>
                        <div className="dlabels-b">B - 51.5%</div>
                        <div className="dlabels-c">C - 23.2%</div>
                        <div className="dlabels-d">D - 51.5%</div>
                    </div>
                </div>
              
            </div>
        </div>

    < Accordion />

    </div>
  );
}

export default Content;
