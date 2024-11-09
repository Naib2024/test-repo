const endpoint = "http://localhost:3000/users/"
const products = document.querySelector("#product")
const tbody = document.querySelector("#tbody")

// get element
const ShowData = () => {
    tbody.innerHTML = ""
    axios.get(endpoint).then(({ data }) => {

        data.forEach(({ id, marka, model, ram, processor, hard_drive, screen_size, operating_system }) => {
            tbody.innerHTML += `<div class="row mt-4" id="product">
                    <table class="table table-bordered table-striped ">
                        <thead>
                            <tr>
                        <td>${marka}</td>
                        <td>${model}</td>
                        <td>${processor}</td>
                        <td>${ram}</td>
                        <td>${hard_drive}</td>
                        <td>${screen_size}</td>
                        <td>${operating_system}</td>
                        <td><button><a href="./products.html?products=${id}">baxaq gorek</a></button></td>
                         <td><button onclick="deleteProduct('${id}')">delete</button></td>
                          <td><button onclick="editProduct('${id}')">Edit</button></td>
                    </tr>
                        </thead>
                        <tbody id="tbody">
                        </tbody>
                     </table>
                    </div>`


        });
    }).catch((err) => {
        console.log(err);
    })
}

ShowData()


const deleteProduct = (id) => {
    const isAgree = confirm("Heqiqeten silmek istiyirsen?");
    if (isAgree) {
        axios.delete(`${endpoint}${id}`).then((res) => { // Use `${endpoint}${id}`
            if (res.status === 200) {
                ShowData(); // Refresh data after deletion
            }
        }).catch((err) => {
            console.log(err);
        });
    }
};



// add new Product

const addForm = document.querySelector("#addForm")
const markaInp = document.querySelector("#markaInp")
const modelInp = document.querySelector("#modelInp")
const processorInp = document.querySelector("#processorInp")
const ramInp = document.querySelector("#ramInp")
const harddriveInp = document.querySelector("#harddriveInp")
const screensizeInp = document.querySelector("#screensizeInp")
const operatingsystemInp = document.querySelector("#operatingsystemInp")

addForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const newProduct = {
        marka: markaInp.value,
        model: modelInp.value,
        processor: processorInp.value,
        ram: ramInp.value,
        hard_drive: harddriveInp.value,
        screen_size: screensizeInp.value,
        operating_system: operatingsystemInp.value,
    };

    if (!markaInp.value) {
        errorMeassage(markaInp, "bos saxlamq olmaz")
    } else if (!modelInp.value) {
        errorMeassage(modelInp, "bos saxlamq olmaz")
    } else if (!processorInp.value) {
        errorMeassage(processorInp, "bos saxlamq olmaz")
    } else if (!ramInp.value) {
        errorMeassage(ramInp, "bos saxlamq olmaz")
    } else if (!harddriveInp.value) {
        errorMeassage(harddriveInp, "bos saxlamq olmaz")
    } else if (!screensizeInp.value) {
        errorMeassage(screensizeInp, "bos saxlamq olmaz")
    } else if (!operatingsystemInp.value) {
        errorMeassage(operatingsystemInp, "bos saxlamq olmaz")
    } else {
        axios.post(endpoint, newProduct).then((res) => {
            if (res.status === 201) {
                alert("created")
                location.reload()
            }
        })
    }
})


const errorMeassage = (element, message) => {
    const p = document.createElement("p")
    p.innerText = message
    p.classList.add("text-danger")
    element.insertAdjacentElement("afterend", p)

    setTimeout(() => {
        element.parentNode.removeChild(p)
    }, 2000);

} 
  
// edit

const editProduct = (id) => {
    axios.get(endpoint + id).then(({ data }) => {
        const marka = prompt("deyis ne isteyirsem", data.marka)
        const model = prompt("deyis ne isteyirsem", data.model)
        const processor = prompt("deyis ne isteyirsem", data.processor)
        const ram = prompt("deyis ne isteyirsem", data.ram)
        const hard_drive = prompt("deyis ne isteyirsem", data.hard_drive)
        const screen_size = prompt("deyis ne isteyirsem", data.screen_size)
        const operating_system = prompt("deyis ne isteyirsem", data.operating_system)

        const uptadeProduct = {
            marka,
            model,
            processor,
            ram,
            hard_drive,
            screen_size,
            operating_system
        }
        console.log(uptadeProduct)


        axios.put(endpoint + id).thrn((res) => {
            console.log(res);
        })
    })     ;

} 