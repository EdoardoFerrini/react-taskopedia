import Student from "./Components/Student/Student"
import StudentReview from "./Components/Student/StudentReview"

const MainBody =() =>{
    const whatWeWillLearn = "React";
    const totalLecture = 3;
    return(
      <div style={{minHeight: "70vh"}}>
        <p>In this course we will learn {whatWeWillLearn} by using taskopedia{" "}
        <br/>
        Total Lecture - {totalLecture}
        </p>
        <ul>
          <li>Basic foundation</li>
          <li>Functional and Class Components</li>
        </ul>
        {/*<div>
          Enter Task: <input maxLength={5} readOnly={false} placeholder='Edoardo'></input>
        </div>*/}
        <div className='container row'>Students Enrolled</div>
        <Student 
          experience={2} 
          name="Kris Walley" 
          headshot="https://api.lorem.space/image/face?w=150&h=150" 
          >
        <StudentReview />
        </Student>
        <Student 
          experience={6} 
          name="Angel Patrice" 
          headshot="https://api.lorem.space/image/face?w=150&h=151"
        >
        <StudentReview />
        </Student>
        <Student 
          experience={5} 
            name="Rene Parker" 
            headshot="https://api.lorem.space/image/face?w=150&h=152"
        >
        <StudentReview />
        </Student>
      </div>
    )
  }

  export default MainBody;