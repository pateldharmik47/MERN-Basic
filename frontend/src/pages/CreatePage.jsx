import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import "./CreatePage.css"
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { NumericFormat } from 'react-number-format';


const CreatePage = () => {
    const [productData, setProductData] = useState({
        productName: "",
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
        console.log("productData In save", productData)
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
                        handleChange(e.target.value, "productName")
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
            </div>
        </div>
    )
}

export default CreatePage