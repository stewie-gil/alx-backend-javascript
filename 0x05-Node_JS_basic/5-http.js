const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const args = process.argv;

const port = 1245;

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.setHeader('Content-Type', 'text/plain');

    const db = args[2];

    function countStudents(filePath) {
      return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (error, data) => {
          if (error) {
            reject(new Error('Cannot load the database'));
            return;
          }
          //let students = 0;

          let csStudents = 0;
          let sweStudents = 0;
          const csList = [];
          const sweList = [];
          let students1 = 0;

          const lines = data.split('\n');
          const nonEmptyLines = lines.filter((line) => line.trim() !== '');

          students = nonEmptyLines.length - 1;

          for (const line of lines) {
            const words = line.split(',');

            if (words[3].trim() === 'CS') {
              csList.push(words[0]);
              csStudents += 1;
              students1 += 1;
            } else if (words[3].trim() === 'SWE') {
              sweList.push(words[0]);
              sweStudents += 1;
              students1 += 1;
            }
          }

          const responseText = `Number of students: ${students1}\n`
    + `Number of students in CS ${csStudents}. List: ${csList.join(', ')}\n`
    + `Number of students in SWE ${sweStudents}. List: ${sweList.join(', ')}`;

          resolve(responseText);
        });
      });
    }

    countStudents(db)
      .then((data) => {
        res.end(data);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end(error);
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});

module.exports = app;
