import React from 'react';
import MenuItem from '../menu-items/menu-item.componenets';

import SECTIONS_DATA from "./sections.data.js";



import './directory.style.scss';

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
          sections: SECTIONS_DATA
      }  
    }
    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps }) => <MenuItem key={id} {...otherSectionProps} />)
                }
            </div>
        )
    }
}

export default Directory;