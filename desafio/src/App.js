import React from 'react';
import './App.css';
import {useForm} from 'react-hook-form';

const App = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <>
      <div className="container">
      <main>

  <div className="cadastro-post" >

    <h1>Cadastro</h1>
    <div className="line-post" ></div>

    <div className="card-body-post" >

        <form>

            <div className="fields" >
                <label>Nome:</label>
                <input type="text" name="title" {...register("title")} />
            </div>

            <div className="fields" >
                <label>Sexo:</label>
                <input type="text" name="description" {...register("description")} />
            </div>

            <div className="fields" >
                <label>E-mail:</label>
                <input type="text" name="description" {...register("description")} />
            </div>

            <div className="fields" >
                <label>Data de nascimento:</label>
                <input type="text" name="description" {...register("description")} />
            </div>

            <div className="fields" >
                <label>Naturalidade:</label>
                <input type="text" name="description" {...register("description")} />
            </div>

            <div className="fields" >
                <label>Nacionalidade:</label>
                <input type="text" name="description" {...register("description")} />
            </div>

            <div className="fields" >
                <label>CPF:</label>
                <input type="text" name="description" {...register("description")} />
            </div>



            <div className="btn-post" >
                <button type="submit" >-Enviar-</button>
            </div>

        </form>

    </div>

</div>

</main>
      </div>
    </>
  );

};

export default App;
