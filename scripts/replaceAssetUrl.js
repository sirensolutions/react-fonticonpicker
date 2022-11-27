const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../dist');

fs.readdir(dir, (err, files) => {
	if (err) {
		console.error(`Could not list the directory: ${dir}`);
		console.error(err);
		process.exit(1);
	}

	files.forEach(file => {
		const filePath = path.join(dir, file);
		fs.stat(filePath, (err1, stats) => {
			if (err1) {
				console.error(`Could not get stats about file: ${filePath}`);
				console.log(err1);
				process.exit(1);
			}
			if (stats.isFile()) {
				fs.readFile(filePath, 'utf8', (err2, data) => {
					if (err2) {
						console.error(`Could not read content of: ${filePath}`);
						console.log(err2);
						process.exit(1);
					}
					const result = data.replace(
						/\(assets\/fontIconPicker/g,
						'(./assets/fontIconPicker',
					);

					fs.writeFile(filePath, result, 'utf8', err3 => {
						if (err3) {
							console.error(
								`Could not write content to file: ${filePath}`,
							);
							console.log(err3);
							process.exit(1);
						}
					});
				});
			}
		});
	});
});
