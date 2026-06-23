import  {db}                                   from "../../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";



export async function criarAnuncio(
  titulo,
  descricao,
  preco,
  uid,
  email
) {
    return await addDoc (

        //indica onde salvar os dados no firebase
        collection(db, 'anuncios'), {
            titulo,
            descricao,
            preco,
            uid,
            email,
            createdAt: serverTimestamp(),

        }
    )
      
}