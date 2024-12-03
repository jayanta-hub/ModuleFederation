import React, { Suspense } from 'react'
const MusafirHotel = React.lazy(() => import("musafirHotel/App"));
const Hotel = () => {
    return (
        <Suspense fallback={<div>Loadiing...</div>}>
            <MusafirHotel />
        </Suspense>
    )
}

export default Hotel