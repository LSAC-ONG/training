import React from 'react';

import BoardTitle from '../../atoms/BoardTitle/BoardTitle';
import Item from '../../atoms/Item/Item';

// props = {title, items}

export default function Board({ title, items }) {
    return (
        <div className="bg-blue-400 w-1/4 rounded-lg h-full">
        <div>
            <BoardTitle title = {title}/>
        </div>
        <div>
            {
                items.map(item => {
                    return (
                        <Item title = {item}/>
                    )
                })
            }
        </div>
    </div>
    )
}