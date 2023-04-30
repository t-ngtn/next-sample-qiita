import { AppBar, IconButton, Toolbar, Typography} from "@mui/material";

export default function TopBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    Qiita Sample App
                </Typography>
            </Toolbar>
        </AppBar>
    )
}