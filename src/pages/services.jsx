import Footer from "../compenents/footer";
import Lfo9 from "../compenents/header";
import Desert from "../compenents/sahara desert tour";
import Dwira from "../compenents/salam";
import ActivitiesSection from "../compenents/ThingsTodoSection"
import SectionK from "../compenents/section";
import Navbar from "../compenents/navbar";
import '../App.css'
export default function Services(){
    return(
        <>
        <Navbar/>
        <Lfo9/>
        <SectionK/>
        <ActivitiesSection/>
        <Desert/>
        <Dwira/>
        <Footer/>
        </>
    )
}