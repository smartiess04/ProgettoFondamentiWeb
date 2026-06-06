const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Metodo per registrare un nuovo utente
async function register(req, res) {
    try {
        //1. recupera i dati di registrazione dal corpo della richiesta del client
        const { username, email, password } = req.body;

        //2. controllo se esiste già un utente con lo stesso username o email 
        const existingUser = await User.findOne({
            $or: [{ username }, { email }]
        });

        //3. restituisce messaggio di errore se esiste già un utente con lo stesso username o email
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }

        //4.crea un nuovo utente con i dati forniti (username, email e password)
        const newUser = new User({ username, email, password });

        //5.salva il nuovo utente nel database
        await newUser.save();

    //restituisce una risposta di successo al client con un messaggio e i dati dell'utente appena registrato (id, username e email)
        res.status(201).json({
            message: 'User registered successfully', 
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email,
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
}


// Metodo per effettuare il login di un utente
async function login(req, res) {
    try{
        //estrarre email e password dalla richiesta del client
        const {email, password} = req.body;

        //cercare utente a cui corrisponde tale email
        const User = await User.findOne({ email });

        //se l'utente non esite
        if (!User){
            return res.status(401).json({ message: 'Invalid email or password'}); //scrivo anche or password per evitare eventuale attacco in cui vogliono sapere se quella mail è registrata o meno, e io non glielo dico TIE'
        }


    //fare match della password
    const passwordCorretta = await User.passwordComparison(password);

    if (!passwordCorretta){
        return res.status(401).json({ message: 'Invalid email or password'});
    }

    //generare il JWT da legare all'ID dell'utente 

    const tokenSessione = jwt.sign({ userId: User._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
        token,
        user: {
            id: User._id,
            username: User.username,
            email: User.email,
        }
    });

} catch (error){
    res.status(500).json({ message:'Logging failed'});
}

}

module.exports = {
    register, 
    login
};