import React from 'react'

const ReadArraytoHtml = (props) => {
    return (
        <div className="bg-gray-600 rounded-2xl p-8">
            {props.data.map((item, index)=><p key={index}>{item}</p>)}
        </div>
    )
}

export default ReadArraytoHtml
