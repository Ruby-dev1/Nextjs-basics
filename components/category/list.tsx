"use client"
import React from 'react'
import CategoryCard from './card'
import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from '@/api/category.api'
import { ICategory } from '@/types/category.types'

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

const CategoryList = () => {

    const {isLoading, data} = useQuery({
        queryFn: getAllCategories,
        queryKey:["get-all-category"]
    })
  return (
  <div className= "grid grid-cols-5 gap-2 mt-5">

    {
        data?.data?.map((category:ICategory)=><CategoryCard key= {category._id} category={category}/>)
    }
</div>
  )
}

export default CategoryList