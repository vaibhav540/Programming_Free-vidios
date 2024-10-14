import React, { useState } from 'react';
import {Paper,IconButton} from '@mui/material';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
  const SearchBar = () => { 
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (event)=>{
  // event.preventDefault();
    // alert('submit')
    console.log(event.keycode)
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }

  return (
    <Paper component="form" onSubmit={handleSubmit} sx={{
      borderRadius:20,
      border:'1px solid #e3e3e3',
      pl:2,
      boxShadow:'none',
      mr:{sm:5}
    }} >

      <input  style={{
        background:'transparent'
      }} className="search-bar" placeholder='Search...' 
      value={searchTerm}
      onChange={(event)=>{setSearchTerm(event.target.value)}}
      // onKeyDown={(event)=> console.log(event)}
      /> 
      <IconButton type="submit" sx={{p:"10px",color:'red' }}>
        <Search  />
      </IconButton>
    </Paper>
  )
}

export default SearchBar