


import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import Link from 'next/link';

interface Iprops{
    link?: string,
    heading: string,
    subHeading: string
    name:string,
}


const SectionHeading = ({heading, subHeading, name, link}:Iprops) => {
  return (
   
        <header className="flex justify-between">

            {/* left */}
            <div>
                <h3 className=" text-lg font-semibold">{heading}</h3>
                <p className="text-sm text-text-secondary">{subHeading}</p>
            </div>
            {/* right */}
            <div>
           {  link &&   <Link href={link}>
                <div className=" flex items-center gap-1 text-text-secondary font-normal hover:text-primary transition-all duration-200 "> 
                    <span>{name}</span>
                    <FaChevronDown size={15} className= "mt-0.5"/>
                </div>
                </Link>}
            </div>

        </header>
  )
}

export default SectionHeading