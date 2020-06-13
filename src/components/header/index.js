import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion";
import './index.scss'
import Navigation from '../navigation'

const variants = {
  transparant: { backgroundColor: 'rgba(255, 255, 255, 0)' },
  white: { backgroundColor: 'rgba(255, 255, 255, 1)' }
}

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { scrollY: 0 };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    this.setState({ scrollY: window.scrollY })
  }

  render() {
    return (
      <motion.div
        className="header__outer fluid"
        variants={variants}
        animate={this.state.scrollY <= 10 ? 'transparant' : 'white'}
      >
        <header className="header fixed">
          <Link className="header__branding" to="/">{this.props.siteTitle}</Link>
          <Navigation />
        </header>
      </motion.div >
    )
  }
}

export default Header
