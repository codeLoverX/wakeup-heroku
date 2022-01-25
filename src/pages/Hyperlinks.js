import urList from '../json/urlList.json'
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";


export let Hyperlinks = function () {
    return (


        

            <MDBContainer>
                <MDBListGroup style={{ width: "22rem", margin: "50px auto" }}>
                    <MDBListGroupItem active>
                        <div className="d-flex w-100 justify-content-between">
                        </div>
                        <p className="mb-1">Enter one of my fun projects by clicking on the links:</p>
                    </MDBListGroupItem>
                    {Object.keys(urList).map((value, index) => {
                        return (

                            <div>
                                <Link to={`/${value}`}  >

                                    <MDBListGroupItem>
                                        {value}
                                    </MDBListGroupItem>

                                </Link>
                            </div>
                        );

                    })}
                </MDBListGroup>
            </MDBContainer>
    )
}
