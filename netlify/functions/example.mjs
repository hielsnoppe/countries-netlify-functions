export default async (req, context) => {

    return new Response("Hello, World!");
};

export const config = {
    path: '/example'
}