import Spinner from "./Spinner";

interface Props {
  isLoading: boolean;
  isError?: boolean;
}

const LoadingElement = ({ isLoading, isError }: Props) => {
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <div className=" text-black text-3xl h-screen text-center pt-20">
          Sorry, something went wrong...
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default LoadingElement;
