class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        {
            //Fetching data from includes files
            fetch('../../includes/header.html')
                .then(response => response.text())
                .then(data => {

                    this.innerHTML = data
                });

        }
    }
}
customElements.define('header-component', Header)