import React from 'react'
import { Icon } from 'styledoui'

import styles from './Modal.module.css'

export const Modal = React.memo(({ children, isShowing, onClose }) => {
    const transform = isShowing ? 'translateY(0vh)' : 'translateY(-100vh)'
    const opacity = isShowing ? '1' : '0'

    return (
        isShowing && (
            <div className={styles.container}>
                <div className={styles.wrapper} style={{ transform, opacity }}>
                    <header className={styles.header}>
                        <span className={styles.closeBtn} onClick={onClose}>
                            <Icon icon="closeAlt" size="m1" aria-hidden />
                        </span>
                    </header>
                    <div className={styles.body}>{children}</div>
                </div>
            </div>
        )
    )
})
