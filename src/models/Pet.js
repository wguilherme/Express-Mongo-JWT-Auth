import mongoose from "mongoose";

const petSchema = mongoose.Schema({
    status: {
        type: String,
        default: "Ativo",
    },
    animal: {
        type: String,
    },
    raca: {
        type: String,
    },
    cor: {
        type: String,
    },
    nome: {
        type: String,
    },
    descricao: {
        type: String,
    },
    observacoes: {
        type: String,
    },
    historia: {
        type: String,
    },
    //fotos
    // fotos: {
    //     type: Array,
    // },
    name: {
        type: String,
    },
    size: {
        type: String,
    },
    key: {
        type: String,
    },
    url: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});
const Pet = mongoose.model("Pet", petSchema);

export default Pet;
