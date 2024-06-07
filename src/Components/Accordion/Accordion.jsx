import React, { useState } from 'react';
import chevronDown from '../../images/chevron_down.svg'; 

import './Accordion.scss';

function Accordion() {

  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: 'Why should I trust this tool?',
      content: 'Content for section 1.'
    },
    {
      title: 'What risks are related to investments?',
      content: 'Content for section 2.'
    },
    {
      title: 'What is the Auto-Investment?',
      content: 'Content for section 3.'
    }
  ];

  const handleClick = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    
    <div className="accordion">

      <h3>You Might Want to Know</h3>

      {items.map((item, index) => (
        
        <div className="list" key={index}>
         
          <div>
            {item.title}
            <img src={chevronDown} className="list-chevron" alt="" onClick={() => handleClick(index)}/>
          </div>
         
          {openIndex === index && (
            <div>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );

}

export default Accordion;
