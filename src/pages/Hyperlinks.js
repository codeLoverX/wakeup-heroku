import urList from '../json/urlList.json'
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';


export let Hyperlinks = function () {
    return (
        <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        <div>Enter one of my fun projects by clicking on the links: </div>
        {Object.keys(urList).map((value, index) => {
            return (
                <div>
                    <Link to={`/${value}`}  >
                        {value}
                    </Link>
                </div>
            );

        })}
        </div>
        )
}
