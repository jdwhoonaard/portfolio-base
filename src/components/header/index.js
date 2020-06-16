import React from "react"
import { Link } from "gatsby"
import { motion, useViewportScroll, useTransform } from "framer-motion";
import './index.scss'
import Navigation from '../navigation'

const Header = ({ siteTitle }) => {
  const { scrollYProgress } = useViewportScroll()

  const xInput = [0, 0.1]
  const colorOutput = ["rgba(255,255,255,0)", "rgba(255,255,255,1)"]
  const color = useTransform(scrollYProgress, xInput, colorOutput)

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          position: "fixed",
          top: '-96px',
          width: '100vw',
          zIndex: '97'
        },
        visible: {
          opacity: 1,
          position: "fixed",
          top: 0,
          width: '100vw',
          zIndex: '97',
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.25
          }
        }
      }}
      initial="hidden"
      animate="visible"
      style={{
        backgroundColor: color,
      }}
    >
      <header className="header fixed">
        <Link className="header__branding" to="/">{siteTitle}</Link>
        <Navigation />
      </header>
    </motion.div >
  )
}
export default Header
