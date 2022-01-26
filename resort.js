document.getElementById("bar").addEventListener("click",() => {
    document.getElementById("menu").innerHTML = `<ul>
           <li>HOME</li>
           <li>ACCOMODATION</li>
           <li>FACILITIES</li>
           <li>GALLERY</li>
           <li>EXPLORE ALIBAUG</li>
           <li>CONTACT</li>
           <li>BOOK NOW</li>
       </ul>`;

});

document.getElementsByClassName('date1').disabled = true;