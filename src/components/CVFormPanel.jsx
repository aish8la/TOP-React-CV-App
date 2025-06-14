import '../styles/CVFormPanel.css'
import { EducationSection } from './EducationSection.jsx'
import { BasicInfoSection } from './BasicInfoSection.jsx'
import { WorkExperienceSection } from './WorkExperienceSection.jsx'

export function FormPanel({ onEntryClick, cvData, createEntry, changeHandler, fieldData, saveFields }) {
    return (
        <aside>
            <form action="">
                <BasicInfoSection 
                    changeHandler={changeHandler}
                    fieldData={fieldData}
                    saveFields={saveFields}
                />
                <EducationSection 
                    cvData={cvData} 
                    onEducationEntryClick={onEntryClick}
                    createEntry={createEntry}
                />
                <WorkExperienceSection 
                    cvData={cvData} 
                    onWorkClick={onEntryClick}
                    createEntry={createEntry}
                />
            </form>
        </aside>
    )
}