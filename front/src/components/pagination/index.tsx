import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface IPagination {
  count: number;
  page: number;
  spacing?: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const PaginationComponent: React.FC<IPagination> = ({
  page,
  count = 10,
  spacing = 2,
  onChange,
}) => {
  return (
    <Stack
      spacing={spacing}
      direction="row"
      sx={{ justifyContent: "center", marginTop: "1%" }}
    >
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        size="large"
        shape="rounded"
        color="secondary"
        hidePrevButton
        hideNextButton
      />
    </Stack>
  );
};

export default PaginationComponent;
