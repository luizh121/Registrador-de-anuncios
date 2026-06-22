import { Provider } from 'react-redux';
import { store }    from './src/redux/store';
import  {HomeStack} from './src/navigation/HomeStack';

export default function App() {
  return (
    <Provider store={store}>
      <HomeStack/>
    </Provider>
  );
}


