import { styled } from '@material-ui/core/styles';

const GalleryGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  gridGap: '32px',
});

export default GalleryGrid;