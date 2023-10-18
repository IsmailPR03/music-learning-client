import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([])
    console.log(instructors);
    useEffect(() => {
        fetch('https://musical-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    
    const [popularInstructors, setPopularInstructors] = useState([]);
    useEffect( () => {
        const popular = instructors.filter(i => i.role === 'instructor');
        setPopularInstructors(popular);
    } , [instructors])

    

    return (
        <div>
          
            <SectionTitle
                heading={"Popular Instructors"}
                subHeading={"We are proud of our instructors. They work hard for their students and thats what matters the most."}
            ></SectionTitle>
         

            <div className="grid md:grid-cols-3 gap-8">
                {
                    popularInstructors.slice(0,6).map(instructor => <PopularInstructorCard
                        key={instructor._id}
                        instructor={instructor}
                    ></PopularInstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;