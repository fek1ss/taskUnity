import Hero from '@/widgets/hero/ui/Hero';
import { Board } from './../widgets/board/ui/Board';

export default function Home() {
  return (
    <div>
      <div className='wrapper'>
        <Hero />
        <Board />
      </div>
    </div>
  );
}
