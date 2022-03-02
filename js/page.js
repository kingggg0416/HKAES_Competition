let config_options = {
    country : "",
    language: "",
    mask: false,
    temperature: false,
    vaccination: false
}

function init_config() {
    sessionStorage.setItem("config_options", JSON.stringify(config_options));
}

function set_config(key, value = "") {
    let obj = JSON.parse(sessionStorage.config_options);
    
    if(key == "country") {
        obj.country = value;
    }
    else if(key == "language") {
        obj.language = value;
    }
    else if(key == "mask") {
        obj.mask = obj.mask? false : true;
    }
    else if (key == "temperature") {
        obj.temperature = obj.temperature? false : true;
    }
    else if (key == "vaccination") {
        obj.vaccination = obj.vaccination ? false: true; 
    }
    sessionStorage.setItem("config_options", JSON.stringify(obj));
}


function record_country(value) {
    config_options.country = value;
}


function load_workflow() {
    let obj = JSON.parse(sessionStorage.config_options);
    console.log(obj);
    for (const key in obj) {
        if(key == "mask" || key == "temperature" || key == "vaccination") {
            if(obj[key]) {
                var new_div = document.createElement("div");
                new_div.innerHTML = key;
                new_div.setAttribute('class', 'workflow-confirm-design');
                let section = document.getElementById("workflow-confirmation-body");
                section.appendChild(new_div);
            }
        }
    }
}