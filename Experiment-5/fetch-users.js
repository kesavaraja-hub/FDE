// Experiment 5: consume an external REST API
const url = "https://jsonplaceholder.typicode.com/users";
 
const res = await fetch(url);            // built into Node 18+
console.log("Status:", res.status);
 
const users = await res.json();
console.log("Users received:", users.length);
for (const u of users.slice(0, 3)) {
  console.log(`${u.id}. ${u.name} - ${u.email} (${u.address.city})`);
}
