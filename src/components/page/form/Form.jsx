import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const currencies = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "User",
    label: "User",
  },
  {
    value: "Manager",
    label: "Manager",
  },
];

const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const regNumber = /^[0-9]{8,15}$/;

function Form() {
  const [open, setOpen] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
 
    setOpen(false);
  };

  const onSubmit = () => {
    console.log(" Form Submitted ");
    handleClick();
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack direction="row" spacing={2}>
        <TextField
          {...register("firstName", { required: true, maxLength: 20 })}
          error={Boolean(errors.firstName)}
          helperText={errors.firstName ? "this is required" : null}
          sx={{ flex: 1 }}
          label="firstName"
          variant="filled"
        />
        <TextField
          {...register("lastName", { required: true, maxLength: 20 })}
          error={Boolean(errors.lastName)}
          helperText={errors.lastName ? "this is required" : null}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>
      <TextField
        {...register("email", { required: true, pattern: regEmail })}
        error={Boolean(errors.email)}
        helperText={errors.email ? "email is not valid" : null}
        sx={{ flex: 1 }}
        label="Email"
        variant="filled"
      />
      <TextField
        {...register("number", { required: true, pattern: regNumber })}
        error={Boolean(errors.number)}
        helperText={errors.number ? "phone number is not valid" : null}
        sx={{ flex: 1 }}
        label="Phone"
        variant="filled"
      />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />

      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="Admin"
        variant="filled"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
        <Button
          // onClick={handleClick}
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
          color="primary"
        >
          create new user
        </Button>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Has created a new user"
          action={action}
        />
      </Box>
    </Box>
  );
}

export default Form;
