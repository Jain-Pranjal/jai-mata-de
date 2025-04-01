"use client";
import Banner from "@/components/Banner";
import RegistrationForm from "@/components/RegistrationForm";
import FeatureCards from "@/components/FeatureCards";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#141E30] to-[#243B55]">
      {/* Banner Section */}
      <Banner />
      
 
        
        <div className="mt-5 ">
          <FeatureCards />
        </div>
      </div>

  );
}



// apply the slider to show all the days details 
// adding column seelectted and not slecteed (for filtering reecorrds on db )
// change in the contest tab :- contetst and regisraiton below it 

// name email phone address + backedn (selected )

// move the rgistration form to the contest one page and then show the winnerr of it