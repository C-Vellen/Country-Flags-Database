// code permettant de générer un tableau des pays avec leur drapeau

// adresse des images .svg représentant les drapeaux :
// const flagPath = "/home/DATA/ECOSKETCH/SiteWeb/APPS_DATAVIZ/SVGD3/05-GRAPH_drapeaux_de_tous_les_pays/dataset_source/flag-icons_2023_update/"
const flagPath = "dataset_source/flag-icons_2023_update/"

const container = document.createElement("div")
document.querySelector("body").append(container)
container.setAttribute("id", "container")

const createLegend = (node) => {
    const countrybox = document.createElement("div")
    const continentbox = document.createElement("div")
    const codebox = document.createElement("div")
    node.append(countrybox)
    node.append(continentbox)
    node.append(codebox)
    node.append(countrybox)
    node.append(continentbox)
    node.append(codebox)
    countrybox.setAttribute("class", "countrybox")
    continentbox.setAttribute("class", "continentbox")
    codebox.setAttribute("class", "codebox")

    const country = document.createElement("h1")
    countrybox.append(country)

    const continent = document.createElement("h2")
    continentbox.append(continent)

    const codetitre = document.createElement("h3")
    const code = document.createElement("p")
    codebox.append(codetitre)
    codebox.append(code)
    codetitre.textContent = "Codes ISO :"

    return node
}

const updateLegend = (node, c) => {
    node.querySelector("h1").textContent = countryId[c][2]
    node.querySelector(".continentbox").style.backgroundColor = countryId[c][8]
    node.querySelector("h2").textContent = countryId[c][6]
    node.querySelector("p").textContent = `${c} / ${countryId[c][0]}`
}




for (c of Object.keys(countryId)) {

    const line = document.createElement("div")
    const miniflag = document.createElement("img")
    
    // création ligne
    container.append(line)
    line.setAttribute("id", c)
    line.setAttribute("class", "line")
    line.append(miniflag)

    // affichage mini-drapeau
    miniflag.setAttribute("class", "miniflag")
    miniflag.setAttribute("src", `${flagPath}${countryId[c][0].toLowerCase()}.svg`)
    miniflag.setAttribute("alt", `Drapeau de : ${countryId[c][2]}.`)

    // affichage texte et couleurs continent
    createLegend(line)
    updateLegend(line, c)
}

// création popup
const popup = document.createElement("div")
container.append(popup)
const flag = document.createElement("img")
popup.append(flag)
const legend = document.createElement("div")
popup.append(legend)
popup.setAttribute("id", "popup")
flag.setAttribute("id", "flag")
legend.setAttribute("id", "legend")
createLegend(legend)

flag.style.width ="2%"
flag.style.height ="2%"
    
container.querySelectorAll(".line").forEach( event => {
    event.addEventListener("pointerdown", (e) => {
        const c = e.currentTarget.id
        popup.style.visibility = "visible"
        flag.setAttribute("src", `${flagPath}${countryId[c][0].toLowerCase()}.svg`)
        flag.setAttribute("alt", `Drapeau de : ${countryId[c][2]}.`)
        flag.style.width ="80%"
        flag.style.height ="80%"
        updateLegend(legend, c)
    })
    document.querySelector("#popup").addEventListener("pointerdown", (e) => {
        flag.style.width ="2%"
        flag.style.height ="2%"
        popup.style.visibility = "hidden"
    })
})

