// document.getElementById("submitForm").addEventListener("submit", (event) => {
//   event.preventDefault();
// });

// // Submit Form
// const submitDetails = () => {
//   // Getting Input Data
//   const inputName = document.getElementById("inputName").value;
//   const email = document.getElementById("inputEmail").value;
//   const password = document.getElementById("inputPassword").value;
//   const confirmPassword = document.getElementById("confirmPassword").value;

//   // Input Field Validation
//   if ((inputName == "", email == "", password == "", confirmPassword == "")) {
//     swal("Hey!", "Please fill in your details", "warning");
//   } else if (password.length < 7 && confirmPassword.length < 7) {
//     swal(
//       "Weak Password",
//       "Make sure your password length is greater than 8",
//       "warning"
//     );
//   } else if (password != confirmPassword) {
//     swal("Password Mismatch", "Fill in the correct password", "warning");
//   } else if (inputName && email && password && confirmPassword) {
//     swal("Good job!", "You clicked the button!", "success");

//     setTimeout(() => {
//       window.location.assign("./upload.html");
//     }, 1500);
//   }
// };

// Submit Resume
document.getElementById("submitResume").addEventListener("submit", (event) => {
  event.preventDefault();
});

const submitResume = () => {
  const resume = document.getElementById("resume").value;
  const resumeURL = document.getElementById("resumeURL").value;

  var postResume = {
    photoFilename: resume,
    uploadURL: resumeURL,
  };

  if (resume) {
    fetch(
      "https://3uxec4442l.execute-api.us-east-1.amazonaws.com/default/getPresignedURL",
      {
        method: "PUT",
        body: JSON.stringify(
          `{             
              "uploadURL": "${postResume.uploadURL}"
              "photoFilename" : "${postResume.photoFilename}",
          }`
        ),
        headers: {
          "Content-Type": "text/plain",
        },
      }
    ).then(function (postResume) {
      alert("Congrats");
    });
  } else {
    swal("Hey!", "Please fill in your details", "warning");
  }
  //   console.log(`${resume}`);
};
