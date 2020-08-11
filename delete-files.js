const fs = require('fs');
require('@exan/envreader').load();

const folder = fs.readdirSync(process.env.STORAGE_DIR);
const date = Date.now() - process.env.DAYS_BEFORE_REMOVE * 24 * 60 * 60 * 1000;


folder.forEach(async (filename) => {
	const filepath = `${process.env.STORAGE_DIR}/${filename}`;
	const stats = fs.statSync(filepath);

	if (stats.ctimeMs > date || stats.isDirectory())
		return;

	fs.unlinkSync(filepath);
});