import { Headline } from './Sights';
import Filter from '../components/Filter';

export default function Filtering({ sights }) {
  return (
    <>
      <Headline>Filter Sights</Headline>
      <Filter sights={sights} />
    </>
  );
}
