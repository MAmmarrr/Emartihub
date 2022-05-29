import React from "react";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {
  Controller,
  useFormContext,
} from "react-hook-form";

const BasicForm = (props) => {
  const {allowNext} = props;
    const { control } = useFormContext();
    return (
      <>
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <TextField
              id="first-name"
              label="First Name"
              variant="outlined"
              placeholder="Enter Your First Name"
              fullWidth
              required
              margin="normal"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="lastName"
          style={{height:'500px'}}
          render={({ field }) => (
            <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            required
              margin="normal"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <TextField
            id="description"
            label="description"
            variant="outlined"
            placeholder="Enter description"
            required
            inputProps={{
              minLength:10,
              style: {
                height: "90px",
                TextAlign: 'top',
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

export default BasicForm