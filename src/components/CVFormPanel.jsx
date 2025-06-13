import '../styles/CVFormPanel.css'
import { EducationSection } from './EducationSection.jsx'
import { BasicInfoSection } from './BasicInfoSection.jsx'

export function FormPanel({ onEducationClick, cvData }) {
    return (
        <aside>
            <form action="">
                <BasicInfoSection />
                <EducationSection cvData={cvData} onEducationClick={onEducationClick}/>
            </form>
        </aside>
    )
}