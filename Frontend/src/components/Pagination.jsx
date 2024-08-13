import styles from "./Pagination.module.css";

export default function Pagination(props) {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        <p className="p">Page No: {props?.pageHandler?.pageNumber}</p>
        <div>
          <button
            className={styles.buttons}
            onClick={() =>
              props?.pageHandler?.setPageNumber((prev) => prev + 1)
            }
            disabled={
              !(
                props?.pageHandler?.pageNumber <
                Math.floor(props?.totalCount / 10)
              )
            }
          >
            Next
          </button>
          <span> - </span>
          <button
            className={styles.buttons}
            onClick={() =>
              props?.pageHandler?.setPageNumber((prev) => prev - 1)
            }
            disabled={props?.pageHandler?.pageNumber < 2}
          >
            Previous
          </button>
        </div>

        <p className="p">Per Page: 10</p>
      </div>
    </div>
  );
}
