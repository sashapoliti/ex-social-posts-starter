export class Post {

    constructor(obj, container) {
        this.id = obj.id;
        this.content = obj.content;
        this.media = obj.media;
        this.author = obj.author;
        this.likes = obj.likes;
        this.created = obj.created;
        this.container = container;
    }

    printPost() {
        const postEl = document.createElement('div');
        postEl.className = 'post';
        const tpl = `
        <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        ${this.showProfile()}
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${this.author.name}</div>
                        <div class="post-meta__time">${this.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${this.content}</div>
            <div class="post__image">
                <img src="${this.media}" alt="post image per id: ${this.id}">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${this.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${this.id}" class="js-likes-counter">${this.likes}</b> persone
                    </div>
                </div> 
            </div>
        `;
        postEl.innerHTML = tpl;
        postEl.querySelector('a.js-like-button').addEventListener('click', (event) => this.toggleLike(event));
        this.container.appendChild(postEl);   
    }

    showProfile() {
        if(this.author.image){
            return `<img class="profile-pic" src="${this.author.image}" alt="${this.author.name}"></img>`;
        } else {
            const initials = this.author.name.split(' ').map(el => el.charAt(0)).join('');
            return `<div class="profile-pic-default">
                        <span>${initials}</span>
                    </div>`
        }        
    }

    toggleLike(event) {
        event.preventDefault();
        const btn = event.currentTarget;
        if (btn.classList.contains('like-button--liked')) {
            this.likes--;
        } else {
            this.likes++;
        }
        document.getElementById(`like-counter-${this.id}`).innerHTML = this.likes;
        btn.classList.toggle('like-button--liked');
    }
}

/* 

                        

*/