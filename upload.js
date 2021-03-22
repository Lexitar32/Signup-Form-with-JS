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
