window.onload = function (){
    var path = window.location.pathname;
    var curr_filename = path.split("/").pop();

    var jumbotron = document.getElementById("jumb");
    jumbotron.innerHTML =
        `<div class="jumbotron jumbotron-fluid jumbo pt-3">
            <div class="row">
                <div class="col-7 col-sm-5">
                    <img src="img/loghi/pic.png" class="ml-4 mb-4" alt="" style="width: 28%">
                    <img src="img/loghi/fizzy.png" class="ml-4 mb-4" alt="" style="width: 20%">
                    <img src="img/loghi/logo_vibram.png" class="ml-4 mb-4" alt="" style="width: 18%">
                    <img src="img/loghi/logo_imerys.jpg" class="ml-4 mb-4" alt="" style="width: 28%">
                    <img src="img/loghi/Logo%20BancaStato/Bianco/Logo_BancaStato_Bianco.png" class="ml-4 mb-4" alt="" style="width: 28%">
                </div>
                <div class="row">
                    <div class="col-4 col-sm-5">
                        <img src="img/loghi/kv.png" class="ml-5" alt="" style="width: 28%">
                        <img src="img/loghi/terapia.PNG" class="ml-4" alt="" style="width: 23%">
                    </div>
                </div>
            </div>
        </div>`;
    var header_navbar = document.getElementById("head_nav");
    header_navbar.innerHTML = `
            <header class="blog-header pb-3">
                <div class="row flex-nowrap justify-content-between align-items-center">
                    <div class="col-3">
                        <a href="index.html">
                            <img id="logo" src="img/logo.png" alt="">
                        </a>
                    </div>
                    <div class="col-3 text-center">
                        <a class="blog-header-logo text-dark" href="index.html">Delo Vertical Coaching</a>
                    </div>
                    <div class="col-3 d-flex justify-content-end align-items-center">
                        <!--            <a class="btn btn-sm btn-outline-secondary" href="#">Accedi</a>-->
                        <a class="d-none d-md-block" href="https://www.instagram.com/delo_vertical_coaching/" target="_blank"> <i class="fa fa-instagram" aria-hidden="true"></i></a>
                            <button class="navbar-toggler d-md-none" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                <span class="navbar-toggler-icon">
                                  <i class="fa fa-bars" style="color:#53a32b; font-size:28px;"></i>
                                </span>
                              </button>
                        <!--              <a href="https://www.linkedin.com/in/roberto-delorenzi-91b766207" target="_blank"> <i class="fa fa-linkedin" aria-hidden="true"></i></a>-->
                    </div>
                </div>
            </header>
        
<!--            <div class="nav-scroller py-1 mb-2">-->
<!--                <nav class="nav d-flex navbar-expand-md justify-content-between">-->
<!--                    &lt;!&ndash; Toggler/collapsibe Button &ndash;&gt;-->
<!--                    &lt;!&ndash;          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">&ndash;&gt;-->
<!--                    &lt;!&ndash;            <span class="navbar-toggler-icon">&ndash;&gt;-->
<!--                    &lt;!&ndash;              <i class="fa fa-bars" style="color:#53a32b; font-size:28px;"></i>&ndash;&gt;-->
<!--                    &lt;!&ndash;            </span>&ndash;&gt;-->
<!--                    &lt;!&ndash;          </button>&ndash;&gt;-->
<!--                    <a class="p-2 text-muted" href="pricings.html">Allenamenti personalizzati</a>-->
<!--                    <a class="p-2 text-muted" href="team.html">Élite Team</a>-->
<!--                    <a class="p-2 text-muted" href="societa.html">Società sportiva</a>-->
<!--                    <a class="p-2 text-muted" href="shop.html">Shop</a>-->
<!--                    <a class="p-2 text-muted" href="eventi.html">Eventi</a>-->
<!--                    <a class="p-2 text-muted" href="contatti.html">Contatti</a>-->
<!--                </nav>-->
<!--            </div>-->
            
            <nav class="navbar nav d-flex navbar-expand-md justify-content-between">
              <a class="d-md-none" href="https://www.instagram.com/delo_vertical_coaching/" target="_blank"> <i class="fa fa-instagram" aria-hidden="true"></i></a>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav nav-fill w-100">
                        <li class="nav-item">
                            <a class="p-2 text-muted nav-link" href="pricings.html">Allenamenti personalizzati</a>
                        </li>
                        <li class="nav-item">
                            <a class="p-2 text-muted nav-link" href="team.html">Élite Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="p-2 text-muted nav-link" href="societa.html">Società sportiva</a>
                        </li>
                        <li class="nav-item">
                            <a class="p-2 text-muted nav-link" href="shop.html">Shop</a>
                        </li>
                        <li class="nav-item">
                            <a class="p-2 text-muted nav-link" href="eventi.html">Eventi</a>
                        </li>
                        <li class="nav-item">
                            <a class="p-2 text-muted nav-link" href="contatti.html">Contatti</a>
                        </li>
                    </ul>
                </div> 
            </nav>

`;

    var as = document.getElementsByTagName("a");
    for (var i = 0; i < as.length; i++){
        var curr_section = as[i].href.split("/").pop();
        console.log(curr_section);
        if(curr_section === curr_filename){
            as[i].classList.add("active");
            break;
        }
    }
}