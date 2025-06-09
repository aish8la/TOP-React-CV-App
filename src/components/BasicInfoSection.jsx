import '../styles/BasicInfoSection.css'

export function BasicInfoSection() {
    return (
        <fieldset>
            <legend>
                Basic Information
            </legend>
            <label htmlFor="fullName">
                <span>Full Name</span>
                <input type="text" id="fullName" name="fullName"/>
            </label>
            <label htmlFor="email">
                <span>Email</span>
                <input type="email" id="email" name="email"/>
            </label>
            <label htmlFor="phone">
                <span>Phone</span>
                <input type="tel" id="phone" name="phone"/>
            </label>
        </fieldset>
    )
}