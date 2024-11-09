let isloged = localStorage.getItem("isloged") === "true";
// let isloged = false;
const adminPanel = document.querySelector("#adminPanel");
const loginForm = document.querySelector("#loginForm");
const usernameInp = document.querySelector("#usernameInp");
const passwordInp = document.querySelector("#passwordInp");
const tbody = document.querySelector("#tbody");
const endpoint = "http://localhost:3000/users/"; 
const logOut = document.querySelector("#logOut")
const contanier = document.querySelector("#contanier")

const setloged = () => {
    if (isloged) {
        adminPanel.style.display = "block";
        loginForm.style.display = "none";
    } else {
        adminPanel.style.display = "none";
        loginForm.style.display = "block";
    }
};

setloged();

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (usernameInp.value === "naib" && passwordInp.value === "naib123") {
        isloged = true;
        localStorage.setItem("isloged", "true");
        setloged();
    } else {
        alert("qaqa burda sehv var");
    }
    // mode = localStorage.getItem("mode");
    setloged();
});

const getadminPanel = () => {
    let isLoading = true;

    const setLoading = () => {
        if (isLoading) {
            tbody.innerHTML = 'loading ...';
        } else {
            tbody.innerHTML = '';
        }
    };
    setLoading();

    axios.get(endpoint).then((res) => {
        if (res.status === 200) {
            isLoading = false;
            setLoading();

            res.data.forEach(({ id, marka, model, ram, processor, hard_drive, screen_size, operating_system }) => {
                tbody.innerHTML += ` <tr>
                        <td>${marka}</td>
                        <td>${model}</td>
                        <td>${processor}</td>
                        <td>${ram}</td>
                        <td>${hard_drive}</td>
                        <td>${screen_size}</td>
                        <td>${operating_system}</td>
                        <td>
                            <button class="btn btn-sm btn-danger" onclick="deletePanel('${id}')">delete</button>
                            <button class="btn btn-sm btn-warning">edit</button>
                        </td>
                    </tr>`;
            });
        }
    });
};
getadminPanel();

const deletePanel = (id) => {
    const isAgree = confirm("heqiqeten silmak istyr");

    if (isAgree) {
        axios.delete(endpoint + id).then((res) => {
            console.log(res);
            getadminPanel(); 
        }).catch((error) => {
            console.error("Error deleting item:", error);
        });
    }
};

// const logoutSet =() =>{
//      if(!isloged){
//         adminPanel.style.display = "none";
//         loginForm.style.display = "block";
//     }else{
//         adminPanel.style.display = "block"
//         loginForm.style.display = "none"
//     }
// }

// logoutSet()

// logOut.addEventListener("click", (e)=>{
// e.preventDefault()
// logoutSet()

// })

const logoutSet = () => {
    isloged = false;
    localStorage.removeItem("isloged");
    setloged(); 
};

logOut.addEventListener("click", logoutSet);