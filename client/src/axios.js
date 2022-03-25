// GET request for remote image in node.js
// the index.html needs to update following few things
// add below css. <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
// script for fetch.js should change to <script src="axio.js" defer></script>
// </head>
// <body>
// <section id="control-center">
// <button id = "get-btn">GET Data</button>
// <button id = "post-btn">POST Data</button>
// </secton>
//</body>

const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn')

const getData = () => {
    axios.get('/user?ID=12345').then(response => { // url or anything that links to it.
        console.log(response);
});
};

const sendData = () => {
    axios.post('/user?ID=12345',{
        email: 'eve.holt@regres.in',
        password: 'pistol'
    })
    .then(response => {
        console.log(response);
    })
    .catch(err =>{
        console.log(err);
    });
};

getBtn.addeventListener('click',getData);
postBtn.addEventListener('click', sendData); 

axios({
  method: 'get',
  url: 'http://bit.ly/2mTM3nY',
  responseType: 'stream'
})
  .then(function (response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });