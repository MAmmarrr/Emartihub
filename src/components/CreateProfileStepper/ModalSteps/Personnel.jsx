import React from "react";
import {
  TextField,
} from "@material-ui/core";
import {
  Controller,
  useFormContext,
} from "react-hook-form";

const PersonalForm = () => {
    const { control } = useFormContext();
    return (
      <>
        <Controller
          control={control}
          name="address1"
          render={({ field }) => (
            <TextField
              id="address1"
              label="Address 1"
              variant="outlined"
              placeholder="Enter Your City"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="address2"
          render={({ field }) => (
            <TextField
              id="address2"
              label="Address 2"
              variant="outlined"
              placeholder="Enter Your Address 2"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </>
    );
  };

  export default PersonalForm;