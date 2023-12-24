import SearchIcon from '@mui/icons-material/Search';

const SearchContact = () => {
    const handleSearch = () =>{

    }
  return (
    <div>
    <div className='searchbar'>
        <SearchIcon className='avatar'/>
        <input className='search' type='text' name='search' placeholder='Search...' onChange={handleSearch}/>
    </div>    
    </div>
  )
}

export default SearchContact