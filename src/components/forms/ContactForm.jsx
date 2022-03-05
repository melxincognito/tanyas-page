import * as React from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
// form imports MUI
import {
  Card,
  CardContent,
  TextField,
  Typography,
  MenuItem,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

// forms global variables
const servicesOptions = [
  { value: "Residential", label: "Residential Real Estate" },
  { value: "Commercial", label: "Commercial Real Estate" },
  { value: "Other", label: "Other" },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ContactForm() {
  // form functionality variables

  const [open, setOpen] = React.useState(false);

  const [serviceInquiry, setServiceInquiry] = React.useState("Residential");

  const handleServiceChange = (event) => {
    setServiceInquiry(event.target.value);
  };

  // open and close dialog box
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    routeChange();
  };

  // navigate back to homepage after the form is submitted
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  // form forward email functions
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7ttis48",
        "template_i7g2cj8",
        form.current,
        "user_wKGjgdwvgNqEiJyejXWHN"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // styles variables
  const cardStyles = {
    padding: 4,
    borderRadius: 5,
    bgcolor: "secondary.light",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
  };

  const formTitleDisplayStyles = {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    overflow: "hidden",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
    marginTop: 2,
    bgcolor: "rgba(255, 255, 255, 0.39)",
    borderRadius: "4px 25px 4px 25px",
    color: "secondary.main",
  };
  const textFieldStyles = {
    margin: "10px 0px",
    bgcolor: "rgba(255, 255, 255, 0.69)",
    borderRadius: 2,
  };

  const submitButtonStyles = {
    gap: 1,
    backgroundColor: "primary.main",
  };

  return (
    <>
      <Card sx={cardStyles}>
        <CardContent sx={formTitleDisplayStyles}>
          <Typography variant="h4"> Contact Me</Typography>
        </CardContent>

        <CardContent>
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              fullWidth
              sx={textFieldStyles}
              label="Name"
              id="contactName"
              name="name"
              required
            />
            <TextField
              fullWidth
              sx={textFieldStyles}
              label="Contact Phone"
              type="tel"
              id="contactPhone"
              name="phone"
              required
            />
            <TextField
              fullWidth
              sx={textFieldStyles}
              label="Contact Email"
              type="email"
              id="contactEmail"
              name="userEmail"
              required
            />
            <TextField
              sx={textFieldStyles}
              id="serviceInquirySelection"
              fullWidth
              select
              label="Service Category"
              value={serviceInquiry}
              onChange={handleServiceChange}
              required
              name="serviceCategory"
            >
              {servicesOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <FormControl required>
              <FormLabel id="radio-buttons-group-label">
                Preferred method of contact:
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="radio-buttons-group-label"
                name="contactMethod"
              >
                <FormControlLabel
                  value="Phone"
                  control={<Radio />}
                  label="Phone Call"
                />
                <FormControlLabel
                  value="Text"
                  control={<Radio />}
                  label="Text"
                />
                <FormControlLabel
                  value="email"
                  control={<Radio />}
                  label="E-mail"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              fullWidth
              multiline
              sx={textFieldStyles}
              rows={5}
              label="Message"
              id="fullWidth"
              name="message"
              required
            />
            <Button
              variant="contained"
              sx={submitButtonStyles}
              type="submit"
              onClick={handleClickOpen}
            >
              <SendIcon /> Submit
            </Button>
          </form>
        </CardContent>
      </Card>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Thanks for reaching out!!"}</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            I'll get back to you as soon as I can ☺️
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
