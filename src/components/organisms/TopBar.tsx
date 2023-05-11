import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
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
import Link from 'next/link';

export interface TopBarProps {
  token: string;
  setToken: (value: string) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function TopBar({
  token,
  setToken,
  open,
  setOpen,
}: TopBarProps) {
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
          <Link
            href="https://github.com/t-ngtn/next-sample-qiita"
            target="_blank"
            rel="noopener"
          >
            <IconButton
              size="large"
              aria-label="move to GitHub repository"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="secondary"
            >
              <GitHubIcon />
            </IconButton>
          </Link>
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
            value={token}
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
