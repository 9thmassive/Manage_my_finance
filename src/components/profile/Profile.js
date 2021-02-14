import React from 'react'
import firebase from 'firebase'
import './profile.css'
export default function Profile() {
    return (
        <>
            <div className="container">
                <div className="row my-2">
                    <div className="col-lg-8 order-lg-2">
                        {/* <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a
                                    href=""
                                    data-target="#profile"
                                    data-toggle="tab"
                                    className="nav-link active"
                                >
                                    Profile
                                </a>
                            </li>
                        </ul> */}
                        <div className="tab-content py-4">
                            <div className="tab-pane active" id="profile">
                                <h5 className="mb-3">User Profile</h5>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h5 className="mt-2">
                                            <span className="fa fa-clock-o ion-clock float-right"></span>
                                            Info
                                        </h5>
                                        <table className="table table-sm table-hover table-striped">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <strong>Name</strong>{' '}
                                                        Warren Buffet
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Age</strong>{' '}
                                                        ahagin
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Country</strong>
                                                        Armenia Yerevan Charbakh
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>
                                                            Last activity
                                                        </strong>{' '}
                                                        01.5.1974
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 order-lg-1 text-center">
                        <label className="custom-file">
                            <input
                                type="file"
                                id="file"
                                className="custom-file-input"
                            />
                        </label>
                        <img
                            src="http://i1.wp.com/www.tshambler.com/wp-content/uploads/2017/06/Warren-Buffett-Image.jpg?resize=600%2C600"
                            className="mx-auto img-fluid img-circle d-block"
                            alt="avatar"
                            style={{ width: '250px', height: '250px' }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
