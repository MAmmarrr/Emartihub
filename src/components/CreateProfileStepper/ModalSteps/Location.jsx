import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {
  Controller,
  useFormContext,
} from "react-hook-form";

const GetLocation = (props) => {

    const { onLocationFailed } = props;
    const [allowed, setAllowed] = useState();
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          console.log(position);
          onLocationFailed(false);
        },
        function(error) {
          onLocationFailed(true);
        }
      );
    }, [allowed])
    const { control } = useFormContext();
    return (
      <>
        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <TextField
            id="description"
            label="description"
            variant="outlined"
            placeholder="Enter description"
            inputProps={{
              style: {
                height: "200px",
                TextAlign: 'top'
              },
            }}
            fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </>
    );
  };

  GetLocation.propTypes = {
    onLocationFailed: PropTypes.func.isRequired,
  };
export default GetLocation