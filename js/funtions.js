function createCard(country) {
    return `
    
    <div id="countryy" class="country-cards">

    <img src=" ${country.flags.png}" width="100%" height="150" alt="">
    <h2 class="country-name">${country.name.common}</h2>

    <div class="countries-info">
        <p>Population: ${country.population}</p>
        <p>Region: ${country.region}</p>
        <p>Capital: ${country.capital}</p>
    </div>

     </div> `;
}


function oneCountInfo(count){
    return`
    <button id="button" class="btn">
                <i class="fa-solid fa-arrow-left"></i>
                Back
            </button>
            <div class="countImgInfo">
                <div class="countImg">
                    <img src="${count.flags.png}" alt="" width="560" height="401">
                </div>

                <div class="countInfo">
                    <h1>${count.name.common}</h1>
                    <div class="infos">
                        <div class="left-info">
                            <p>Native Name: ${count.name.nativeName}</p>
                            <p>Population: ${count.population}</p>
                            <p>Region: ${count.region}</p>
                            <p>Sub Region: ${count.subregion}</p>
                            <p>Capital: ${count.capital}</p>
                        </div>

                        <div class="right-info">
                            <p>Top Level Domain: .be</p>
                            <p>Currencies: ${count.currencies}</p>
                            <p>Languages: ${count.language}</p>
                        </div>
                    </div>
                    <div class="border-countries">
                        <h4>Border Countries</h4>
                        <button>${count.borders[1]}</button>
                        <button>${count.borders[2]}</button>
                        <button>${count.borders[3]}</button>
                    </div>
                </div>
            </div>
    `
}
export{createCard,oneCountInfo}