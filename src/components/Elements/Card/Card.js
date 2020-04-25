import React from 'react'
import { Icon } from 'styledoui'

import styles from './Card.module.css'

export const Card = React.memo(({ icon, text }) => (
    <div className={styles.body} key={icon}>
        <p>{text}</p>
        <Icon icon={icon} aria-hidden size="l3" />
    </div>
))
