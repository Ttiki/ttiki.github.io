class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        //Fetching data from includes files
        fetch('../../includes/footer.html')
            .then(response => response.text())
            .then(data => {

                this.innerHTML = data
            });
    }
}
customElements.define('footer-component', Footer)