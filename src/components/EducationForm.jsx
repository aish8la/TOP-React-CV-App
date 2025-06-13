import { useState } from "react";

export function EducationForm({ currentFormData }) {

    

    const [eduFormData, setEduFormData] = useState({...currentFormData});

    function onChange(e) {
        const {name, value} = e.target;

        setEduFormData({
            ...eduFormData,
            [name]: value
        });
    }

    return (
        <main>
            <form>
                <label htmlFor="institution">
                    <span>Institution</span>
                    <input type="text" id="institution" value={eduFormData?.institution || ""} name="institution" onChange={onChange} />
                </label>
                <label htmlFor="level">
                    <span>Level</span>
                    <input type="text" id="level" value={eduFormData?.level || ""} name="level" onChange={onChange} />
                </label>
                <label htmlFor="location">
                    <span>Location</span>
                    <input type="text" id="location" value={eduFormData?.location || ""} name="location" onChange={onChange} />
                </label>
                <label htmlFor="grade">
                    <span>Grade</span>
                    <input type="text" id="grade" value={eduFormData?.grade || ""} name="grade" onChange={onChange} />
                </label>
                <label htmlFor="startDate">
                    <span>Start Date</span>
                    <input type="date" id="startDate" value={eduFormData?.startDate || ""} name="startDate" onChange={onChange} />
                </label>
                <label htmlFor="endDate">
                    <span>End Date</span>
                    <input type="date" id="endDate" value={eduFormData?.endDate || ""} name="endDate" onChange={onChange} />
                </label>
                <label htmlFor="description">
                    <span>Description</span>
                    <input type="text" id="description" value={eduFormData?.description || ""} name="description" onChange={onChange} />
                </label>
            </form>
        </main>

    )
}