import { Provider } from 'react-redux';
import { store }    from './src/redux/store';
import  {HomeStack} from './src/navigation/HomeStack';
import { AuthStack } from './src/navigation/Authstack';
import { auth } from './firebaseConfig';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';


export default function App() {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const inscricao = onAuthStateChanged(
      auth, (usuario) => { setUser(usuario);      
    });
    return inscricao;
  })

  return (
    <Provider store={store}>
      {user ? <HomeStack/> : <AuthStack/>}
    </Provider>
  );
}


