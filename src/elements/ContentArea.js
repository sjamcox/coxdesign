import React from 'react'

export const ContentArea = ({ children }) => {
    return (
        <main className="mainContent">
            <div className="mainText">{children}</div>
        </main>
    )
}


