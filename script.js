let allArticles = document.querySelectorAll('.question-article');



// allArticles.forEach( article => {
//     let btn = article.querySelector('.buttons');

//     btn.addEventListener('click', () => {
//         allArticles.forEach( e => {
//             if(e !== article){
//                 e.classList.remove("show-ans")
//             }
//         })
//         article.classList.toggle("show-ans")
//     })
// })

//understand if statement:-
//this statement is simply saying which question-articles don't match currentTarget question-article should not have ".show-ans" class.

let btns = document.querySelectorAll('.buttons');

btns.forEach(btn => {
    btn.addEventListener('click', clicked => {
        
        const currArticle = clicked.currentTarget.parentElement.parentElement;

        allArticles.forEach(article => {
            if(article !== currArticle){
                article.classList.remove('show-ans')
            }
        })

    
        currArticle.classList.toggle('show-ans')
    })
})