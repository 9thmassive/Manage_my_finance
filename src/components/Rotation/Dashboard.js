import React from 'react'
import Cards from './Cards'
import LinerChart from './../charts/linerChart'
import PieCharts from './PieCharts'

export default function Dashboard() {
    return (
        <>
            <div className="linerChart">
                <Cards />
                <LinerChart />
            </div>
            <PieCharts />
        </>
    )
}
