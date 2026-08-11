
import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import Link from 'next/link';
import CategoryCard from './card';

const categories = [
    { 
        _id:"1",
        name: " Skincare",
        image:{
            path:"/images/hero.png",
            public_id:"/public/images/hero",
        },
         description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum accusantium mollitia voluptatum beatae soluta praesentium, unde culpa ipsum, quo officia sequi id omnis alias aut harum eligendi? Beatae, illo ipsa?"
    },
    {
        _id:"2",
        name:"Gadgets",
        image:{
            path:"/images/hero.png",
            public_id:"/public/images/hero"
        },
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum accusantium mollitia voluptatum beatae soluta praesentium, unde culpa ipsum, quo officia sequi id omnis alias aut harum eligendi? Beatae, illo ipsa? "


    },
     {
        _id:"3",
        name:"Gadgets",
        image:{
            path:"/images/hero.png",
            public_id:"/public/images/hero"
        },
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum accusantium mollitia voluptatum beatae soluta praesentium, unde culpa ipsum, quo officia sequi id omnis alias aut harum eligendi? Beatae, illo ipsa? "


    },
     {
        _id:"4",
        name:"Gadgets",
        image:{
            path:"/images/hero.png",
            public_id:"/public/images/hero"
        },
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum accusantium mollitia voluptatum beatae soluta praesentium, unde culpa ipsum, quo officia sequi id omnis alias aut harum eligendi? Beatae, illo ipsa? "


    },
     {
        _id:"5",
        name:"Gadgets",
        image:{
            path:"/images/hero.png",
            public_id:"/public/images/hero"
        },
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum accusantium mollitia voluptatum beatae soluta praesentium, unde culpa ipsum, quo officia sequi id omnis alias aut harum eligendi? Beatae, illo ipsa? "


    }
    ,
     {
        _id:"6",
        name:"Gadgets",
        image:{
            path:"/images/hero.png",
            public_id:"/public/images/hero"
        },
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum accusantium mollitia voluptatum beatae soluta praesentium, unde culpa ipsum, quo officia sequi id omnis alias aut harum eligendi? Beatae, illo ipsa? "


    }
]
const CategoriesList = () => {
  return (
    <section className="px-10 py-10">
        {/* heading sections */}
   
        <header className="flex justify-between">

            {/* left */}
            <div>
                <h3 className=" text-lg font-semibold">Featured Categories</h3>
                <p className="text-sm text-text-secondary">Discover our featured categories</p>
            </div>
            {/* right */}
            <div>
                <Link href={"#"}>
                <div className=" flex items-center gap-1 text-text-secondary font-normal hover:text-primary transition-all duration-200 "> 
                    <span>Explore More</span>
                    <FaChevronDown size={15} className= "mt-0.5"/>
                </div>
                </Link>
            </div>

        </header>

{/* list categories */}

<div className= "grid grid-cols-5 gap-2 mt-5">

    {
        categories.map(category=><CategoryCard key= {category._id} category={category}/>)
    }
</div>


       </section>
  )
}

export default CategoriesList