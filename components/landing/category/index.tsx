
import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import Link from 'next/link';
import CategoryCard from './card';
import CategoryList from './list';
import SectionHeading from '../section-heading';


const CategoriesList = () => {
  return (
    <section className="px-10 py-10">
        {/* heading sections */}
   
 <SectionHeading
 heading= "Featured Categories"
 subHeading="Discover our Featured Categories"
 link ="#"
 name="Explore More"
 />

{/* list categories */}
<CategoryList/>


       </section>
  )
}

export default CategoriesList