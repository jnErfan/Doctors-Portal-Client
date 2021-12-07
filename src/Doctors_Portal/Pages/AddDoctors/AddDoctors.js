import { PhotoCamera } from '@mui/icons-material';
import { Button, IconButton,  TextField } from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';

const Input = styled('input')({
    display: 'none',
  });

const AddDoctors = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);
        console.log(image);
        fetch('http://localhost:5000/doctorsAdd', {
            method: 'POST',
            body: formData
        })
        
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor added successfully')
                    console.log('doctor added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
          <div>
          <h1 style={{ textAlign: 'center', marginBottom: '20%' }}>Add A Doctor</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    onChange={e => setName(e.target.value)} required/>
                <br />
                <TextField sx={{mt:"20px"}}
                    label="Email"
                    type="email"
                    onChange={e => setEmail(e.target.value)} required />
                <br />
            
                <label htmlFor="icon-button-file">
  <Input accept="image/*" id="icon-button-file" type="file" 
                    onChange={e => setImage(e.target.files[0])}/>
  <IconButton color="primary" aria-label="upload picture" component="span">
    <PhotoCamera />
  </IconButton>
</label>
                <br />
                <Button variant="contained" type="submit"  style={{width:"100%", marginTop:"20px"}}>
                    Add Doctor
                </Button>
            </form>
            {success && <p style={{ color: 'green' }}>{success}</p>}
          </div>
        </div>
    );
};

export default AddDoctors;