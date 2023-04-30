import { Inter } from '@next/font/google';
import { fetchPosts } from '@/utils/api';
import { StyledButton } from '@/components/atoms/Button';
import TopBar from '@/components/molecules/TopBar';

export default function Home() {
  return (
    <>
      <main>
        <div className="container">
          <TopBar/>
          <StyledButton variant="contained" onClick={fetchPosts}>
            aaa
          </StyledButton>
        </div>
      </main>
    </>
  );
}
