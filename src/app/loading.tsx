import classes from "./loading.module.scss";

const PageLoading = () => {
  return (
    <div className={classes.Container}>
      <div>
        {Array.from({ length: 5 }, (_, index) => {
          return <span key={index}></span>;
        })}
      </div>
      <p>Please wait ...</p>
    </div>
  );
};

export default PageLoading;
