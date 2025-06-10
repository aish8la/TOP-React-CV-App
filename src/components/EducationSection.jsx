export function EducationSection({ data }) {
    const dialogRef = "edu-dialog";

    function toggleDialog () {
        const dialog = document.getElementById(dialogRef);
        dialog.showModal();
    }
    return (
        <fieldset>
            <legend>
                Education
            </legend>
            <ul>
                {data.map(entry => {
                    return (
                        <li key={entry.uid}
                        onClick={toggleDialog}
                        >
                            <div>
                                {entry.level}
                            </div>
                            <div>
                                {entry.institution}
                            </div>
                        </li>
                    )
                })}
            </ul>
            <button>Create New</button>
            <FormDialog dialogId={dialogRef} />
        </fieldset>
    )
}

function FormDialog({ dialogId }) {
    return (
        //This is a bad idea, use ref for real projects but since it is not covered in TOP at this stage i am using id
        <dialog id={dialogId}>
            <form method='dialog'>
                <label htmlFor="institution">
                    <span>Institution</span>
                    <input type="text" id="institution" name="institution"/>
                </label>
                <label htmlFor="level">
                    <span>Level</span>
                    <input type="text" id="level" name="level"/>
                </label>
                <label htmlFor="location">
                    <span>Location</span>
                    <input type="text" id="location" name="location"/>
                </label>
                <label htmlFor="grade">
                    <span>Grade</span>
                    <input type="text" id="grade" name="grade"/>
                </label>
                <label htmlFor="startDate">
                    <span>Start Date</span>
                    <input type="date" id="startDate" name="startDate"/>
                </label>
                <label htmlFor="endDate">
                    <span>End Date</span>
                    <input type="date" id="endDate" name="endDate"/>
                </label>
                <label htmlFor="description">
                    <span>Description</span>
                    <input type="text" id="description" name="description"/>
                </label>
            </form>
        </dialog>
    )
}