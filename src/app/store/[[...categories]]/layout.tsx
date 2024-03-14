export default function layout({children}:{children: React.ReactNode}) {
  return (
    <main>
        <nav> Navegacion de las categorias</nav>
        {children}
    </main>
  )
}
