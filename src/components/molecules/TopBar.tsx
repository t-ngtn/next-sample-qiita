import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import { ChangeEvent } from 'react';

export interface TopBarProps {
  setToken: (value: string) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function TopBar({ setToken, open, setOpen }: TopBarProps) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTokenChange = (event: ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="secondary">
            Qiita Sample App
          </Typography>
          <Box flexGrow={1} />
          <IconButton
            size="large"
            aria-label="setting Qiita API token"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleClickOpen}
            color="secondary"
          >
            <SettingsOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Set API Token</DialogTitle>
        <DialogContent>
          <DialogContentText color="primary">
            Please enter your Qiita API token:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="api-token"
            label="API Token"
            type="text"
            fullWidth
            onChange={handleTokenChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
