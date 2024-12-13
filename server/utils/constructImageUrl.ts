import type {Context} from "hono";

const constructImageUrl = (c: Context, path: string) => {
    const protocol = c.req.header('x-forwarded-proto') || 'http';
    const host = c.req.header('host');
    return `${protocol}://${host}${path}`;
};

export default constructImageUrl