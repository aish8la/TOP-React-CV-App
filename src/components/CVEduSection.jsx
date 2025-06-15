import { Fragment } from "react"

export function CVEducSection({ educationData }) {
    return (
        <section>
            <div className="cv-title-grid">
                <div className="content-title">
                    <h4>Education</h4>
                </div>
                <div className="separator">
                    <hr />
                </div>
            </div>
            <div className="cv-content-grid">
                {educationData.map(entry => 
                    <Fragment key={entry.uid}>
                        <div className="entry-period content-title">{entry.startDate + " to " + entry.endDate}</div>
                        <div>
                            <div className="cv-entry-titles">{entry.institution}</div>
                            <div>{entry.level}</div>
                            <div>{entry.location}</div>
                            <div>{entry.description}</div>
                        </div>
                    </Fragment>
                )}
            </div>
        </section>

    )
}