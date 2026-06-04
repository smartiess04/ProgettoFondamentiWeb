const mongoose= require ("mongoose");
const bcrypt= require ('bcrypt');

const userModel= new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Inserire il nome'],
        trim: true, //per rimuovere gli sapzi vuoti all'inzio e alla fine della stringa,
        minlength: [2,'Il nome deve avere almeno due caratteri']
    },
    username:{
        type: String,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: [true,'Inserire un\'email valida'],
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Inserire un\'email valida']
    },
    password:{
        type: String,
        required: [true,'Inserire una password'],
        minlength: [6,'La password deve contenere almeno 6 caratteri'],
        select: false //Di default nasconde sempre questo campo quando vengono chiesti i dati dell'utente
    },
    avatar: {
        type: String,
        default: 'https://api.dicebear.com/10.x/icons/svg?seed=Felix'
    },
    prefererenzeGenere: {
        type: String,
        enum: ['Classici','Fantasy','Gialli','Sci-fi','Romantici','Storici','Biografici','Psicologia']
    },
    bio:{
        type: String,
        default: ' '
    },

    createdAt:{
        type: Date,
        default: Date.now
    }
});

//Per intercettare il salvataggio della Password, che viene hashata
userModel.pre("save",function (next) {
    let user= this;
    bcrypt.hash(user.password,10)
    .then(hash=>{user.password=hash
        next();
    })
});

//Per il login
userModel.methods.passwordComparison= function(inputPassword){
    let user= this;
    return bcrypt.compare(inputPassword,user.password)
};

module.exports= mongoose.model('User',userModel)