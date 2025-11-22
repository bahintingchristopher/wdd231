    const getString = window.location.search;
    console.log(getString); // shows query string

    const myInfo = new URLSearchParams(getString);
    console.log(myInfo);


    console.log(myInfo.get('firstName')); 
    console.log(myInfo.get('lastName')); 
    console.log(myInfo.get('orgTitle')); 
    console.log(myInfo.get('email')); 
    console.log(myInfo.get('mobile')); 
    console.log(myInfo.get('organization')); 
    console.log(myInfo.get('membership')); 
    console.log(myInfo.get('orgDescription')); 

    const firstName = myInfo.get('firstName');
    const lastName = myInfo.get('lastName');
    const orgTitle = myInfo.get('orgTitle');
    const email = myInfo.get('email');
    const mobile = myInfo.get('mobile');
    const membership = myInfo.get('membership');
    const orgDescription = myInfo.get('orgDescription');
     const designation = myInfo.get('designationTitle');

    document.querySelector('#results').innerHTML = `
    <h2>These are the details from your submission:</h2>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong>  ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Mobile Phone:</strong> ${mobile}</p>
    <p><strong>Business/Organization Title:</strong> ${orgTitle}</p>
    <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>


    <h3>Other Details:</h3>
    <p><strong>Position / Designation Title:</strong> ${designation}</p>
    <p><strong>Membership Level:</strong> ${membership.toUpperCase()}</p>
    <p><strong>Organization Description:</strong> ${orgDescription}</p> 
    `;


    
