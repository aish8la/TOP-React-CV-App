import { FormPanel } from "./CVFormPanel";
import { CVPreviewScreen } from "./CVPreviewPanel";
import { EducationForm } from "./EducationForm";
import { useState } from "react";
import { cvData } from "../logic/dataHandlers";


export function CVPanels() {

    const [currentCVData, setCVData] = useState( {...cvData} );
    const [mainScreen, setMainScreen] = useState({type: "Preview"});

    let currentScreen;

    if(mainScreen.type === "Preview") {
        currentScreen = <CVPreviewScreen />
    } else if (mainScreen.type === "Education") {
        currentScreen = <EducationForm currentFormData={mainScreen} key={mainScreen?.uid || ""}/>
    }

    function showEducationForm(eduUID) {
        const entry = currentCVData.education.find(item => item.uid === eduUID);
        setMainScreen({...entry, type: "Education"});
    }


    return (
        <>
        <FormPanel onEducationClick={showEducationForm} cvData={currentCVData}/>
        {currentScreen}
        </>
    )
}