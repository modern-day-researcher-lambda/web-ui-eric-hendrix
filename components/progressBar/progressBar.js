class ProgressBar extends HTMLElement{
    constructor(){
        super();

        this.shadow = this.createShadowRoot();
        this._complete = 0;
    }

    init(){
        var progress = document.querySelector('progress-bar'),
        complete = 0;
       
        var progressInterval = setInterval(() => {
            complete += 1;

            if(complete <= 100){
                progress.setAttribute('complete', complete.toString());
            }else{
                clearInterval(progressInterval);
            }
        }, 100);

       
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
        var innerBar = this.shadow.querySelector('.progress-bar-inner');

        switch(name){
            case 'complete':
                this._complete = parseInt(newVal, 10) || 0;

                innerBar.style.width = this.complete + '%';
                innerBar.innerHTML = this.complete + '%';
        }
    }

    connectedCallback(){
        var template = `
            <style>
                .progress-bar{
                    width: 50%;
                    height: 30px;
                    background-color: #EDF2F4;
                    border-radius: 5px;
                    color: #FFF;
                }

                .progress-bar-inner{
                    height: 100%;
                    line-height: 30px;
                    background: #2B2D42;
                    text-align: center;
                    border-radius: 5px;
                    transition: width 0.25s;
                }
            </style>
            <div class="menu">
                <div class="menu-inner"></div>
            </div>
            `;

            this.shadow.innerHTML = template;
    }
}

window.customElements.define('progress-bar', ProgressBar);