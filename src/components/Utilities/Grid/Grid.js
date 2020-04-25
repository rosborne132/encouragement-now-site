import React from 'react'

import styles from './Grid.module.css'

export const Grid = React.memo(({ children, width = 100 }) => (
    <div style={{ width: `${width}%` }} className={styles.wrapper}>
        {children}
    </div>
))
