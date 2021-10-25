import React, { useState } from 'react';
import './Directory_30.scss';
import MenuItem_30 from '../components/MenuItem_30';
import items from './menu-item-data';

const Directory_30 = () => {
    const [menuItems, setMenuItems] = useState(items);
    console.log('menuItems', menuItems);
    return (
        <div className="directory-menu">
            {
                menuItems.map(item => {
                    const { id, name, remoteUrl, size } = item;
                    return (
                        <MenuItem_30 key={id} name={name} remoteUrl={remoteUrl} size={size} />
                    )
                })
            }
        </div>
    )
}

export default Directory_30;