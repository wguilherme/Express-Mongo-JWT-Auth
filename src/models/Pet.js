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
  fotos: {
    type: Array,
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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
const Pet = mongoose.model("Pet", petSchema);

export default Pet;
