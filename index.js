const fs = require('fs');
const fastify = require('fastify')({ logger: true });
require('@exan/envreader').load();

fastify.get('/', async (request, reply) => {
	if (!request.query.extension) {
		reply.code(400);
		return 'error';
	}

	let filename;

	do {
		filename = `${randomString(10)}.${request.query.extension}`;
	} while (fs.existsSync(`${process.env.STORAGE_DIR}/${filename}`));

	return `${process.env.STORAGE_DIR}/${filename} ${process.env.BASE_URL}/i/${filename}`;
});

(async () => {
	await fastify.listen(process.env.PORT);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
})();

function randomString(length) {
	let result = '';

	let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (let i = 0; i < length; i++ ) {
	   result += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	return result;
 }