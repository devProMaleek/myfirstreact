import React from 'react';
import { Outlet, Link } from "react-router-dom";


// Layout Component
const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/blogs'>Blogs</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    )
}

// Export component

export default Layout;