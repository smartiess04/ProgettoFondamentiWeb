const jwt = require('jsonwebtoken');
const refreshToken= require('../models/RefreshToken');
const User = require('../models/User');
const cookieParser= require ('cookie-parser');


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
        const user = await User.findOne({ email });

        //se l'utente non esite
        if (!user){
            return res.status(401).json({ message: 'Invalid email or password'}); //scrivo anche or password per evitare eventuale attacco in cui vogliono sapere se quella mail è registrata o meno, e io non glielo dico TIE'
        }

        //fare match della password
        const passwordCorretta = await User.passwordComparison(password);

        if (!passwordCorretta){
            return res.status(401).json({ message: 'Invalid email or password'});
    }

//TOKEN

    const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });
    const refreshToken= jwt.sign({userId:user._id},process.env.REFRESH_SECRET, {expiresIn: '7d'});
    
    //salvo refresh token nel database per un possibile revok al logout
    const expiresAt= new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);
    
    await refreshToken.create({
    userId: user._id,
    token: refreshTokenString,
    expiresAt: expiresAt
    });

    const cookieOptions= {
        httpOnly: true,
        secure: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
    }

    //Invio RefreshToken tramite Cookie HTTP-only
    res.Cookie('jwt_refresh',refreshTokenString,{
        ...cookieOptions,
        path: "api/v1/auth/refresh",
        maxAge: 7*24*60*60*1000  
    });
     
    //Invio AccessToken nel corpo della richiesta
    res.Cookie('jwt_access',accessToken,{
        ...cookieOptions,
        maxAge: 15*60*1000
    })
    res.status(200).json({
            message: "Successfully Logged",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            }
        });
    } catch (error){
        res.status(500).json({ message:'Logging failed',error});
    }
}

async function refresh(req,res){
    try{

    }catch{

    }


}

async function logout(req,res){
    try{
        

    }catch{

    }

}

module.exports = {
    register, 
    login,
};