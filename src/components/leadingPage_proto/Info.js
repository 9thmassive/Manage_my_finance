import React from 'react'

export default function Info(props) {
    return (
        <div className="feature text-center is-revealing ">
            <div className="feature-inner bc">
                <div className="feature-icon">
                    <img
                        className="card-icon"
                        src={props.icon}
                        alt="Feature 02"
                    />
                </div>
                <h4 className="feature-title mt-24">{props.title}</h4>
                <p className="text-sm mb-0">{props.txt}</p>
            </div>
        </div>
    )
}
