import React from 'react'
import Carouselhome from '../Components/Carousel/Carouselhome'
import FeedbackForm from '../Components/FeedbackForm/FeedbackForm'
import GridList from '../Components/GridList/GridList'
import FooterOne from '../Layout/Footer/FooterOne'
import GridList2 from '../Components/GridList/GridList2'

const HomeOne = () => {

  return (
    <div>
        <Carouselhome/>
        <FeedbackForm/>
        <GridList/>
        <GridList2/>
        <FooterOne/>
    </div>
  )
}

export default HomeOne