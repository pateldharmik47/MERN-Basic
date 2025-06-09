import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import "./CreatePage.css"
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { NumericFormat } from 'react-number-format';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePage = () => {
    const apiBaseUrl = "http://localhost:5000";
    const [productData, setProductData] = useState({
        name: "",
        price: "",
        image: ""
    })

    const handleChange = (value, key) => {
        setProductData({
            ...productData,
            [key]: value
        })
    }

    const handleClick = () => {
        fetch(`${apiBaseUrl}/api/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`${data?.name} added successfully!`);
                    setProductData({});
                }
                else {
                    toast.error(`${data?.message}`);
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="main">
            <div className="createProduct">
                Create New Product
            </div>
            <div className="productDetail">
                <TextField
                    id="standard-error-helper-text"
                    label="Product Name"
                    placeholder="Enter your product name"
                    // helperText="Incorrect entry."
                    onChange={(e) => {
                        handleChange(e.target.value, "name")
                    }}
                    variant="standard"
                />
                <NumericFormat
                    value={productData.price}
                    onChange={(e) => handleChange(e.target.value, "price")}
                    customInput={TextField}
                    thousandSeparator
                    valueIsNumericString
                    prefix="₹"
                    variant="standard"
                    label="Price"
                />
                <TextField
                    // error
                    id="standard-error-helper-text"
                    label="Imange"
                    placeholder="Image URL"
                    onChange={(e) => handleChange(e.target.value, "image")}
                    // helperText="Incorrect entry."
                    variant="standard"
                />
                <Button variant="contained" onClick={() => handleClick()}>Add Product</Button>
                <ToastContainer position="top-right" autoClose={3000} />
            </div>
        </div>
    )
}

export default CreatePage