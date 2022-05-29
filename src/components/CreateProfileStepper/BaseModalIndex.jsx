import LinearStepper from "./Index";

import { Paper, Box } from "@material-ui/core";
import * as React from 'react';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from '@mui/material/Modal';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import ImageUploadCard from './GigImage';
import useWindowDimensions from "../../Services/getWindowDimensions";


function BasicModal({label, preview}) {
const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: (windowWidth <= 800 ? '100%' : '40%'),
    height: (windowHeight <= 700 && '100%'),
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 5,
  };
  const [open, setOpen] = React.useState((preview ? true : false));
  const [imageUploaded, setImageUploaded] = React.useState();
  const [enableWarning,setEnableWarning] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const getBase64 = (file) => new Promise(((resolve, reject) => {
    const reader = new FileReader();
    try {
      reader.readAsDataURL(file);
      reader.onload = () => { resolve(reader.result); };
    } catch (error) {
      reject(reader.error);
    }
  }));
  return (
    <div>
      {!preview && (<Button color="secondary" onClick={handleOpen} sx={{fontSize: 14, fontWeight: 'bold'}}>{label}</Button>)}
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Grid container xs={12} justifyContent="space-between" alignItems='center'>
          <Grid item xs={1}>
        <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
         </IconButton>
          </Grid>
          <Grid item xs={7} style={{margin:'1em'}}>
            <Typography variant='h6' style={{  fontWeight:'bold'}}>
            Create New Gig
            </Typography>
          </Grid>
          <ImageUploadCard warning={enableWarning} vendorImage={(file) => {
            getBase64(file).then(res => setImageUploaded(res))
            }}/>
      </Grid>
        <Paper component={Box} p={5}>
          <LinearStepper gigImage={imageUploaded} sentWarning={() => setEnableWarning(true)}/>
        </Paper>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;