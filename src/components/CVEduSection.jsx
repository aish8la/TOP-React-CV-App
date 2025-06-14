import { Fragment } from "react"

export function CVEducSection({ educationData }) {
    return (
        <section>
            <div>
                <div>
                    <h4>Education</h4>
                </div>
                <div>
                    <hr />
                </div>
            </div>
            <div>
                {educationData.map(entry => 
                    <Fragment key={entry.uid}>
                        <div>{entry.startDate + " to " + entry.endDate}</div>
                        <div>
                            <div>{entry.institution}</div>
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