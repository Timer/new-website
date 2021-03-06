import DocPage, {
  getStaticProps as otherGetStaticProps,
} from 'pages/docs/content-management-api/[chunk]';

export const getStaticProps = async ({ params, ...other }) => (
  otherGetStaticProps({ ...other, params: { chunk: 'index' }})
);

export default DocPage;
