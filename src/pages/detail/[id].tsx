import TopBar from '@/components/organisms/TopBar';
import { QiitaItemDetal, fetchItem } from '@/utils/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { apiTokenState } from '@/utils/state';
import { Box, Typography, IconButton } from '@mui/material';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ItemDetal() {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState<QiitaItemDetal>();
  const [token, setToken] = useRecoilState(apiTokenState);
  const [open, setOpen] = useState(false);

  const handleGetById = () => {
    if (typeof id === 'string') {
      fetchItem(setItem, id, token);
    }
  };

  useEffect(() => {
    handleGetById();
  }, []);

  return (
    <div className="container">
      <TopBar token={token} setToken={setToken} open={open} setOpen={setOpen} />
      <Box m={2}>
        <Link href="/">
          <IconButton
            size="large"
            aria-label="back"
            color="primary"
            sx={{
              backgroundColor: '#ffffff',
              '&:hover': {
                backgroundColor: '#4caf50',
                color: '#ffffff',
              },
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        </Link>
      </Box>
      <Box m={2}>
        <Typography variant="h4" component="h1">
          {item?.title}
        </Typography>
      </Box>
      <Box m={2}>
        {item?.rendered_body ? (
          <div dangerouslySetInnerHTML={{ __html: item.rendered_body }} />
        ) : (
          <p>
            Loading... or You may have been caught in a rate limit, please enter
            a Qiita API token from the setting button in the upper right corner
          </p>
        )}
      </Box>
    </div>
  );
}
