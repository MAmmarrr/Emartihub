// imports the React Javascript Library
import React from "react";
//Card
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";

import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import blue from "@material-ui/core/colors/blue";

import Icon from "@material-ui/core/Icon";
import PageviewIcon from "@material-ui/icons/Pageview";
import SearchIcon from "@material-ui/icons/Search";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import CollectionsIcon from "@material-ui/icons/Collections";

import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";

// Search
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import ReplayIcon from "@material-ui/icons/Replay";

//Tabs
import { withStyles } from "@material-ui/core/styles";
import { ContactSupportOutlined } from "@material-ui/icons";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  icon: {
    margin: theme.spacing.unit * 2
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800]
    }
  },
  cardHeader: {
    textalign: "center",
    align: "center",
    backgroundColor: "white"
  },
  input: {
    display: "none"
  },
  title: {
    color: blue[800],
    fontWeight: "bold",
    fontFamily: "Montserrat",
    align: "center"
  },
  button: {
    color: blue[900],
    margin: 10
  },
  secondaryButton: {
    color: "gray",
    margin: 10
  },
  typography: {
    margin: theme.spacing.unit * 2,
    backgroundColor: "default"
  },

  searchRoot: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  searchInput: {
    marginLeft: 8,
    flex: 1
  },
  searchIconButton: {
    padding: 10
  },
  searchDivider: {
    width: 1,
    height: 28,
    margin: 4
  }
});

class ImageUploadCard extends React.Component {
  state = {
    mainState: "initial", // initial, search, gallery, uploaded
    imageUploaded: 0,
    selectedFile: null,
  };
 getBase64 = (file) => new Promise(((resolve, reject) => {
    const reader = new FileReader();
    try {
      reader.readAsDataURL(file);
      reader.onload = () => { resolve(reader.result); };
    } catch (error) {
      reject(reader.error);
    }
  }));
  handleUploadClick = event => {
    var file = event.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
    this.props.vendorImage(file);
    this.setState({gigImage: file});
    reader.onloadend = function(e) {
      this.setState({
        selectedFile: [reader.result]
      });
    }.bind(this);
    console.log(this.state)

    this.setState({
      mainState: "uploaded",
      selectedFile: event.target.files[0],
      imageUploaded: 1,
      gigImage: file,
    });
    console.log(this.state)
  };

  handleSearchClick = event => {
    this.setState({
      mainState: "search"
    });
  };

  renderInitialState() {
    const { classes, theme } = this.props;

    return (
      <React.Fragment>
        <CardContent>
          <Grid container style={{width: 'auto'}}justify="center" alignItems="center">
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={this.handleUploadClick}
            />
            <label htmlFor="contained-button-file">
              <Fab component="span" className={classes.button}>
                <AddPhotoAlternateIcon />
              </Fab>
            </label>
          </Grid>
        </CardContent>
      </React.Fragment>
    );
  }

  renderSearchState() {
    const { classes } = this.props;

    return (
      <Paper className={classes.searchRoot}>
        <InputBase className={classes.searchInput} placeholder="Image URL" />
        <IconButton
          className={classes.button}
          aria-label="Search"
          onClick={this.handleImageSearch}
        >
        </IconButton>
        <Divider className={classes.searchDivider} />
        <IconButton
          color="primary"
          className={classes.secondaryButton}
          aria-label="Close"
          onClick={this.handleSeachClose}
        >
          <CloseIcon />
        </IconButton>
      </Paper>
    );
  }

  renderUploadedState() {
    const { classes, theme } = this.props;

    return (
      <React.Fragment>
        <CardActionArea onClick={this.imageResetHandler}>
          <img
            width='100%'
            height='100%'
            className={classes.media}
            src={this.state.selectedFile}
          />
        </CardActionArea>
      </React.Fragment>
    );
  }

  imageResetHandler = event => {
    console.log("Click!");
    this.setState({
      mainState: "initial",
      selectedFile: null,
      imageUploaded: 0
    });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <Card className={this.props.cardName}>
            {(this.state.mainState == "initial" && this.renderInitialState()) ||
              (this.state.mainState == "search" && this.renderSearchState()) ||
              (this.state.mainState == "gallery" &&
                this.renderGalleryState()) ||
              (this.state.mainState == "uploaded" &&
                this.renderUploadedState())}
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImageUploadCard);
