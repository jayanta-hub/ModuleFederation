import React, { Suspense } from 'react'
const MusafirFlight = React.lazy(() => import("musafirFlight/App"));

const Flight = () => {
    return (
        <Suspense fallback={<div>Loadiing...</div>}>
            <MusafirFlight />
        </Suspense>
    )
}

export default Flight