export default async function Page({ params }:{params: { id: string } }) {
    const id = params.id;
    return (
        <main className="flex min-h-screen flex-col p-6 text-center">
            <h1>Esta es la pagina para la invoice {id}, no tiene ningun uso pero me sirve para saber</h1>
        </main>
    );
}