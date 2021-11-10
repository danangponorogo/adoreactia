import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import '../css/app.css'

const el = document.getElementById('app')
const initialPage =
    el !== undefined ?
        el !== null ?
            el.dataset.page !== undefined ?
                JSON.parse(el.dataset.page)
                : ''
            : ''
        : ''

render(
    <InertiaApp
        // Pass props from the server down to the client app
        initialPage={initialPage}
        initialComponent={''}
        // Dynamically load the required page component
        resolveComponent={(name) => import(`./Pages/${name}`).then((module) => module.default)}
    />,
    el
)