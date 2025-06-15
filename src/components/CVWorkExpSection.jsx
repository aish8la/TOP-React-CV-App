import { Fragment } from "react"

export function CVWorkExpSection({ workData }) {
    return (
        <section>
            <div className="cv-title-grid">
                <div className="content-title">
                    <h4>Work Experience</h4>
                </div>
                <div className="separator">
                    <hr />
                </div>
            </div>
            <div className="cv-content-grid">
                {workData.map(entry => 
                    <Fragment key={entry.uid}>
                        <div className="entry-period content-title">{entry.startDate + " to " + entry.endDate}</div>
                        <div>
                            <div>{entry.company}</div>
                            <div>{entry.position}</div>
                            <div>{entry.location}</div>
                            <div>{entry.description}</div>
                        </div>
                    </Fragment>
                )}
            </div>
        </section>

    )
}