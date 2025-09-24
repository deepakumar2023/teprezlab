import Banner from '@/component/Banner'
import PlanningProcess from '@/component/PlanningProcess'
import ShowImage from '@/component/ShowImage'
import TestExperience from '@/component/TestExperience'
import WhyUs from '@/component/TestWhyUs'
import WhyRetreatsMatter from '@/component/WhyRetreatsMatter'

import React from 'react'

function page() {
  return (

    <>
      <Banner />
      <WhyUs />
      <WhyRetreatsMatter/>
    <TestExperience/>
    {/* <ShowImage/> */}
      <PlanningProcess/>
    </>

  )
}

export default page