// UNKNOWN TYPE
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
// userName = userInput; // Error karena userInput unknown tidak guarantee string, beda dengan any yang tidak error biarpun tidak menjamin string
// NEVER TYPE
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while(true) {
    // }
}
generateError('An Error occured!', 500);
