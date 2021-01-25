import React from 'react'

export default function CovidList({ Covid }) {
    return (
        <div>
            {Covid.map(p =>(
                <div >{p}</div>
            ))}
        </div>
    )
}
