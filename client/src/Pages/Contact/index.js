import React, { Component, Fragment } from 'react';
import Wrapper from '../../Component/Wrapper';
import { TextField, Typography, Button, Grid } from '@material-ui/core/';
import './style.css';

const styles = {
  text: {
    marginBottom: 10
  },
  message: {

  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 400,
    margin: "auto",
    padding: 16
  },
  spacing: {
    padding: "0.5rem"
  }
}

class Contact extends Component {

  state = {
    name: '',
    email: '',
    message: ''
  }

  handleChange = key => e => {
    this.setState({ [key]: e.target.value })
  }

  render() {

    // const { name, email, message } = this.state;

    return (
      <Fragment>
        <Wrapper
        >

          <Typography variant="h6">
            Contact Infomation:
              </Typography>
          <br></br>

          <div>
            <h7>Phone Number: <a href="tel:862-208-2672">(862)-208-2672</a></h7><br></br>
            <h7 style={styles.spacing}><a href={"mailto:" + 'kamzh1988@gmail.com'}>Email</a></h7>
            <h7 style={styles.spacing}><a href="https://www.linkedin.com/in/kinzhao/">LinkedIn</a></h7>
            <h7 style={styles.spacing}><a href="https://github.com/kamzh88">Github</a></h7>
          </div>

          {/* <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h5">
                Contact Me
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="h6">
                Contact Infomation:
              </Typography>
              <div>
                <h7>Phone: (862)208-2672 </h7><br></br>
                <h7>Email: kamzh1988@gmail.com</h7><br></br>
                <h7>LinkedIn: </h7><br></br>
                <h7>Github: </h7><br></br>
              </div>
            </Grid>
            <Grid item xs={7}>
              <form
                style={styles.form}
                onSubmit={this.onSubmit}
                xs={6}
              >
                <TextField
                  style={styles.text}
                  variant={"outlined"}
                  required
                  type={"text"}
                  label={"Name"}
                  value={name}
                  onChange={this.handleChange("name")}
                />
                <TextField
                  style={styles.text}
                  variant={"outlined"}
                  required
                  type={"email"}
                  label={"Email"}
                  value={email}
                  onChange={this.handleChange("email")}
                />
                <TextField
                  style={styles.text}
                  required
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows="4"
                  value={message}
                  variant="outlined"
                />
                <Button
                  type={"submit"}
                  fullWidth
                  variant={"contained"}
                  color={"primary"}
                >
                  Send
            </Button>
              </form>
            </Grid>
          </Grid> */}
        </Wrapper>
      </Fragment >
    );
  }
}

export default Contact;