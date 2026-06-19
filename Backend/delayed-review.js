const test = async () => {
    let res = await fetch('http://localhost:3000/api/v1/auth/login', {
        method: 'POST', headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email: 'test2@example.com', password: 'password123'})
    });
    let cookies = res.headers.get('set-cookie');
    
    // get a book
    res = await fetch('http://localhost:3000/api/v1/books', {
        headers: {'Cookie': cookies}
    });
    let books = await res.json();
    let book = books[0];
    
    console.log("Waiting 15 seconds...");
    await new Promise(r => setTimeout(r, 15000));
    
    console.log("Sending review...");
    res = await fetch('http://localhost:3000/api/v1/books/'+book._id+'/reviews', {
        method: 'POST', headers: {'Content-Type': 'application/json', 'Cookie': cookies},
        body: JSON.stringify({voto: 5, commento: 'Recensione in tempo reale inviata dal background!'})
    });
    console.log("Review sent:", res.status);
}
test();
