import React from 'react';

const Header = (props) => (
        <div className="header center">
            <div className='container'>
                <h1 className="header__title">{props.title}</h1>
                {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>} 
            </div>
        </div>
    )

// Default value of Prop 

Header.defaultProps = {
    title: 'WeatherApp'
}

export default Header;