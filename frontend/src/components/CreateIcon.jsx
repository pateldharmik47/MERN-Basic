import React from 'react'
import { createSvgIcon } from '@mui/material/utils';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
const CreateIcon = () => {
    const PlusIcon = createSvgIcon(
        // credit: plus icon from https://heroicons.com
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>,
        'Plus',
    );
    const navigate = useNavigate();
    const handleNavigatetoCreatePage = () => {
        navigate("/create")
    }

    return (
        <Button startIcon={<PlusIcon />} sx={{ color: 'white' }} onClick={() => handleNavigatetoCreatePage()}>
            Create New Product
        </Button>
    )
}

export default CreateIcon