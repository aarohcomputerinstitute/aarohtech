async function testLogin() {
    try {
        const res = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: "aarohonline@gmail.com", password: "Aaroh@1986#" })
        });
        
        console.log("Status:", res.status);
        console.log("Headers:", Object.fromEntries(res.headers.entries()));
        const data = await res.json();
        console.log("Data:", data);
    } catch (e) {
        console.error("Fetch failed:", e);
    }
}
testLogin();
