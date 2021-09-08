import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UserSearch() {
  const [userSearch, setUserSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  function changeUser(event) {
    setUserSearch(event.target.value);

    if(event.target.value === '') {
      setShowResults(false)
    }
  }

  function handleFormSubmit(event) {
    setShowLoading(true);
    event.preventDefault();

    fetch(`https://api.github.com/search/users?q=${userSearch}`, {
      headers: {
        'Authorization': `token ${process.env.REACT_APP_TOKEN}`
      }
    })
      .then(resposta => resposta.json())
      .then(resposta => setUsers(resposta.items))
      .catch(erro => alert('Deu ruim'));
  }

  useEffect(() => {
    console.log(users)
    setShowResults(true);
    setShowLoading(false);
  }, [users])


  return (
    <main>
      <h1>Pesquisa de usuário</h1>
      <small>Procure usuários, usando a pesquisa nativa do GitHub.</small>

      <form onSubmit={e => handleFormSubmit(e)} className="mb-3 pb-3">
        <fieldset className="mb-3">
          <label htmlFor="user" className="form-label">Usuário</label>
          <input
            type="text"
            placeholder="Filipe Deschamps"
            className="form-control"
            id="user"
            aria-describedby="ajudaPesquisa"
            value={userSearch}
            onChange={e => changeUser(e)}
          />
          <p id="ajudaPesquisa" className="form-text">Você pode pesquisar o nome ou o @ do usuário no GitHub. Em seguida, irá aparecer uma lista com essas informações!</p>
        </fieldset>
        <button type="submit" className="btn btn-success">Pesquisar</button>
      </form>

      {showLoading &&
        (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
          </div>
        )
      }

    {showResults &&
      (
        <section className="card-group">
          {users.map(user =>
            (
              <Link to={`/profile/${user.login}`} key={user.id}>
                <article className="card">
                  <img src={user.avatar_url} alt={`Foto de perfil de ${user.login}`} className="card-img-top" />
                  <section className="card-body">
                    <h5 className="card-title">{user.login}</h5>
                  </section>
                </article>
              </Link>
            )
          )
          }
        </section>
      )
    }
    </main>
  )
}

export default UserSearch;