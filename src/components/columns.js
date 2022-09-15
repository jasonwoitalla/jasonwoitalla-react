import * as React from "react";

import * as styles from "./columns.module.scss";

const Columns = ({ maxColumns, children }) => {
  if (maxColumns) {
    maxColumns = parseInt(maxColumns);
    let columns = [];
    for (let i = 0; i < maxColumns; i++) {
      let contents = [];
      for (let j = i; j < children.length; j += maxColumns) {
        contents.push(React.cloneElement(children[j]));
      }
      columns.push(<div className={styles.column}>{contents}</div>);
    }
    return <div className={styles.container}>{columns}</div>;
  } else {
    return (
      <div className={styles.container}>
        {React.Children.map(children, (child) => (
          <div className={styles.column}>{React.cloneElement(child)}</div>
        ))}
      </div>
    );
  }
};

export default Columns;
