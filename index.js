document.getElementById('viewResumeBtn').addEventListener('click', function () {
  var resumePath = 'https://drive.google.com/file/d/1w-RxGLGx1xWRn0Z5mGUF6Rboy_K74AUf/view?usp=sharing';

  var newTab = window.open(resumePath, '_blank');

  // // Check if the new tab was successfully opened
  // if (newTab) {
  //   // Focus on the new tab
  //   newTab.focus();

  //   // Provide a download link in the new tab
  //   newTab.document.write(`
  //     <html>
  //       <head>
  //         <title>Resume</title>
  //       </head>
  //       <body>
  //         <p>Click <a href="${resumePath}" download>here</a> to download the resume.</p>
  //       </body>
  //     </html>
  //   `);
  // } else {
  //   // Display an error message if the new tab couldn't be opened
  //   alert('Unable to open the resume. Please check your browser settings.');
  // }
});
