import Layout from "./components/Layout";

const _error = ({ statusCode }) => {
  return (
    <Layout footer={false} >
      {statusCode ? (
        <p className="text-center">
          Could not load this page: Status Code {statusCode}
        </p>
      ) : (
        <p className="text-center">Could not load this page</p>
      )}
    </Layout>
  );
};

export default _error;
