import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Frieren from './assets/Frieren.png';


function Register() {
  const [values, setValues] = useState({
    nome: '',
    email: '',
    senha: ''
  })
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/register', values)
      .then(res => {
        if(res.data.Status === "Success") {
          navigate('/login');
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
          html {
            overflow: hidden;
          }
          .cadastro {
            position: absolute;
            background-color: black;
            opacity: 0.8;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            padding: 80px;
            border-radius: 15px;
          }
          input {
            padding: 15px;
            outline: none;
            font-size: large;
          }
          .error-message {
            color: red;
            font-weight: bold;
            margin-bottom: 10px;
          }
          button {
            background-color: aquamarine;
            padding: 15px;
            border-radius: 10px;
            width: 100%;
            border: none;
            cursor: pointer;
          }
          button:hover {
            background-color: aqua;
          }
          `}
        </style>
      <body>
        <div className="fundo"><img src={Frieren} alt="" /></div>
        <div className="hub">
          <a href="./home">Mit <br />Animes</a>
        </div>
        <div className="cadastro">
          <h1>Cadastro</h1>
          <div className="error-message"></div>
          <form onSubmit={handleSubmit}>
            <input name="nome" type="text" placeholder="nome" 
            onChange={e => setValues({ ...values, nome: e.target.value })} required />
            <br /><br />
            <input name="email" type="email" placeholder="email" 
            onChange={e => setValues({ ...values, email: e.target.value })} required />
            <br /><br />
            <input name="senha" type="password" placeholder="senha" 
            onChange={e => setValues({ ...values, senha: e.target.value })} required />
            <br /><br />
            <button type="submit">Cadastrar</button>
            <br /><br />
            <Link to={"/login"}>Login</Link>
          </form>
        </div>
      </body>
    </html>
  );
}

export default Register;
