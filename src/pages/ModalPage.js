import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import urList from '../json/urlList.json'
import { Link, withRouter } from 'react-router-dom';
import history from './history';

export const RouteComponent = withRouter(props => <ModalPage {...props} />);



class ModalPage extends Component {

    constructor() {

        super();
        this.state = {
            modal: true,
            currentCount: 10,
            intervalId: 0
        }
        this.timer = this.timer.bind(this);
        this.controller = new AbortController();
        this._componentDidMountUpdate = this._componentDidMountUpdate.bind(this);
    }

    componentDidMount() {
        this._componentDidMountUpdate()
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps); // data from parent received
        this._componentDidMountUpdate()
    }

    _componentDidMountUpdate() {
        console.log({ mounted: true })
        this.mounted = true;
        let { pathname } = this.props.location;
        pathname = pathname.substring(1)
        console.log({ pathname })

        if (urList[pathname]) {
            let win;
            fetch(`${urList[pathname][0]}`, {
                signal: this.controller.signal
            })
            fetch(`${urList[pathname][0]}`, {
                signal: this.controller.signal
            })
            fetch(`${urList[pathname][0]}`, {
                signal: this.controller.signal
            })
                .then((response) => console.log(response))
                .catch((err) => { console.log(err) })
            fetch(`${urList[pathname][0]}`, {
                signal: this.controller.signal
            })
                .then((response) => {
                    console.log(response)
                    if (urList[pathname].length === 2) {
                        console.log({ missing: urList[pathname][1] })
                        win = window.open(urList[pathname][1], "_blank");
                    }
                    else {
                        console.log({ present: urList[pathname][1] })
                        win = window.open(urList[pathname][0], "_blank");

                    }
                    win.focus();
                    history.push("/")

                })
                .catch((err) => {
                    console.log(err)
                    if (urList[pathname].length === 2) {
                        console.log({ missing: urList[pathname][1] })
                        win = window.open(urList[pathname][1], "_blank");
                    }
                    else {
                        console.log({ present: urList[pathname][1] })
                        win = window.open(urList[pathname][0], "_blank");
                    }
                    win.focus();
                    history.push("/")

                })

            var intervalId = setInterval(this.timer, 1000);
            // store intervalId in the state so it can be accessed later:
            this.setState((prevState) => {
                return {
                    ...prevState,
                    intervalId: intervalId,
                }
            });
        }

        else {
            if (pathname) {
                alert("Hello wrong url")
                history.replace('/')
            }
        }
    }

    componentWillUnmount() {
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
        this.controller.abort();
    }

    timer() {
        // setState method is used to update the state
        this.setState({ currentCount: this.state.currentCount - 1 });
        if (this.state.currentCount < 1) {
            clearInterval(this.state.intervalId);

            this.setState((prevState) => {
                return {
                    ...prevState,
                    intervalId: 0,
                    modal: false,
                    currentCount: 0
                }
            });
        }
    }


    render() {

        if (this.props.location !== undefined) {
            let { pathname } = this.props.location;
            console.log({ pathname })
            pathname = pathname.substring(1)
            if (urList[pathname]) {

                return (
                    <MDBModal isOpen={this.state.modal} >
                        <MDBModalHeader>Heroku free tier!!!</MDBModalHeader>
                        <MDBModalBody>
                            <div className="text-center">
                                <h5>Free tier hosting becomes inactive every 20min-30min.
                                </h5>
                                <h5> It will take
                                </h5>
                                <h1 className="text-danger">

                                    {this.state.currentCount} </h1>
                                <h5>
                                    seconds till database becomes active.
                                </h5>
                            </div>
                        </MDBModalBody>

                    </MDBModal >
                );
            }
            else {
                return (
                    <>

                    </>
                )
            }
        }
        else {
            return (
                <>
                </>
            )
        }
    }

}