export function BasicInfoSection() {
    return (
        <fieldset>
            <legend>
                Basic Information
            </legend>
            <label htmlFor="fullName">
                Full Name
                <input type="text" id="fullName" name="fullName"/>
            </label>
            <label htmlFor="email">
                Email
                <input type="email" id="email" name="email"/>
            </label>
            <label htmlFor="phone">
                Phone
                <input type="tel" id="phone" name="phone"/>
            </label>
        </fieldset>
    )
}