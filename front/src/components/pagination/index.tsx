import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface IPagination { 
    count?: number;
    spacing?: number;
}

const PaginationComponent: React.FC<IPagination> = ({ count = 10, spacing = 2 }) => {
  return (
    <Stack spacing={spacing} direction='row' sx={{ justifyContent: 'center', marginTop: '1%' }}>
      <Pagination count={count} size='large' shape="rounded" color='secondary' hidePrevButton hideNextButton/>
    </Stack>
  );
};

export default PaginationComponent;
