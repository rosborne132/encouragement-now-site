import React from 'react'

export const Container = React.memo(({ children, width, style }) => (
    <div style={{ width: `${width}%`, margin: '0 auto', ...style }}>
        {children}
    </div>
))
