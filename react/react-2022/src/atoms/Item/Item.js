import React from 'react';

export default function Item({ title }) {
    return (
        <div className="text-white text-xl p-2 truncate">
            { title }
        </div>
    );
}