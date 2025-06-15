export function WorkExperienceForm({ currentFormData, saveHandler, closeHandler, changeHandler }) {

    function saveChanges() {
        saveHandler("workExperience");
    }

    return (
        <main>
            <form className="main-screen-form">
                <label htmlFor="position">
                    <span>Position</span>
                    <input type="text" id="position" value={currentFormData?.position || ""} name="position" onChange={changeHandler} />
                </label>
                <label htmlFor="level">
                    <span>Company</span>
                    <input type="text" id="company" value={currentFormData?.company || ""} name="company" onChange={changeHandler} />
                </label>
                <label htmlFor="location">
                    <span>Location</span>
                    <input type="text" id="location" value={currentFormData?.location || ""} name="location" onChange={changeHandler} />
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