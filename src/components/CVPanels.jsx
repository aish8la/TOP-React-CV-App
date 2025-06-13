import { FormPanel } from "./CVFormPanel";
import { CVPreviewScreen } from "./CVPreviewPanel";
import { EducationForm } from "./EducationForm";
import { useState } from "react";
import { cvData } from "../logic/dataHandlers";


export function CVPanels() {

    const [currentCVData, setCVData] = useState( {...cvData} );
    const [mainScreen, setMainScreen] = useState({type: "Preview"});

    function showEducationForm(eduUID) {
        const entry = currentCVData.education.find(item => item.uid === eduUID);
        setMainScreen({...entry, type: "Education"});
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
            />
        )}
        </>
    )
}