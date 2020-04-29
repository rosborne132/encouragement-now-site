import React from 'react'
import { Icon } from 'styledoui'
import { motion } from 'framer-motion'

import styles from './Card.module.css'

export const Card = React.memo(({ icon, text }) => (
    <motion.div className={styles.body} key={icon} whileHover={{ scale: 1.08 }}>
        <p>{text}</p>
        <Icon icon={icon} aria-hidden size="l3" />
    </motion.div>
))
