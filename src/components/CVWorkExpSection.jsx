import { Fragment } from "react"

export function CVWorkExpSection({ workData }) {
    return (
        <section>
            <div>
                <div>
                    <h4>Work Experience</h4>
                </div>
                <div>
                    <hr />
                </div>
            </div>
            <div>
                {workData.map(entry => 
                    <Fragment key={entry.uid}>
                        <div>{entry.startDate + " to " + entry.endDate}</div>
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