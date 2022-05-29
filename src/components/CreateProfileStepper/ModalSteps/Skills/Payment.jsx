import React, {Suspense, useState, useEffect} from "react";
import {
  TextField, Box, Grid, Typography, Button, Modal, IconButton
} from "@material-ui/core";
import {
  Controller,
  useFormContext
} from "react-hook-form";

import Alert from "../../../Alert";
import Autocomplete from '@mui/material/Autocomplete';
import Select from 'react-select';
import { useDropzone } from 'react-dropzone';
import { Close as CloseIcon, CloudUpload as CloudUploadIcon } from '@material-ui/icons';
import ReactPlayer from 'react-player/lazy'
import ReactLoading from 'react-loading';

const maxFileSize = 82428800;
const PaymentForm = (props) => {
  const {allowNext, setPreview} = props;
    const { control } = useFormContext();
    const [alertType, setAlertType] = useState('');
  const [alertText, setAlertText] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const[open, setOpen] = useState(false);
  const [vendorOverView,setVendorOverview] = useState();
  const [fileUploaded, setFileUploaded] = useState(false);
  function handleInputChange(event, value) {
    console.log(value);
  }
  const getBase64 = (file) => new Promise(((resolve, reject) => {
    const reader = new FileReader();
    try {
      reader.readAsDataURL(file);
      reader.onload = () => { resolve(reader.result); };
    } catch (error) {
      reject(reader.error);
    }
  }));
  const validateFile = (file) => {
    if (file.size > maxFileSize) {
      setAlertType('error');
      setAlertOpen(true);
      setAlertText('File size is greator than 50');
      return {
        text: 'invalid',
      };
    }
    return null;
  };
  const {
    acceptedFiles, fileRejections, getRootProps, getInputProps,
  } = useDropzone({
    accept: '.MP4',
    validator: validateFile,
  });
  useEffect(()=>{
    if(acceptedFiles.length > 0) {
      const item = getBase64(acceptedFiles[0])
      .then(resp => {
        setVendorOverview(resp)
        setPreview(resp);
      });
      allowNext(true);
      setOpen(true)
    }
  }, [acceptedFiles])

    return (
      <>
                <Typography variant={'h6'} style={{marginTop:'1px'}}>
                  Select skills
                </Typography>
                <Controller
                control={control}
                name="skills"
                style={{margin:'1em'}}
                render={({ field }) => (
                    <Select
                     required
                      isMulti
                      id="cardNumber"
                      label="Select Skills"
                      variant="outlined"
                      placeholder="Select Skills"
                      options={top100Films}
                      margin="normal"
                      {...field}
                    />
                  )}
                />
             {!open && (
          <Box component="div" style={{ border: '1.5px solid grey', borderRadius: '12px', padding: '1em 2em', margin:'1em'}}>
            <Grid container alignItems="center" justify="center" direction="column">
              <CloudUploadIcon fontSize="large" />
              <section className="container">
                <div {...getRootProps({ className: 'dropzone' })}>
                  <input onChange={() => setFileUploaded(false)} {...getInputProps()} />
                  <Typography variant="h3" color="textSecondary" style={{ fontSize: '18px', marginLeft: '1em', marginTop: '1em' }}>Drag & Drop file here</Typography>
                </div>
              </section>
              <Typography color="textSecondary" style={{ fontSize: '15px', marginBottom: '1em' }}>OR</Typography>
              <Button onChange={() => setFileUploaded(false)} color="primary" variant="outlined">
                <section className="container">
                  <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <Typography color="primary">Upload file</Typography>
                  </div>
                </section>
              </Button>
            </Grid>
          </Box>
          )}
          {open && (
            <Grid container style={{justifyContent:"center"}}>
              <Grid item>
             <Button
                variant="contained"
                color="primary"
                style={{margin:'1em'}}
                onClick={()=>{setOpen(false)}}
              >
                Remove
              </Button>
              </Grid>
            <Grid item width="auto">
              <ReactPlayer url={vendorOverView}
              volume={1}
              playing={true}
              fallback = {<ReactLoading type={"spin"} color="#fff" height={"100%"} width={"100%"} />}
           width='90%'
           height='90%'
           style={{marginLeft:'1em'}}
          />
            </Grid>
            </Grid>
            )}
          <Alert
          open={alertOpen}
          alertText={alertText}
          alertType={alertType}
          handleClose={() => setAlertOpen(false)}
        />
      </>
    );
  };

const top100Films = [
  { label: 'Labour', value: 1 },
  { label: 'Technician', value: 2 },
  { label: 'Painter', value: 3 },
  { label: 'Mason', value: 4 },
];
  export default PaymentForm;