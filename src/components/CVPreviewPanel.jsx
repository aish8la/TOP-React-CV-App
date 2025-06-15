import { CVEducSection } from "./CVEduSection.jsx";
import { CVWorkExpSection } from "./CVWorkExpSection.jsx"
import "../styles/CVPreviewPanel.css"

export function CVPreviewScreen({ cvData }) {
    return (
        <main>
            <div className="cv-preview-ctn">
                <div className="cv-ctn">
                    <header>
                        <h1>{cvData.basicInfo.fullName}</h1>
                        <address>
                            <a href={`mailto:${cvData.basicInfo.email}`}>{cvData.basicInfo.email}</a>
                            <a href={`tel:${cvData.basicInfo.phone}`}>{cvData.basicInfo.phone}</a>
                        </address>
                    </header>
                    <div className="section-ctn">
                        {cvData.education.length > 0 && 
                        <CVEducSection educationData={cvData.education} />
                        }
                        {cvData.workExperience.length > 0 && 
                        <CVWorkExpSection workData={cvData.workExperience} />
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}