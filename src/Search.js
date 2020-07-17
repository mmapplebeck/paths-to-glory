import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles, fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import AppService from './app.service';

const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      color: 'inherit',
      marginLeft: '1.5rem',
      backgroundColor: fade('#fff', 0.15),
      '&:hover': {
        backgroundColor: fade('#fff', 0.25),
      },
      '& fieldset': {
        border: 0,
      },
    },
  },
})(TextField);

function Search({setNodeName}) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const results = await AppService.getResults();

      if (results && active) {
        setOptions(results);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      options={options}
      loading={loading}
      disableClearable
      blurOnSelect
      clearOnBlur
      freeSolo
      value=""
      size="small"
      onChange={(event, selectedNodeName) => {
        setNodeName(selectedNodeName)
      }}
      renderInput={(params) => (
        <CssTextField
          {...params}
          placeholder="Find a node…"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : <SearchIcon />}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

export default Search
