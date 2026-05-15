import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-3xl font-black text-blue-500">
            NEWSWIRE
          </h2>
        </div>

        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>

          <div className="space-y-2 text-gray-400">
            <p>Home</p>
            <p>Politics</p>
            <p>Sports</p>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">Categories</h3>

          <div className="space-y-2 text-gray-400">
            <p>Technology</p>
            <p>Business</p>
            <p>Health</p>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>

          <div className="flex gap-4 text-blue-600">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-6 text-gray-500 flex align-center justify-around flex-wrap flex-col gap-4 md:flex-row">
        <p>© 2026 NEWSWIRE. All rights reserved.</p>
        <p className="text-sm">Powered by NewsAPI</p>
      </div>
    </footer>
  );
};

export default Footer;