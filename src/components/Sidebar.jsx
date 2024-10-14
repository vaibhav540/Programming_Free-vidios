import React from 'react'
import { Stack } from '@mui/material';
import { categories } from '../utlis/constants';
const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack direction="column" sx={{overflowY: "auto", flexDirection:{md:'row'}}}>
        {categories.map((category)=>(
            <button className='category-btn' style={{
                background: category.name === selectedCategory && '#FC1503',color:'white'
            }}
            onClick={()=> setSelectedCategory(category.name)}
            key={category.name}>
                <span style={{
                    color:category.name === selectedCategory ? 'white' : 'red', marginRight:'15px'
                }}>{category.icon}</span>
                <span style={{
                    opacity: category.name === selectedCategory ? '1' : '0.8'
                }}>{category.name}</span>
            </button>
        )
        )}
    </Stack>
  )
}

export default Sidebar