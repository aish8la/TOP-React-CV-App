import { FormPanel } from "./CVFormPanel";
import { CVPreviewScreen } from "./CVPreviewPanel";
import { EducationForm } from "./EducationForm";
import { useState } from "react";
import { cvData, updateData } from "../logic/dataHandlers";


export function CVPanels() {

    const [currentCVData, setCurrentCVData] = useState( {...cvData} );
    const [mainScreen, setMainScreen] = useState({type: "Preview"});

    function returnToPreview() {
        setMainScreen({type: "Preview"})
    }

    function showEducationForm(eduUID) {
        const entry = currentCVData.education.find(item => item.uid === eduUID);
        setMainScreen({...entry, type: "Education"});
    }

    function saveArrData(propertyName, newValue) {
        const newData = currentCVData[propertyName].filter(item => item.uid !== newValue.uid);
        newData.push(newValue);
        updateData(propertyName, newValue);
        setCurrentCVData({
            ...currentCVData,
            [propertyName]: newData
        });
    }


    return (
        <>
        <FormPanel onEducationClick={showEducationForm} cvData={currentCVData}/>
        {mainScreen.type === "Preview" && (
            <CVPreviewScreen />
        )}
        {mainScreen.type === "Education" && (
            <EducationForm 
                currentFormData={mainScreen} 
                key={mainScreen?.uid || ""}
                saveHandler={saveArrData}
                closeHandler={returnToPreview}
            />
        )}
        </>
    )
}