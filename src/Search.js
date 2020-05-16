import React from 'react';

const Search = (props) => {
    return(
        <div className='search-area'>
            <form onSubmit={props.searchBooks} action=''>
                <input onChange={props.handSearch} type='text'/>
                <button type='submit'>Click</button>
            </form>

        </div>
    );
}
export default Search;

