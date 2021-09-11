# Password Generator Implementation
This is a pretend refactor of a website to implement a password generator that employees can use to generate random passwords. The website can be accessed [here.](https://zachary-berdell-elliott.github.io/password-generator-refactor/)
![Picture of the website after password generator is clicked.](./website-image.png)
## Original
The website had finished html and css. There was some code for taking the value that is returned from a password generation function and printing it out on the screen but this had not yet been written.

## Length Selection
The user is greeted with a prompt that asks them to put in a length after they click the button to generate the password. It allows them to enter a value between 8 and 128 and will prompt them with a reminder to make sure they entered a value between these two numbers and to make sure they have no typing errors if they don't enter a value between these numbers.

## Character Selection 
Next the user selects what characters they would like to include in the password. The user can choose to include uppercase, lowercase, numbers, or special characters and will be prompted to select at least one and go through the loop again if they didn't select any.

## Password generation
The password generator concludes with putting a password out on the screen that the user can then save as a password.
