import '../styles/CVFormPanel.css'
import { EducationSection } from './EducationSection.jsx'
import { BasicInfoSection } from './BasicInfoSection.jsx'

export function FormPanel({ onEntryClick, cvData }) {
    return (
        <aside>
            <form action="">
                <BasicInfoSection />
                <EducationSection cvData={cvData} onEducationEntryClick={onEntryClick}/>
            </form>
        </aside>
    )
}