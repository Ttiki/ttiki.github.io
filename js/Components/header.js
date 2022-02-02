class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        {
            this.innerHTML = `
            <header class="page-header" id="parallax-header">
                <span class="mobile-burger-button" onclick="openNav()">&#9776;</span>
                <div id="titles-subtitles">
                    <a href="index.html" title="🏠Home page"><img id="ttiki-logo-header-icon" src="" alt="" /></a>
                    <h1 id="main-title" class="main-title">TTIKI'S HUB</h1>
                    <h3 id="splash-subtitles"></h3>
                </div>
                <nav>
                    <div id="mobile-nav" class="mobile-nav">
                        <a href="javascript:void(0)" class="mobile-nav-closebtn" onclick="closeNav()">&times;</a>
                        <a href="index.html" title="🏠Home page" class="icon-home">Home</a>
                        <div class="grid-section">
                            <h1 class="mobile-nav-grid-section-heading icon-question">About</h1>
                            <div class="mobile-nav-grid-section">
                                <a href="about.html#me">About me</a>
                                <a href="about.html#ttiki-hub">About this website</a>
                                <a href="formatting-rules.html">Custom formatting code</a>
                            </div>
                        </div>
                        <hr/>
                        <div class="grid-section">
                            <h1 class="mobile-nav-grid-section-heading icon-clipboard">Projects</h1>
                            <div class="mobile-nav-grid-section">
                                <a href="software.html" class="icon-wrench">Software</a>
                                <a href="games.html" class="icon-games">Games</a>
                                <a href="books.html" class="icon-book">Books</a>
                                <a href="movies.html" class="icon-movies">Movies</a>
                            </div>
                        </div>
                        <hr/>
                        <a href="la-bibliotheque.html" class="fr-only " title="📚La bibliothèque">La bibliothèque</a>
                        <a href="https://ttiki.notion.site/c19441f7173749e3a1d5551171e69366?v=b32b95c657434bc38a46fbdd9c1acfa8" target="new" title="🌐Social networks board">🌐The Social Networks board</a>
                    </div>
                    <div class="default-nav">
                        <a href="index.html" title="🏠Home page" class="nav-link icon-home">Home</a>
                        <div class="nav-dropdown" data-dropdown>
                            <button class="nav-link icon-question" onclick="redirectBtn('about.html')" data-dropdown-button>About</button>
                            <div class="nav-dropdown-menu">
                                <div class="info-grid-solo">
                                    <a href="about.html#me" class="nav-link">About me</a>
                                    <a href="about.html#ttiki-hub" class="nav-link">About this website</a>
                                    <a href="formatting-rules.html" class="nav-link">Custom formatting code</a>
                                </div>
                            </div>
                        </div>
                        <div class="nav-dropdown" data-dropdown>
                            <button class="nav-link icon-clipboard" onclick="redirectBtn('projects.html')" data-dropdown-button>Projects</button>
                            <div class="nav-dropdown-menu">
                                <div class="info-grid-solo">
                                    <a href="software.html" class="nav-link icon-wrench">Software</a>
                                    <a href="games.html" class="nav-link icon-games">Games</a>
                                    <a href="books.html" class="nav-link icon-book">Books</a>
                                    <a href="movies.html" class="nav-link icon-movies">Movies</a>
                                </div>
                            </div>
                        </div>
                        <a href="la-bibliotheque.html" class="fr-only nav-link" title="📚La bibliothèque">La bibliothèque</a>
                        <a href="https://ttiki.notion.site/c19441f7173749e3a1d5551171e69366?v=b32b95c657434bc38a46fbdd9c1acfa8" target="new" class="nav-link icon-internet" title="🌐Social networks board">The Social Networks board</a>
                    </div>
                </nav>
            </header>
            `;
        }
    }
}
customElements.define('header-component', Header)