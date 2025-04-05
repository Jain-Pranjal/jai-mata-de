"use client";
import Banner from "@/components/Banner";
import EventsCarousel from "@/components/EventCarousel";
import FeatureCards from "@/components/FeatureCards";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#141E30] to-[#243B55]">
      {/* Banner Section */}
      <Banner />
      
 
        
        <div className="mt-5 ">
          <FeatureCards />
        </div>
        <EventsCarousel />
      </div>

  );
}



// apply the slider to show all the days details 
// adding column seelectted and not slecteed (for filtering reecorrds on db )  done
// change in the contest tab :- contetst and regisraiton below it   donee

// name email phone address + backedn (selected )  done
// addede the captcha also 

// move the rgistration form to the contest one page and then show the winnerr of it  done