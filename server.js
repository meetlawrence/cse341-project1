const exrpess = require('express');
const app = exrpess();

const PORT = process.env.PORT || 3000;

app.use('/', require('./routes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to view the application.`);
});

