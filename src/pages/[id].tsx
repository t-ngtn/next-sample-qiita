import { QiitaItemDetal } from '@/utils/api';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ItemDetal() {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState<QiitaItemDetal>();

  return (
    <div>
      {item ? (
        <div>
          <h1>{item.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: item.rendered_body }} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
