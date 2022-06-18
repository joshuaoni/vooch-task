import React from 'react';

import { Button } from 'antd';

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='space'></div>
            <div className='cont'>
                <div>
                    <h2>ATools<span>.</span></h2>
                </div>
                <div>
                    <Button type="primary">Start Free Trial</Button>
                    <Button type="primary">Login</Button>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;