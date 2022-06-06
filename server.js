const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '홍길동',
            'birthday': '950421',
            'gender': '남자',
            'job': '대학생'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '홍길동1',
            'birthday': '950422',
            'gender': '남자',
            'job': '대학생'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '홍길동2',
            'birthday': '950423',
            'gender': '남자',
            'job': '대학생'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));