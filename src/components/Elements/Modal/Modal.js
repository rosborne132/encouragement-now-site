import React from 'react'
import { Icon } from 'styledoui'
import { motion, AnimatePresence } from 'framer-motion'

import styles from './Modal.module.css'

export const Modal = React.memo(({ children, isShowing, onClose }) => {
    const variants = {
        open: { y: 0 },
        closed: { y: 50 }
    }

    return (
        <AnimatePresence>
            {isShowing && (
                <motion.div
                    key="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed',
                        top: '40%',
                        left: '50%',
                        transform: 'translate3d(-50%, -40%, 0)',
                        zIndex: 3
                    }}
                >
                    <motion.div
                        className={styles.wrapper}
                        variants={variants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <header className={styles.header}>
                            <span
                                className={styles.closeBtn}
                                onClick={onClose}
                                onKeyDown={onClose}
                                role="button"
                                tabIndex={0}
                            >
                                <Icon icon="closeAlt" size="m1" aria-hidden />
                            </span>
                        </header>
                        <div className={styles.body}>{children}</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
})
