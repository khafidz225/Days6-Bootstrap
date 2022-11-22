let namaId = (id) => document.getElementById(id)
let classes = (classes) => document.getElementsByClassName(classes)

// checked checkbox
let nodeJs = namaId('nodeJs')
let javaScript = namaId('javascript')
let reactJs = namaId('reactJs')
let typeScript = namaId('typeScript')

const data = []

// let x = new Date();



function addData(event){
    event.preventDefault()

    let title = namaId('input-title').value
    let content = namaId('input-content').value
    let image = namaId('input-upload').files

    let gambar = URL.createObjectURL(image[0])
    console.log("gambar path", gambar)

    let startDate = namaId('start-date').value
    let endDate = namaId('end-date').value

    // ----Menyimpan img untuk di panggil----
    let iconNodeJs = ''
    let iconjavaScript = ''
    let iconReactJs = ''
    let icontypeScript = ''

    // ----Cek kondisi jika true isi let di atas----
    if(nodeJs.checked === true){
        iconNodeJs = 'img/nodejs.png'
    }
    if(javaScript.checked === true){
        iconjavaScript = 'img/javaScript.png'
    }
    if(reactJs.checked === true){
        iconReactJs = 'img/reactJs.png'
    }
    if(typeScript.checked === true){
        icontypeScript = 'img/typeScript.png'
    }
    
    // ----Menampung data untuk di kirim ke Array data----
    let blog = {
        title,
        content,
        gambar,
        iconNodeJs,
        iconjavaScript,
        iconReactJs,
        icontypeScript,
        startDate,
        endDate
    }
    
    
    data.push(blog)
    console.log(data)
    
} 
renderBlog()

function renderBlog(){
    namaId('content').innerHTML = ''

    for(let index = 0; index < data.length; index++){
        namaId('content').innerHTML +=
        `<a href="profilDetail.html" class="hrefjs">
            <div class="card-myproject">
                <img src="${data[index].gambar}" alt="">
                <h3>${data[index].title}</h3>
                <p>durasi: ${rangeTime(data[index].startDate, data[index].endDate)}</p>
                <p>${data[index].content}</p>
                <div class="icon-myproject">
                    <img src="${data[index].iconNodeJs}" alt="">
                    <img src="${data[index].iconjavaScript}" alt="">
                    <img src="${data[index].iconReactJs}" alt="">
                    <img src="${data[index].icontypeScript}" alt="">
                </div>
                <div class="custom-myproject">
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>        
        </a>`
    }
    
    function rangeTime(startDate, endDate){
        
        let start = startDate
        let end = endDate
    
        let dateStart = new Date (start)
        let dateEnd = new Date(end)

        let minTime = dateEnd - dateStart
        let millSecond = 1000
    
        let distanceDay = Math.floor(minTime / (millSecond * 60 * 60 * 24))
        console.log(distanceDay)
        let distanceMount = Math.floor(minTime / (millSecond * 60 * 60 * 24 * 30))
    
        if(distanceMount > 0){
            return `${distanceMount} Mount`
        } else {
            return `${distanceDay} Days`
        }
    }
}