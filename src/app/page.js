

import EventServices from "@/component/EventServices";
import EventSlider from "@/component/EventSlider";
import Experience from "@/component/Experience";
import VideoSection from "@/component/HeaderSlider";
import HomeSlider from "@/component/HomeSlider";
import TargetEvent from "@/component/TargetEvent";
import Image from "next/image";

export default function Home() {
  return (
    <div  >

<VideoSection/>

<TargetEvent/>
<Experience/>
<EventSlider/>
<EventServices/>
{/* <HomeSlider/> */}
    </div>
  );
}
