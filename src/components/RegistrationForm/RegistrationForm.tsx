const RegistrationForm = () => {
    return (
        <div>
            <h1>This is the registration page</h1>
            <form>
                <input type="text" name="handle" placeholder="Username"></input>
                <input type="password" name="password" placeholder="Password"></input>
                <button type="submit" value="register">Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;