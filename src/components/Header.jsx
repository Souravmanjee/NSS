function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-black shadow-md">
      <div className="text-2xl font-bold">MyCompany</div>
      <nav className="space-x-4">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
export default Header;