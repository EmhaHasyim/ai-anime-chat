import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'path';

const saveImage = async (image: File, uploadDir: string) => {
    const filePath = join(uploadDir, image.name);
    await mkdir(uploadDir, { recursive: true });
    await writeFile(filePath, new Uint8Array(await image.arrayBuffer()));
    return filePath;
};

export default saveImage