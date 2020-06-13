import React, { useState } from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import "./index.scss";

const navigation = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'About',
    url: '/about'
  }
];

const fadeIn = {
  init: {
    opacity: 0
  },
  anim: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
      delayChildren: 5
    }
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1
    }
  }
};

const slideIn = (x) => ({
  init: {
    x: 20,
    opacity: 0
  },
  anim: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2 * x
    }
  },
  exit: {
    x: 20,
    opacity: 0
  }
})

const Navigation = () => {
  const [visible, setVisibility] = useState(false);

  return (
    <nav className="navigation">
      <button className="navigation__toggle" onClick={() => setVisibility(!visible)}>
        {visible
          ? <span>close</span>
          : <span>menu</span>
        }
      </button>
      <AnimatePresence>
        {visible ? (
          <motion.div
            className="navigation__panel"
            initial="init"
            animate="anim"
            exit="exit"
            variants={fadeIn}
          >
            <ul className="navigation__list">
              {navigation.map((link, i) => (
                <motion.li
                  key={link.url}
                  className="navigation__item"
                  initial="init"
                  animate="anim"
                  exit="exit"
                  variants={slideIn(i)}
                >
                  <Link to={link.url} onClick={() => setVisibility(!visible)}>{link.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
