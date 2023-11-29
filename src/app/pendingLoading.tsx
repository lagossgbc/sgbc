import classes from "./pendingLoading.module.scss";

const RouteLoading = () => {
  return (
    <div className={classes.Outer}>
      <div className={classes.Container}>
        <div className={classes.Book}>
          <div className={classes.page2}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              atque rem dolores iusto quos. Suscipit dolorum alias provident
            </p>
          </div>
          <div className={classes.page3}>
            2{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              atque rem dolores iusto quos. Suscipit dolorum alias provident
            </p>
          </div>
          <div className={classes.page4}>
            3{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              atque rem dolores iusto quos. Suscipit dolorum alias provident
            </p>
          </div>
          <div className={classes.page5}>
            4{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              atque rem dolores iusto quos. Suscipit dolorum alias provident
            </p>
          </div>
          <div className={classes.page6}>
            5{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            </p>
          </div>
          <div className={classes.page7}>
            6{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            </p>
          </div>
          <div className={classes.page8}>
            <h1>HOLY BIBLE</h1>
            <h3>
              {/* <small>SINCE </small>1689 */}
              <small>SOLAR </small>CHRISTUS
            </h3>
            <h4>CHRIST ALONE</h4>
          </div>
        </div>
      </div>
      <p className={classes.Loading}>Loading ...</p>
    </div>
  );
};

export default RouteLoading;
