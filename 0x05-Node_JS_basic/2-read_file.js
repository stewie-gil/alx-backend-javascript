const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    let csStudents = 0;
    let sweStudents = 0;
    let totalStudents = 0;
    const cslist = [];
    const swelist = [];
    const lines = data.split('\n');
    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];

      if (line.trim() !== '') {
        const fields = line.split(',');
        const field = fields[3].trim();
        if (field === 'CS') {
          csStudents += 1;
          cslist.push(fields[0]);
        } else if (field === 'SWE') {
          sweStudents += 1;
          swelist.push(fields[0]);
        }
        totalStudents += 1;
      }
    }

    console.log(`Number of Student: ${totalStudents}`);
    console.log(`Number of students in SWE: ${sweStudents}. List: ${swelist.join(', ')}`);
    console.log(`Number of students in CS: ${csStudents}. List: ${cslist.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
