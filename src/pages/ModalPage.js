import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import urList from '../json/urlList.json'
import {withRouter} from 'react-router-dom';


const RouteComponent = withRouter(props => <ModalPage {...props}/>);

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
    }


    componentDidMount() {
        this.mounted = true;
        const {pathname} = this.props.location;
        console.log({pathname})
        fetch(`${urList[pathname]}`, {
            signal: this.controller.signal
        })
            .then((response) => console.log(response.json()))
        var intervalId = setInterval(this.timer, 1000);
        // store intervalId in the state so it can be accessed later:
        this.setState((prevState) => {
            return {
                ...prevState,
                intervalId: intervalId,
            }
        });


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
        return (
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>Heroku free tier!!!</MDBModalHeader>
                <MDBModalBody>
                    <div className="text-center">
                        <h5>Heroku free tier is free forever but becomes inactive every 20min-30min.
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
}

export default ModalPage;