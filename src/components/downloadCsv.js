import React from 'react';
import { CSVLink, CSVDownload } from "react-csv";

const DownloadCsv = (props) => {

    const headers = [
        { label: "Name", key: "name" },
        { label: "Given Name", key: "givenname" },
        { label: "Group Membership", key: "label" },
        { label: "Phone 1 - Value", key: "phone1" },
        
    ];

    const data = 
    props.state.numbersArray.map((number, index)=>{
return {name : `cst${index}`, label: `${props.state.label} ::: * myContacts`, phone1: `${number}`}

    })
    
    return (
        <div>
{console.log(props.state)}
            <CSVLink data={data} headers={headers} filename={`${props.state.account}.csv`}>
               <button
                className="p-3 w-full text-center mt-6 flex flex-col jus items-center bg-white rounded-2xl shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-transparent hover:text-white text-gray-900 ease-linear transition-all duration-150">
                   Download File 
               </button>
            </CSVLink>
        </div>
    )
}

export default DownloadCsv
