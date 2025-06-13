import { FormPanel } from "./CVFormPanel";
import { CVPreviewScreen } from "./CVPreviewPanel";
import { EducationForm } from "./EducationForm";
import { useState } from "react";
import { cvData, updateData } from "../logic/dataHandlers";


export function CVPanels() {

    const [currentCVData, setCurrentCVData] = useState( {...cvData} );
    const [mainScreen, setMainScreen] = useState("Preview");
    const [editingEntry, setEditingEntry] = useState(null);

    function returnToPreview() {
        setMainScreen("Preview");
    }

    function showForm(type, entryUID) {

        let field = "";
        if(type === "Education") {
            field = "education";
        } else if (type === "Work") {
            field = "workExperience";
        }

        const entry = currentCVData[field].find(item => item.uid === entryUID);
        setEditingEntry(entry);
        setMainScreen(type);
    }

    function changeHandler(e) {
        setEditingEntry({
            ...editingEntry,
            [e.target.name]: e.target.value
        });
    }

    function saveArrData(propertyName) {
        const newData = currentCVData[propertyName].filter(item => item.uid !== editingEntry.uid);
        newData.push(editingEntry);
        updateData(propertyName, editingEntry);
        setCurrentCVData({
            ...currentCVData,
            [propertyName]: newData
        });
        returnToPreview();
    }


    return (
        <>
        <FormPanel onEntryClick={showForm} cvData={currentCVData}/>
        {mainScreen === "Preview" && (
            <CVPreviewScreen />
        )}
        {mainScreen === "Education" && (
            <EducationForm 
                currentFormData={editingEntry} 
                saveHandler={saveArrData}
                closeHandler={returnToPreview}
                changeHandler={changeHandler}
            />
        )}
        </>
    )
}