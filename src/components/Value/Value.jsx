import React, { useState } from 'react'
import './Value.css';
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from '../../utils/accordion'
const Value = () => {
  return (
    <section className='v-wrapper'>
        <div className='paddings innerWidth flexCenter v-container'>
            <div className='v-left'>
                <div className='image-container'>
                    <img src="./value.png" alt="" />
                </div>
            </div>
            <div className='v-right flexColStart'>
                <span className='orangeText'>Our Value</span>
                <span  className='primaryText'>Value We Give To You</span>
                <span className='secondaryText'>
                    We are always there to help you by providing the best services to you.
                    <br/>
                    We believe in a good balance, making your life better.
                </span>


                <Accordion className='accordion' style={{border:"none"}}
                allowMultipleExpanded={false}
                preExpanded={[0]}
                >
                    {
                        data.map((item,i)=>{
                            const[className,setClassName]=useState(null)
                            return(
                                <AccordionItem key={i} uuid={i} className={`accordionItem ${className}`}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='accordionButton flexCenter'>
                                            <AccordionItemState>
                                                {({ expanded }) => expanded ? setClassName("expanded"): setClassName("collapsed")}
                                            </AccordionItemState>
                                            <div className='flexCenter icon'>{item.icon}</div>
                                            <span className='primaryText'>{item.heading}</span>
                                            <div className='flexCenter icon'>
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">
                                            {item.detail}
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        }
                    )
                    }
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value
