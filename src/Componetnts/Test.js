

import Select, { SelectChangeEvent } from '@mui/material/Select';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArchiveIcon from '@mui/icons-material/Archive';
import { InboxOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
import { message, Upload, } from 'antd';
import { RxUpload } from "react-icons/rx";
import MenuItem from '@mui/material/MenuItem';
//-----------------------Accordion--------------------//


//------------mui materials--------------//
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import React, { useRef, useState } from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { makestyles } from '@mui/material/Box'
import Autocomplete from '@mui/material/Autocomplete'

const Test = () => {
  let navigate = useNavigate
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    const file = fileInputRef.current.files[0];

    console.log(file);
  };
  const handleInputChange = (event) => {
    const input = event.target.value;
    event.target.value = input.replace(/[^0-9]/g, ''); // Remove non-numeric characters
  };

  // const options = [
  //   { label: 'Tamil Nadu', value: "Tamil Nadu" },
  //   { label: 'Andhra Pradesh', value: "Andhra Pradesh" },
  //   { label: 'Karnataka', value: "Karnataka" },

  // ]
  // const handleInputChange = (event) => {
  //   // Access the value entered in the TextField
  //   const inputValue = event.target.value;

  //   // Perform any desired actions with the input value
  //   console.log('Input value:', inputValue);
  // };

  const options = [
    { label: 'Tamil Nadu', value: 'Tamil Nadu' },
    { label: 'Andhra Pradesh', value: 'Andhra Pradesh' },
    { label: 'Karnataka', value: 'Karnataka' },
  ]; const options1 = [
    { label: 'Chennai', value: 'Chennai' },
    { label: 'Bangalore', value: 'Bangalore' },
    { label: 'Pune', value: 'Pune' },
  ];
  // const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
  // const handleFileUpload1 = () => {
  //   const file = fileInputRef.current.files[0];
  //   if (file && allowedImageTypes.includes(file.type)) {
  //     // Valid image file selected, proceed with upload logic
  //     console.log(file);
  //   } else {
  //     // Invalid file type selected, show an error message or perform desired action
  //     console.log('Please select a valid image file.');
  //   }
  // };

  // function blockinvalidchar(e){
  //   const regex = /^[0-9]*$/;
  //   if (!regex.test(e.target.value)){
  //   e.preventDefault()
  //   }
  //   }
  const blockinvalidchar = (e) => {
    const regex = /^[0-9]+$/;
    console.log(regex.test(e.key), 'refsd')
    if (!regex.test(e.key)) {
      e.preventDefault()
      console.log('True')
    }
  }
  return (
    // <div>
    <>


      {/* <div className='searchbox'>
        <TextField label="Search" variant="outlined" size='small' className='searchboxinput' />

      </div> */}
      <div className='header'>
        {/* <div className='header-content'> */}
        <h3 className='h3'>
          Company Imformation
        </h3>
        <p className='p2'>
          Make Changes to company related info here
        </p>
        <div className='btn' >
          <Button variant="contained" >Cancel</Button> {''} {''}
          <Button variant="contained">Save</Button>

        </div>
        {/* </div> */}
      </div>

      <div className='card0'>
        <Card className='card'>
          <h3 className='h3'>Customer Information</h3>
          <CardContent className='cardcontent'>
            <div className='row-1'>

              <div className='txt-1'>
                <p className='p1'>Company Name* </p>
                <TextField className='t1' size='small' type="text" />
              </div>

              <div className='txt-1'>
                <p className='p1'>Company Type*</p>
                <TextField size='small' type="text" />
              </div>

              <div className='txt-1'>
                <p className='p1'>Organization*</p>
                <TextField size='small' type="text" />
              </div>

              <div className='txt-1'>
                <p className='p1'>Email-Id*</p>
                <TextField size='small' type="email" />
              </div>

            </div>

            <div className='row-2'>

              <div className='test-2'>
                <p className='p1'>Contact No* </p>
                {/* <input type="text"className='t1' onKeyPress={(e)=>{blockinvalidchar(e)}} /> */}
                {/* <TextField onKeyPress={(e)=>{blockinvalidchar(e)}} type='text'sx={{width: '26ch', marginLeft:"3%"}} /> */}
                <TextField className='t1' size='small' type="text" onKeyPress={(e) => { blockinvalidchar(e) }} sx={{ width: '26ch', marginLeft: "3%" }} />
              </div>

              <div className='txt-2'>
                <p className='p1'>Country*</p>
                <TextField size='small' type="text" sx={{ width: '26ch', marginLeft: "8%" }} />
              </div>

              <div className='txt-3'>
                <p className='p1'>State*</p>

                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={options}
                  sx={{ width: '26ch', marginTop: "-2%", marginLeft: "10%" }}
                  renderInput={(params) => <TextField {...params} size='small' />}
                />
              </div>
              <div className='txt-3'>

                <p className='p1'>City*</p>

                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={options1}
                  sx={{ width: '26ch', marginTop: "-2%", marginLeft: "12%" }}
                  renderInput={(params) => <TextField {...params} size='small' />}
                />
              </div>



            </div>



            <div className='row-3'>

              <div className='txt-1'>
                <p className='p1'>Established On*</p>
                <TextField size='small' type="date" style={{ width: "220px" }} />
              </div>

              <div >
                <p className='p1'>Status*</p>
                <TextField size='small' className='status' type="text" defaultValue={'Active'} />
              </div>

              <div className='txt-1'>
                <p className='p1'>Customer ref no*</p>
                <TextField size='small'
                  type="text" onKeyPress={(e) => { blockinvalidchar(e) }}
                  pattern="[0-9]*"  // Add a pattern attribute to allow only numbers
                  onInput={(e) => e.target.value = e.target.value.replace(/[^\d]/g, '')}  // Remove any non-numeric characters on input
                  onChange={handleInputChange}
                />

              </div>

              <div className='txt-1'>
                <p className='p1'>PO.No*</p>
                <TextField size='small' type="text" onKeyPress={(e) => { blockinvalidchar(e) }} />
              </div>

            </div>
          </CardContent>

        </Card>
      </div >
      <div className='uploader-body'>


        <form className='uploader-form'>


          
         <div>

         
            {/* <RxUpload size='25px' color='blue'/> */}
            <input type="file" accept=".jpg, .png, .gif" label='Select logo' className='input-file' />
            <svg
              viewBox="-400 0 2024 1024"
              fill="currentColor"
              height="5em"
              width="5em"
             className='svg-icon'
            >
              <path d="M518.3 459a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z" />
              <path d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z" />
              
            </svg>
           
            {/* <button className='upload-btn' onClick={handleFileUpload}>Upload</button> */}
            </div>
        </form>
      </div>



    </>

  )
}


export default Test;