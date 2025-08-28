import Success from './components/Success'
import Fail from './components/Fail'
import UseTitle from '../../hooks/UseTitle'
import { useLocation } from 'react-router-dom'


const Order = () => {
  UseTitle("order Summary");  
  const {state} = useLocation();
  return (
    <main className="dark:bg-gray-900 ">
      {state.status ? <Success data={state.data} /> : <Fail />}
    </main>
  );
}

export default Order
