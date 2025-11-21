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
    const organization = myInfo.get('organization');
    const membership = myInfo.get('membership');
    const orgDescription = myInfo.get('orgDescription');

    document.querySelector('#results').innerHTML = `
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Title/Role:</strong> ${orgTitle}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${mobile}</p>
    <p><strong>Organization:</strong> ${organization}</p>
    <p><strong>Membership:</strong> ${membership}</p>
    <p><strong>Organization Description:</strong> ${orgDescription}</p>
    <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
    `;

