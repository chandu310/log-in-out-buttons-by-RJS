// Write your code here
import {Component} from 'react'

import './index.css'

import Login from '../Login'

import Logout from '../Logout'

import Content from '../Message'

class Home extends Component {
  state = {isLogin: true}

  onClickButton = () => {
    const {isLogin} = this.state
    if (isLogin) {
      this.setState(prevState => ({isLogin: !prevState.isLogin}))
    } else {
      this.setState(prevState => ({isLogin: !prevState.isLogin}))
    }
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <Content isLogin={isLogin} />
          {isLogin ? (
            <Login login={this.onClickButton} />
          ) : (
            <Logout logout={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
