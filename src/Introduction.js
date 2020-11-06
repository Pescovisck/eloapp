import Button from "./Button";
import logo from './logo.svg';

function Introduction() {
  return (
    <div className="Introduction">
        <img src={logo} className="Introduction-logo" alt="logo" />
        <h1>FRASE DE VENDA</h1>
        <Button text="cta"/>
    </div>
  );
}

export default Introduction;
