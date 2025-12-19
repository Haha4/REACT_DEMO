
import { useParams } from 'react-router-dom';



const MyFunctionComponent = (props) => {
  let { id } = useParams();
  return <div>路由参数{id}</div>;
};
export default MyFunctionComponent;