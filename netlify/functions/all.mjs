export default async (request, context) => {
    
    return new Response("Hello, World!");
};

export const config = {
    path: '/all'
}