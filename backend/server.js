const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const publicDirectoryPath = path.join(__dirname, '..', 'frontend');

// Обслуживаем статические файлы из указанной папки
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'main.html'));
});

app.get('*', (req, res) => {
    res.status(404).sendFile(path.join(publicDirectoryPath, '404.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});