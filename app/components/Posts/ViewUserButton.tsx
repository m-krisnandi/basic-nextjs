"use client"

import React from "react";

interface ViewUserButtonProps {
    userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({userId}) => {
    const handleClick = () => alert(`User ID: ${userId}`)
    return (
        <>
            <button className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" 
            onClick={handleClick}>Lihat User
            </button>
        </>
    )
}

export default ViewUserButton