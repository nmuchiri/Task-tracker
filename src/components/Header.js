import PropTypes from 'prop-types'
import Button from './button'

const Header = ({ title }) => { // can also do `= (props)`, and then `props.title` in the h1 tags
  const onClick = () => {
    console.log('Button was clicked')
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='blue' text='Add' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}


export default Header
