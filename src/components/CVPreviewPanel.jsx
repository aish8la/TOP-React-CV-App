import { CVEducSection } from "./CVEduSection.jsx";

export function CVPreviewScreen({ cvData }) {
    return (
        <main>
            <div>
                <div>
                    <h1>{cvData.basicInfo.fullName}</h1>
                    <a href={`mailto:${cvData.basicInfo.email}`}>{cvData.basicInfo.email}</a>
                    <h3>{cvData.basicInfo.phone}</h3>
                </div>
                <div>
                    {cvData.education.length > 0 && 
                    <CVEducSection educationData={cvData.education} />
                    }
                </div>
            </div>

        </main>
    )
}