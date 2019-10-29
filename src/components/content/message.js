import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
 function PositionedSnackbar({...props}) {
  //  console.log(props);
  return (
    <div>
      <Snackbar
         anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        open={props.open}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">
            {props.message}
        </span>}
      />
    </div>
  );
}

export default PositionedSnackbar;