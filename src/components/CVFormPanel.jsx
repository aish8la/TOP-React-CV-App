import '../styles/CVFormPanel.css'
import { education } from '../logic/dataHandlers.js'
import { EducationSection } from './EducationSection.jsx'
import { BasicInfoSection } from './BasicInfoSection.jsx'

export function FormPanel() {
    return (
        <aside>
            <form action="">
                <BasicInfoSection />
                <EducationSection data={education} />
            </form>
        </aside>
    )
}