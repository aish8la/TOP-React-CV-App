export function EducationForm({ currentFormData, saveHandler, closeHandler, changeHandler }) {

    function saveChanges() {
        saveHandler("education");
    }

    return (
        <main>
            <form className="main-screen-form">
                <label htmlFor="institution">
                    <span>Institution</span>
                    <input type="text" id="institution" value={currentFormData?.institution || ""} name="institution" onChange={changeHandler} />
                </label>
                <label htmlFor="level">
                    <span>Level</span>
                    <input type="text" id="level" value={currentFormData?.level || ""} name="level" onChange={changeHandler} />
                </label>
                <label htmlFor="location">
                    <span>Location</span>
                    <input type="text" id="location" value={currentFormData?.location || ""} name="location" onChange={changeHandler} />
                </label>
                <label htmlFor="grade">
                    <span>Grade</span>
                    <input type="text" id="grade" value={currentFormData?.grade || ""} name="grade" onChange={changeHandler} />
                </label>
                <label htmlFor="startDate">
                    <span>Start Date</span>
                    <input type="date" id="startDate" value={currentFormData?.startDate || ""} name="startDate" onChange={changeHandler} />
                </label>
                <label htmlFor="endDate">
                    <span>End Date</span>
                    <input type="date" id="endDate" value={currentFormData?.endDate || ""} name="endDate" onChange={changeHandler} />
                </label>
                <label htmlFor="description">
                    <span>Description</span>
                    <textarea id="description" value={currentFormData?.description || ""} name="description" onChange={changeHandler} ></textarea>
                </label>
                <div>
                    <button type="button" onClick={closeHandler}>Cancel</button>
                    <button type="button" onClick={saveChanges}>Save</button>
                </div>
            </form>
        </main>

    )
}