function Header() {

  const title = "My bucket list";

  return (
    <header>
      <h1>{title}</h1>
      <button type="button" className="btn secondary">+ Create a new item</button>
    </header>
  )
}

export default Header
