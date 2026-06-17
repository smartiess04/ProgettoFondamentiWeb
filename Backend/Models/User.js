const mongoose= require ('mongoose');
const bcrypt= require ('bcrypt');

const userModel= new mongoose.Schema({
    name: {
        type: String,
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
    preferiti:[{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'

    }],
    avatar: {
        type: String,
        default: '🐿️'
    },
    prefererenzeGenere: {
        type: String,
        enum: ['Classici','Fantasy','Gialli','Sci-fi','Romantici','Storici','Biografici','Psicologia']
    },
    bio:{
        type: String,
        default: ' '
    }
    }, {
        timestamps: true //per aggiungere automaticamente i campi createdAt e updatedAt al modello, che tengono traccia della data di creazione e dell'ultima modifica di ogni documento utente

    
});


//Per intercettare il salvataggio della Password, che viene hashata
userModel.pre("save", async function () {
    if (!this.isModified('password')) {
        return;
    }

    this.password = await bcrypt.hash(this.password, 10);
});

//Per il login
userModel.methods.passwordComparison= async function(inputPassword){
    let user= this;
    return await bcrypt.compare(inputPassword, this.password)
};

module.exports= mongoose.model('User',userModel) 