// =============================================
// 4. ARRAYS — STRETCH: Find the index
// =============================================
// Find the index of target in the array WITHOUT .indexOf().
// Print "Nizwa is at index 3", or "Ibri not found" if it is not in the array.
// Test with target = "Ibri" too.
//
// Expected output:
//   Nizwa is at index 3

const cities = ["Muscat", "Salalah", "Sohar", "Nizwa", "Sur"];
const target = "Nizwa";

// your code here

let found = false;

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === target) {
    console.log(`${target} is at index ${i}`);
    found = true;
  }
}

if (found === false) {
  console.log(`${target} not found`);
}
