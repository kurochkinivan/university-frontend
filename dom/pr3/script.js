const list = document.querySelector('.js-list')
const message = document.querySelector('.js-message')
const loader = document.querySelector('.loader')

async function getBlogPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts/'
    try {
        const response = await fetch(url, {
            method: 'GET',
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const json = await response.json()
        return json
    } catch (error) {
        console.log(error.message)
    }
}

// async function getBlogPostComments(id) {
//     const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`
//     try {
//         const response = await fetch(url, {
//             method: 'GET',
//         })
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`)
//         }

//         const json = await response.json()
//         return json
//     } catch (error) {
//         console.log(error.message)
//     }
// }

function getBlogPostComments(id) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    return fetch(url, {
        method: 'GET',
    })
    .then(response => response.json())
    .catch(error => console.log(error.message))
    .finally(() => {
        loader.classList.add('loader--hide')
        message.classList.remove('message--hide')
    })
}

async function renderBlogPosts() {
    const posts = await getBlogPosts()

    posts.forEach(post => {
        const li = document.createElement('li')
        li.textContent = `Пост №${post.id}: Описание: ${post.body.split(' ').slice(0, 5).join(' ')}...`;
        li.onclick = async () => {
            loader.classList.remove('loader--hide')
            message.classList.add('message--hide')

            const comments = await getBlogPostComments(post.id)

            message.innerHTML = ''
            comments.forEach(comment => {
                const li = document.createElement('li')
                li.textContent = `Comment №${comment.id}, email: ${comment.email}`
                li.className = 'message__item'
                message.append(li)
            })
        }

        list.append(li)
    });
}

renderBlogPosts()