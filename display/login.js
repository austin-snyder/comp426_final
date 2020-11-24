const loginForm = function() {
    var form = `<div class="flex-item flex-column">`;
    form += `<h3>Log In</h3><form>`;
    form += `<label for="username">Username:</label><br>`;
    form += `<input type="text" id="username"><br><br>`;
    form += `<label for="password">Password:</label><br>`;
    form += `<input type="password" id="password"><br><br>`;
    form += `<button id="logInButton">Log In</button>`
    form += `</form></div>`;
    return form;
}

const newUserForm = function() {
    var form = `<div class="flex-item flex-column">`;
    form += `<h3>Create An Account</h3><form>`;
    form += `<label for="newUsername">Username:</label><br>`;
    form += `<input type="text" id="newUsername"><br><br>`;
    form += `<label for="newPassword">Password:</label><br>`;
    form += `<input type="password" id="newPassword"><br><br>`;
    form += `<label for="confirmNewPassword">Confirm Password:</label><br>`;
    form += `<input type="password" id="confirmNewPassword"><br><br>`;
    form += `<button id="signInButton">Sign In</button>`;
    form += `</form></div>`;
    return form;
}

const welcomeMessage = function() {
    var message = `<div class="flex-item flex-column">`;
    message += `<h2>Welcome! Log in to save your favorites or sign up to create an account!</h2>`;
    message += `</div>`;
    return message;
}

$(function() {
    existingUser = loginForm();
    newUser = newUserForm();
    message = welcomeMessage();

    document.getElementById('account').innerHTML = existingUser + newUser;
    document.getElementById('accountWelcome').innerHTML = message;
});