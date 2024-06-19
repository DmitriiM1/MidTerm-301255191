import React, { useState } from 'react';
import "./AddProduct.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';

export default function AddProduct() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        alert(JSON.stringify(formData, null, 2));
    };

    const handleCancel = () => {
        setFormData(initialFormState);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="on"
                onSubmit={handleSubmit}
            ></Box>

            <TextField
                id="name"
                name="name"
                label="Name"
                variant="filled"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
            />

            <TextField
                id="description"
                name="description"
                label="Description"
                variant="filled"
                value={formData.description}
                onChange={handleChange}
                margin="normal"
                required
            />

            <TextField
                id="category"
                name="category"
                label="Category"
                variant="filled"
                value={formData.category}
                onChange={handleChange}
                margin="normal"
                required
            />

            <TextField
                id="filled-number"
                name="quantity"
                label="Quantity"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={handleChange}
                value={formData.quantity}
                variant="filled"
                margin="normal"
                required
            />

            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                <InputLabel htmlFor="filled-adornment-amount">Price</InputLabel>
                <FilledInput
                    id="filled-adornment-amount"
                    name="price"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
            </FormControl>

            <button type="submit">SUBMIT</button>
            <button type="reset" >CANCEL</button>
        </form>
    );

}