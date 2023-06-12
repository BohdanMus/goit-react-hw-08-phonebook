import { Grid } from 'react-loader-spinner';

export const PageLoader = () => {
  return (
    <Grid
      height="200"
      width="200"
      color="#4fa94d"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{
        marginTop: '200px',
        marginRight: 'auto',
        marginLeft: 'auto',
        display: 'block',
        width: '200px',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};
