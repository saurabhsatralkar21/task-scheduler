const AddTask = () => {
  return (
   <form className="add-form">
    <div className="form-control">
        <label htmlFor="">Task</label>
        <input type="text" placeholder="Add task" />
    </div>
    <div className="form-control">
        <label htmlFor="">Day & time</label>
        <input type="text" placeholder="Add Day and time" />
    </div>
    <div className="form-control">
        <label htmlFor="">Set Reminder</label>
        <input type="checkbox"/>
    </div>
    <input type="submit" value="Save Task"/>
   </form>
  )
}

export default AddTask