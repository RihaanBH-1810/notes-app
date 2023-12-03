import react from 'react';

const Header = ({handleToggleDarkMode}) => {
    return(
        <div className='header'>
            <h1>Notes</h1>
            <button className='tbtn' onClick={() => 
                handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}>
                &#9728;
            </button>
        </div>
    )
} 

export default Header;