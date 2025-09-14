import 'bootstrap/dist/css/bootstrap.min.css';
import Loginbtn, { Logoutbtn, Addtocartbtn, Join } from './Btns.js';
import Borderedtbl, { Hovertbl, Responsivetbl } from './Tbls.js';
import Warningmsg, { Infomsg, Secondarymsg } from './Msgs.js';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container>
        <h2 className='my-5'>This is App Funaction</h2>
        <Borderedtbl />
        <Hovertbl />
        <Responsivetbl />
      </Container>
    </>
  );
}

function All() {
  return (
    <>
      <Container>
        <h2 className='my-5'>This is All Function(Login,Logout,Addtocart)</h2>
        <Loginbtn />
        <Logoutbtn />
        <Addtocartbtn />
        <Join />
      </Container>
    </>
  );
}

function Mix() {
  return (
    <>
      <Container>
        <h2 className='my-5'>This is Mix Funaction(Inforamtion,Secondary)</h2>
        <Warningmsg />
        <Infomsg />
        <Secondarymsg />
      </Container>
    </>
  );
}

export default App;
export { All, Mix };