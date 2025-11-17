export default function Footer() {
  return (
    <footer className="w-full bg-[#E58155] py-4">
      <div className="max-w-[1440px] mx-auto px-4 text-center text-white text-sm font-inter">
        © {new Date().getFullYear()} Sunny Taco Truck — website by{" "}
        <a
          href="https://wwww.lakemi.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-80"
        >
          Lakemi Studio
        </a>
      </div>
    </footer>
  );
}
