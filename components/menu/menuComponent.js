class Menu extends HTMLElement{
    constructor(){
        super();

        this.shadow = this.createShadowRoot();
        this._complete = 0;
    }

    get complete(){
        return this._complete;
    }

    set complete(val){
        this.setAttribute('complete', val);
    }

    static get observedAttributes(){
        return ['complete'];
    }

    attributeChangedCallback(name, oldVal, newVal){
        switch(name){
            case 'complete':
                this._complete = parseInt(newVal, 10) || 0;
        }
    }

    connectedCallback(){
        var template = `
            <style>
                .menu{
                    width: 100%;
                    height: 2rem;
                    background-color: blue;
                    border-radius: 5px;
                    color: green;
                }

                .menu-inner{
                    border: solid 1px red;
                    background: pink
                }
            </style>
            <div class="menu">
                <div class="menu-inner"></div>
            </div>`
    }
}