const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let html = ' '

let container = document.getElementById("main")

function renderposts(){
    for(let i=0; i<posts.length; i++){
        html += `
            <section class="section1">
                    <div class="user">
                        <img class="profile" src="${posts[i].avatar}">
                        <div class="userinfo">
                            <p class="name">${posts[i].name}</p>
                            <p class="location">${posts[i].location}</p>
                        </div>
                    </div>
                </section>     

                    <img class="post" src="${posts[i].post}">

                <section class="section2">
                        <div class="btns">
                            <button ><img class="likebtn btn" src="images/icon-heart.png" ></button>
                            <button ><img class="commentbtn btn" src="images/icon-comment.png"> </button>
                            <button ><img class="sharebtn btn" src="images/icon-dm.png"> </button>
                        </div>
                        <p class="likes">${posts[i].likes} likes</p>

                        <div class="postinfo">
                            <p class="username"> ${posts[i].username}</p>
                            <p class="caption"> ${posts[i].comment}</p>
                        </div>
                </section>
            </div>

        `
        container.innerHTML += html
        html = ''
    }
    
}


renderposts()