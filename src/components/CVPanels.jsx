import { FormPanel } from "./CVFormPanel";
import { CVPreviewScreen } from "./CVPreviewPanel";
import { EducationForm } from "./EducationForm";
import { WorkExperienceForm } from "./WorkExperienceForm";
import { useState } from "react";
import { cvData, updateData } from "../logic/dataHandlers";


export function CVPanels() {

    const [currentCVData, setCurrentCVData] = useState( {...cvData} );
    const [mainScreen, setMainScreen] = useState("Preview");
    const [editingEntry, setEditingEntry] = useState(null);
    const [editingFields, setEditingFields] = useState(currentCVData?.basicInfo);

    function returnToPreview() {
        setMainScreen("Preview");
        setEditingEntry(null);
    }

    function showForm(type, entryUID) {

        let entry = {}
        if(entryUID) {
            let field = "";
            if(type === "Education") {
                field = "education";
            } else if (type === "Work") {
                field = "workExperience";
            }
            entry = currentCVData[field].find(item => item.uid === entryUID);
        }

        setEditingEntry(entry);
        setMainScreen(type);
    }

    function changeHandler(e) {
        setEditingEntry({
            ...editingEntry,
            [e.target.name]: e.target.value
        });
    }

    function changeFields(e) {
        setEditingFields({
            ...editingFields,
            [e.target.name]: e.target.value
        });
    }

    function saveArrData(propertyName) {

        const entryToSave = editingEntry?.uid ?
            editingEntry:
            {...editingEntry, uid: crypto.randomUUID()}
        
        const existing = currentCVData[propertyName].some(item => item.uid === entryToSave.uid);

        const newData = existing
            ? currentCVData[propertyName].map(item =>
                item.uid === entryToSave.uid ? entryToSave : item
            )
            : [...currentCVData[propertyName], entryToSave];

        updateData(propertyName, newData);
        setCurrentCVData({
            ...currentCVData,
            [propertyName]: newData
        });
        returnToPreview();
    }

    function saveFields(propertyName) {
        let entryToSave = {...editingFields};
        updateData(propertyName, entryToSave);
        setCurrentCVData({
            ...currentCVData,
            [propertyName]: entryToSave
        });
    }

        function deleteEntry(propertyName, uid) {

        const newData = currentCVData[propertyName].filter(item => item.uid !== uid);
        updateData(propertyName, newData);
        setCurrentCVData({
            ...currentCVData,
            [propertyName]: newData
        });
    }


    return (
        <>
        <FormPanel 
            onEntryClick={showForm} 
            cvData={currentCVData}
            createEntry={showForm}
            changeHandler={changeFields}
            fieldData={editingFields}
            saveFields={saveFields}
            deleteEntry={deleteEntry}
        />
        {mainScreen === "Preview" && (
            <CVPreviewScreen cvData={currentCVData}/>
        )}
        {mainScreen === "Education" && (
            <EducationForm 
                currentFormData={editingEntry} 
                saveHandler={saveArrData}
                closeHandler={returnToPreview}
                changeHandler={changeHandler}
            />
        )}
        {mainScreen === "Work" && (
            <WorkExperienceForm 
                currentFormData={editingEntry} 
                saveHandler={saveArrData}
                closeHandler={returnToPreview}
                changeHandler={changeHandler}
            />
        )}
        </>
    )
}