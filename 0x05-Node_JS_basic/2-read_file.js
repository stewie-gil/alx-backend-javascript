const fs = require('fs');

function countStudents(path){
    try{
	const  data = fs.readFileSync(path, 'utf8');

	let csStudents = 0;
	let sweStudents = 0;
	let totalStudents = 0;
	let cslist = [];
	let swelist = []
	
	    let i = 0;
	    const lines = data.split('\n');
	    for(let i = 1; i< lines.length; i++){
		const line = lines[i];
		
		if (line.trim() !== ''){
		    const fields = line.split(',');
		    const field = fields[3].trim();

		    if (field === 'CS'){
			csStudents ++;
			cslist.push(fields[0])
		    } else if (field === 'SWE'){
			sweStudents++;
			swelist.push(fields[0])
		    }
		    totalStudents++;
		    
		}
	    }
	    
	console.log(`Number of Student: ${totalStudents}`);
	console.log(`Number of students in CS: ${sweStudents}. List:`, ...swelist);
	console.log(`Number of students in SWE: ${csStudents}. List:`, ...cslist);
    } catch (error) {
	console.log('Cannot load the database');
    }
};

module.exports = countStudents;
