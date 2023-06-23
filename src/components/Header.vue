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

<style lang="scss" scoped>
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-color: #ffffff80;
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    box-shadow: 1px 1px 20px 0px #c3c3c3;
    z-index: 10;

      .logo {
        width: 80px;
      }

      form {
        position: relative; 
        width: 50%;

          .search {
            width: 100%;
            padding: 10px 30px 10px 55px;
            border: 3px solid #eedb63;
            border-radius: 30px;
            outline: none;
            font-size: 1em;

              &::-webkit-search-cancel-button {
                width: 20px;
                height: 20px;
                -webkit-appearance: none;
                background: url("@/assets/icons/cancel.svg") center no-repeat;
              }
          }

          .search-icon {
            width: 30px;
            position: absolute;
            top: 7px;
            left: 15px;
          }
      }
      
      nav ul {
        display: flex;
        list-style: none;

          li a {
            text-decoration: none;
            color: #000;
            padding: 10px;
            transition: all 0.3s;
            border-radius: 5px;

              &:hover {
                  color: #eedb63;
                }

              &.router-link-exact-active {
                background-color: #eedb63;
                color: #000;
              }
          }
      }

      li + li {
        margin-left: 5px;
      }

      .account-links {
        display: flex;
        border-left: 1px solid #c3c3c3;
        margin-left: 10px;
        padding-left: 10px;
      }
  }
</style>