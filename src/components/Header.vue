<template>
  <header class="header">
    <RouterLink to="/">
      <img src="@/assets/icons/logo.svg" alt="Logo" class="logo">
    </RouterLink>

    <form action="/" method="get">
      <img src="@/assets/icons/search.svg" alt="Logo" class="search-icon">

      <input type="search" name="search" id="search" class="search" placeholder="Pesquise por imagens e usuários.">
    </form>

    <nav>
        <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            
            <div class="account-links">
              <li><RouterLink to="/user/signup">Criar conta</RouterLink></li>
              <li><RouterLink to="/user/signin">Entrar</RouterLink></li>
            </div>
        </ul>
    </nav>
  </header>
</template>

<style scoped>
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-color: rgba(255, 255, 255, .5);
    backdrop-filter: blur(5px);
    box-shadow: 3px 3px 15px #c3c3c3;
  }

  .header .logo {
    width: 80px;
  }

  .header form {
    position: relative; 
    width: 50%;
  }

  .header form .search-icon {
    width: 30px;
    position: absolute;
    top: 7px;
    left: 15px;
  }

  .header .search {
    width: 100%;
    padding: 10px 30px 10px 55px;
    border: 3px solid #eedb63;
    border-radius: 30px;
    outline: none;
    font-size: 1em;
  }

  .header .search::-webkit-search-cancel-button {
    width: 20px;
    height: 20px;
    -webkit-appearance: none;
    background: url("@/assets/icons/cancel.svg") center no-repeat;
  }

  .header nav ul {
      display: flex;
      list-style: none;
  }

  .header nav ul li + li {
      margin-left: 5px;
  }

  .header nav ul li a {
      text-decoration: none;
      color: #000;
      padding: 10px;
      transition: all 0.3s;
      border-radius: 5px;
  }

  .header nav ul .account-links {
    display: flex;
    border-left: 1px solid #c3c3c3;
    margin-left: 10px;
    padding-left: 10px;
  }

  .header nav ul li a:hover {
      color: #eedb63;
  }

  .header nav ul li a.router-link-exact-active {
      background-color: #eedb63;
      color: #000;
  }
</style>