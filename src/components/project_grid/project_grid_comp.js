import * as React from 'react';
import { Link } from 'gatsby';

import * as styles from './project_grid.module.scss';

const ProjectGridComponent = ({projectName, tagLine, link, image, gridWidth}) => {
    return (<div className={styles.gridComponent} style={{ gridColumn: "span " + gridWidth }}>
        <Link to={link}>
            <div className={styles.gridComponentOverlay}>
                <div className={styles.image} style={{ width:"100%", height:"100%" }}>
                        {image}
                </div>
                <div className={styles.gridComponentData}>
                    <div className={styles.gridComponentDataName}>
                        {projectName}
                    </div>
                    <div className={styles.gridComponentDataTagline}>
                        {tagLine}
                    </div>
                </div>
            </div>
        </Link>
    </div>);
}

export default ProjectGridComponent;
