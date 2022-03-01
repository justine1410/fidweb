

let button = document.querySelector(".button")



button.addEventListener('click', (e)=>{
    e.preventDefault();
    let service = document.querySelector(".service_explication")
    service.innerHTML=" "
    service.insertAdjacentHTML("afterbegin",`
    <div class="dispo1">
        <div class="explication1">
            <h3>Design</h3>
            <p>Tous les sites internet sont uniques afin de s'adapter à vos besoins, tout en restant simple d'utilisation
                avec une conception épurés 
            </p>    
        </div>

        <div class="explication2">
            <h3>Intégration web</h3>
            <p>Tous les sites internet respectent les standards du web ainsi que l'accessibilité </p>
        </div>
        <div class="explication3">
            <h3>Référencement naturel</h3>
            <p>Tous les sites internet sont crées pour avoir un référencement naturel optimal</p>    
        </div>

        <div class="explication4">
            <h3>Responsive design</h3>
            <p>En cette époque où tout le monde à un smartphone ou une tablette tous les sites sont comptatible
                sur mobile ainsi que sur tablette
            </p>
        </div>


    </div>

    `)

 window.scrollTo(0,720)


})



