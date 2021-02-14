import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import './exp.css'
function Expenses() {
    const expList = [
        {
            nameExp: 'Auto insurance.',
        },
        {
            nameExp: 'Health insurance.',
        },
        {
            nameExp: 'Car payment.',
        },
        {
            nameExp: 'Child care',
        },
        {
            nameExp: 'Public transportation',
        },
        {
            nameExp: 'Gasoline',
        },
        {
            nameExp: `Electricity and natural gas`,
        },
        {
            nameExp: 'Internet',
        },
        {
            nameExp: 'Other',
        },
    ]
    return (
        <div className="container ">
            <div className="container add">
                <DropdownButton
                    id="dropdown-item-button"
                    title="Dropdown button"
                >
                    {expList.map(({ nameExp }, index) => {
                        return (
                            <Dropdown.Item as="button">{nameExp}</Dropdown.Item>
                        )
                    })}
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                </DropdownButton>
                <button className="btn btn-success">+Add Group</button>
            </div>
            <div className="listt "></div>
        </div>
    )
}
export default Expenses
