
const Student = ({experience, name, headshot, children}) => {
    const fullName = "Edoardo Ferrini";
    const programmingExp = 2;
    return(
      <div className="col-4 p-1">
        <div className="row border">
          <div className="col-2">
            <img src={headshot} className="w-100 py-2"></img>
          </div>
          <div className="col-8">
            {name}
            <br />
            Programming Experience {experience} years
          </div>
          <div className="col-2">{children}</div>
        </div>
      </div>
    )
  }
  export default Student;
