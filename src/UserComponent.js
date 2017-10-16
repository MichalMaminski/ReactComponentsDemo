import React, { Component } from 'react'

class Login extends Component {

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Login</td>
                            <td>
                                <input type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>
                                <input type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <input type="button" value="login" onClick={this.props.onClick}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

class User extends Component {
    
        render() {
            return (
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td colspan="2">Hi user</td>  
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <input type="button" value="logout" onClick={this.props.onClick}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
    }


class UserComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {isLogged: false};
    }

    login(e) {
        this.setState({isLogged: true})
    }

    logout (e) {
        this.setState({isLogged: false})
    }

    render() {

        let contentElement = this.state.isLogged ? <User onClick={(e) => this.logout(e)}/> : <Login onClick={(e) => this.login(e)}/>;

        return (<div>

            {contentElement}

        </div>);
    }
}


export default UserComponent;