export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-400 border-t border-white/10">
      © {new Date().getFullYear()} All Rights Reserved by{" "}
      <span className="text-white font-medium">
        Aryan Srivastava
      </span>
    </footer>
  );
}
