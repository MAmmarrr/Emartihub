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
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 5,
};

function BasicModal({label}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <Button color="secondary" onClick={handleOpen} sx={{fontSize: 14, fontWeight: 'bold'}}>{label}</Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} sm='100'>
        <Grid container sm={12}>
          <Grid item xs={1}>
        <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
         </IconButton>
          </Grid>
          <Grid item xs={4}>

          </Grid>
          <Grid item xs={4}>
            <Typography style={{marginTop:'1em'}}>
            Create New Profile
            </Typography>
          </Grid>
          <ImageUploadCard vendorImage={(file) => console.log(file)}/>
      </Grid>
        <Paper component={Box} p={5}>
          <LinearStepper />
        </Paper>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;