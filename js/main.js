const http = new easyHTTP;
//GET posts

// http.get('https://jsonplaceholder.typicode.com/posts/1/comments', function (err, res) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(res);
//     }
// });

//GET single Post

// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, res) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(res);
//     }
// });

//Create Post

const data = {
    title: "custom post",
    body: "this is the custom post's body"
};

// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// })

// Update data
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, msg) {
    if (err) {
        console.log(err);
    } else {
        console.log(msg);
    }
})