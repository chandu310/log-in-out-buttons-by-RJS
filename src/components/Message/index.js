// Write your code here
import './index.css'

const Content = props => {
  const {isLogin} = props
  const text = isLogin ? 'Please Login' : 'Welcome User'
  return <h1 className="head">{text}</h1>
}

export default Content
