export default (theme) => ({
    root: {
      padding: theme.spacing(3),
    },
    row: {
      height: '42px',
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing(1),
    },
    spacer: {
      flexGrow: 1,
    },
    selectGroup: {
      flexGrow: 1,
      marginRight: theme.spacing(1),
    },
    filterGroup: {
      flexGrow: 1,
      marginRight: theme.spacing(50),
    },
    selectGroupFilter: {
      flexGrow: 3,
      marginRight: theme.spacing(2),
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    editRecipientStrip: {
      width: '1em', height: '10.05em',
    },
    recipientStrip: {
      width: '1em', height: '3.25em',
    },
    recipient: {
      height: '3.5em',
      border: '2px solid grey',
      marginLeft: '4.4em',
    },
    recipientMain: {
      marginTop: '0.5em',
    },
    recipientInfoName: {
      fontSize: '12px',
      fontWeight: 'bold',
      marginTop: '1em',
      marginLeft: '2em',
    },
    recipientInfoEmail: {
      fontSize: '12px',
      fontWeight: 'bold',
      marginLeft: '2em',
  
    },
    editRecipient: {
      border: '2px solid grey',
      marginLeft: '3.29em',
    },
    signinOrder: {
      maxWidth: 50,
      display: 'inline-block',
      marginLeft: '1em',
      padding: 0,
    },
    signinOrderExpanded: {
      marginTop: '4.5em',
      minWidth: '3em',
      display: 'inline-block',
      maxLength: 2,
    },
    customizeIcon: {
      marginTop: '1.5em', fontSize: '14px',
    },
    customizeIconExpanded: {
       fontSize: '14px',
    },
    editRecipientIcon: {
      marginTop: '1em', marginLeft: '0.5em',
    },
    noPadding: {
      padding: 0,
    },
    star: {
      color: 'red', display: 'inline',
    },
  });
  