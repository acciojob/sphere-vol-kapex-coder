function volume_sphere(e) {
	event.preventDefault();
    //Write your code here
	// Step 1: Retrieve radius value
    let radius = parseInt(document.getElementById("radius").value);
    
    // Step 2: Validate input
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = 'NaN';
        return;
    }
    
    // Step 3: Calculate volume
    let ans = (4/3) * Math.PI * Math.pow(radius, 3);
    
    // Step 4: Round the result
    ans = ans.toFixed(4);
    
    // Step 5: Display the result
    document.getElementById("volume").value = ans;
}

// window.onload = document.getElementById('MyForm').onsubmit =
// 	function(event) {
//         event.preventDefault(); // Prevent the form from submitting
//         volume_sphere(); // Call the function
//     };


// function volume_sphere() {
//     //Write your code here
  
// } 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
