const buttons = document.querySelectorAll(".button");
let things = {};
//------ function to getdata from data.json file as provided in class ------
    function getData() {  //do not tamper with this
        fetch("./data.json") 
            .then(res => res.json()) 
            .then(data => {
                things = data;
            })
        .catch(error => console.error(error));
    }
//----- WRITE function to getdata from data.json file -----
    function buildData(event) {
        console.log("clicked"); //this should show on console in browser
        let panel = document.querySelector(".infobox");

        if (panel) {
            panel.classList.remove("hidden");
            //To select children of InfoBox in sequence 0,1,2...
            let containers = panel.children;
            //The children object list of infobox
            containers[0].querySelector("img").src = `images/${things[this.dataset.key].image}`;
            containers[1].textContent = things[this.dataset.key].name;
            containers[2].textContent = things[this.dataset.key].info;
              }
    };
    //To watch for clicks to button on webpage
    buttons.forEach(btn => (btn.addEventListener("click", buildData)));
    getData();
