// swag js

const { createApp } = Vue;

createApp (
    {
        data() {
            return {
                message: 'Hello Vue!',
                imgSrc: 'https://t4.ftcdn.net/jpg/05/54/52/13/360_F_554521329_ngmDQSjSrUSRnbK2xK0bkcprsinG9Xdv.jpg'
            }
        }
    }
).mount('#patt');
