import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao : '',
    cor : ''
  }
  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais)

  function setValue(key, valor) {
    setValues({
      ...values,
      [key]: valor,
    })
  }

  function handleChange (e){
    setValue(e.target.getAttribute('name') , e.target.value)
  }

  return(
    <PageDefault>
      <h1>Cadastro de Vídeo: {values.nome}</h1>

      <form 
        onSubmit={function handleSubmit(e) {e.preventDefault()
          setCategorias([
            ...categorias,
            values
          ])
          setValues(valoresIniciais)
        }}>

        <FormField
          label='Nome da Categoria:' 
          type="text"
          name='nome'
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label='Descrição:' 
          type="textarea"
          name='descricao'
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label='Cor:' 
          type="color"
          name='cor'
          value={values.cor}
          onChange={handleChange}
        />
       
        <button>Cadastrar</button>
      </form>
      <ul>
        {categorias.map((categoria, indice)=>{
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir pra Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria