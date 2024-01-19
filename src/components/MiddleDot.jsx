import React from 'react'

export const MiddleDot = ({ position }) => {
    return (
        <div style={{ display: "flex", alignItems: "center", position: "relative", top: "200px" }}>
            {position === "first" ? null :
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="6" viewBox="0 0 33 6" fill="none">
                    <path d="M3 3.01843H32.5" stroke="#FFF1B6" stroke-width="5" stroke-linecap="round" />
                </svg>
            }
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                <circle cx="14" cy="14" r="14" transform="matrix(-1 0 0 1 28 0.0184326)" fill="#FFF1B6" />
            </svg>
            {
                position === "last" ? null :

                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="6" viewBox="0 0 33 6" fill="none">
                        <path d="M3 3.01843H32.5" stroke="#FFF1B6" stroke-width="5" stroke-linecap="round" />
                    </svg>
            }


        </div>
    )
}
