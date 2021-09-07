import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './spinner.module.css';

function Spinner() {
  return (
    <div className={s.spinner}>
      <Loader
        type="Watch"
        color="#3f51b5"
        height={50}
        width={50}
        timeout={3000}
      />
    </div>
  );
}
export default Spinner;
