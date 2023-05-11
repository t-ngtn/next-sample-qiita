import TopBar from '@/components/organisms/TopBar';
import { QiitaItemDetal, fetchItem } from '@/utils/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { apiTokenState } from '@/utils/state';
import { Box, Typography } from '@mui/material';

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
        <Typography variant="h4" component="h1">
          {item?.title}
        </Typography>
      </Box>
      <Box m={2}>
        {item?.rendered_body ? (
          <div dangerouslySetInnerHTML={{ __html: item.rendered_body }} />
        ) : (
          <p>Loading...</p>
        )}
      </Box>
    </div>
  );
}
