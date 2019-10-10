import {Navigation} from 'react-native-navigation';
import HomeCard from './Home';
import Cuenta from './Cuenta';
import Detalles from './Detalles';


export default function registerScreens() {
  Navigation.registerComponent('Home', () => HomeCard);
  Navigation.registerComponent('Cuenta', () => Cuenta);
  Navigation.registerComponent('Detalles', () => Detalles);
}


