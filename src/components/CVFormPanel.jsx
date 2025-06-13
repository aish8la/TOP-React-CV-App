import '../styles/CVFormPanel.css'
import { EducationSection } from './EducationSection.jsx'
import { BasicInfoSection } from './BasicInfoSection.jsx'
import { WorkExperienceSection } from './WorkExperienceSection.jsx'

export function FormPanel({ onEntryClick, cvData }) {
    return (
        <aside>
            <form action="">
                <BasicInfoSection />
                <EducationSection cvData={cvData} onEducationEntryClick={onEntryClick}/>
                <WorkExperienceSection cvData={cvData} onWorkClick={onEntryClick}/>
            </form>
        </aside>
    )
}