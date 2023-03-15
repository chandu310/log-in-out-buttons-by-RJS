// Write your code here
import './index.css'

const Logout = props => {
  const {logout} = props

  return (
    <button onClick={logout} type="button">
      Logout
    </button>
  )
}
export default Logout
