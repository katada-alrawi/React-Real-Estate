import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdArrowDropDown } from 'react-icons/md';
import './Value.css';
import data from '../utils/accordion';

const Value = () => {
  return (
    <section className='v-wrapper'>
      <div className='paddings innerWidth flexCenter v-container'>
        {/* left side */}
        <div className='v-left'>
          <div className='images-container'>
            <img src='/images/3.avif' alt='Home' />
          </div>
        </div>
        {/* right side */}
        <div className='flexColStart v-right'>
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We believe that a good place to live can make your life better.
            <br />
            Discover the difference a comfortable and welcoming environment can make in your life.
          </span>

          <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
            {data.map((item, i) => (
              <AccordionItem className='accordionItem' key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className= 'flexCenter accordionButton'>
                    <div className='flexCenter icon'>{item.icon}</div>
                    <span className='primaryText'>{item.heading}</span>
                    <div className='flexCenter icon'>
                      <MdArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText"> {item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
