const getString = window.location.search; // 'window.location.search' - this is the search bar of the website
console.log(getString); //to display the result, just put inside the parenthesis the parameter's name

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get('first')); //the parameter here is the id was based in html 
console.log(myInfo.get('last'));
console.log(myInfo.get('ordinance'));
console.log(myInfo.get('date'));
console.log(myInfo.get('location'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('email'));


// to get the result using the template literal
document.querySelector('#results').innerHTML = `
<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')}</p>
<p>Your Phone: ${myInfo.get('phone')}</p>
<p>Your email is: ${myInfo.get('email')}</p>`

const timestamp = new Date().toLocaleString();
console.log(timestamp);
