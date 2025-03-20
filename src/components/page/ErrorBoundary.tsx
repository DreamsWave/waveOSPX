import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

type Props = {
  children: React.ReactNode;
};

const Fallback = ({ error }: { error: Error }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
};

const ErrorBoundary = ({ children }: Props) => {
  return (
    <ReactErrorBoundary FallbackComponent={Fallback}>
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
