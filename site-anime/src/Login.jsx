import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Frieren from './assets/Frieren.png';

function Login() {
  const [values, setValues] = useState({
    email: '',
    senha: ''
  })
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/Login', values)
    .then(res => {
      if(res.data.Status === "Success") {
        navigate('/Home');
      } else {
        alert("Error");
      }
    })
    .then(err => console.log(err));
};

    return (
    <html>
      <style>
        {`
          html{
              overflow: hidden;
          }

          .login {
              position: absolute;
              background-color: black;
              opacity: 0.8;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              padding: 80px;
              border-radius: 15px;
          }

          input{
              padding: 15px;
              outline: none;
              font-size: large;
          }

          button{
              background-color: aquamarine;
              padding: 15px;
              border-radius: 10px;
              width: 100%;
              border: none;
              cursor: pointer;
          }

          .utton:hover{
              background-color: aqua;
          }
        `}
      </style>
      <body>
        <div className="fundo"><img src={Frieren} alt="" /></div>
        <div className="hub">
          <a href="./home">Mit <br />Animes</a>
        </div>
        <div className="login">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input  name="email" type="email" 
            onChange={e => setValues({ ...values, email: e.target.value })} />
            <br /><br />
            <input  name="senha" type="password" 
            onChange={e => setValues({ ...values, senha: e.target.value })} />
            <br /><br />
            <button  name="login" type="submit">Entrar</button>
            <br /><br />
            <Link to={'/register'}>Crie sua conta</Link>
          </form>
        </div>
      </body>
    </html>
  );
};

export default Login;
