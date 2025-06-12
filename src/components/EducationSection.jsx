import { useState } from "react";

export function EducationSection({ data }) {

    const [currentForm, setCurrentForm] = useState(null);

    const dialogRef = "edu-dialog";

    function toggleDialog () {
        const dialog = document.getElementById(dialogRef);
        dialog.showModal();
    }

    function loadEducationEntry(uid) {
        const entry = data.find(entry => {
            return entry.uid === uid;
        });

        setCurrentForm({...entry});

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
                        onClick={() => {
                            loadEducationEntry(entry.uid);
                            toggleDialog()
                        }}
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
            <FormDialog dialogId={dialogRef} currentFormData={currentForm} />
        </fieldset>
    )
}

function FormDialog({ dialogId, currentFormData }) {

    let data = {};

    if(!currentFormData) {
        data.institution = ""
        data.level = ""
        data.location = ""
        data.startDate = ""
        data.endDate = ""
        data.grade = ""
        data.description = ""
    } else {
        data = {...currentFormData};
    }

    return (
        //This is a bad idea, use ref for real projects but since it is not covered in TOP at this stage i am using id
        <dialog id={dialogId}>
            <form method='dialog'>
                <label htmlFor="institution">
                    <span>Institution</span>
                    <input type="text" id="institution" defaultValue={data.institution} name="institution"/>
                </label>
                <label htmlFor="level">
                    <span>Level</span>
                    <input type="text" id="level" defaultValue={data.level} name="level"/>
                </label>
                <label htmlFor="location">
                    <span>Location</span>
                    <input type="text" id="location" defaultValue={data.location} name="location"/>
                </label>
                <label htmlFor="grade">
                    <span>Grade</span>
                    <input type="text" id="grade" defaultValue={data.grade} name="grade"/>
                </label>
                <label htmlFor="startDate">
                    <span>Start Date</span>
                    <input type="date" id="startDate" defaultValue={data.startDate} name="startDate"/>
                </label>
                <label htmlFor="endDate">
                    <span>End Date</span>
                    <input type="date" id="endDate" defaultValue={data.endDate} name="endDate"/>
                </label>
                <label htmlFor="description">
                    <span>Description</span>
                    <input type="text" id="description" defaultValue={data.description} name="description"/>
                </label>
            </form>
        </dialog>
    )
}