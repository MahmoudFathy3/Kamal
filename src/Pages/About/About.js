import React, {useEffect} from 'react'

const About = ({FooterHandler}) => {

  useEffect(() => {
    return FooterHandler(true)
  },[FooterHandler])

  return (
    <div>About</div>
  )
}
export default About
