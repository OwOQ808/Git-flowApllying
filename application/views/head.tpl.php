<nav class="navbar navbar-expand-lg navbar-light bg-light navbar-default">  
    <div class="container-fluid"> 
    <a class="navbar-brand" id='home'>
        <img src="/resourses/images/logo.png">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">  
         <div class="icons">
            <i class="fa fa-user-circle  iconed" id='icon1' aria-hidden="true"></i>
            <i class="fa fa-shopping-bag  iconed" id='icon2' aria-hidden="true"></i>
            <i class="fa fa-book  iconed" id='icon3' aria-hidden="true"></i>
        </div>
        <div class="dropdown">
        <button type = "button" class = "btn btn-default navbar-btn but" id="dropdown">Каталог</button>
        <div class="menu" id='menuCat'>
        </div>
        </div>
       
        <div class="d-flex d-inline w-100">
        <input class="form-control me-2" type="search" id ="searchers" placeholder="Ищите книгу по названию или ключевым словам..." aria-label="Search">
        <button class="btn btn-outline-success" id="search">Поиск</button>
      </div>
        </div>
    </div>
    </nav>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="/resourses/js/menu.js"></script>
    