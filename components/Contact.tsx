// // // // "use client";
// // // // import { useState } from "react";

// // // // export default function Contact() {
// // // //   const [form, setForm] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     message: "",
// // // //   });

// // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // //     e.preventDefault();

// // // //     await fetch("https://script.google.com/macros/s/AKfycbwfG9v7tUJ-u7BWAmQGl1JlsPFblhP7Qin6qv9RRL4ruGHSwHSRcEWLND1dvaWzEguuYg/exec", {
// // // //       method: "POST",
// // // //       headers: { "Content-Type": "application/json" },
// // // //       body: JSON.stringify(form),
// // // //     });

// // // //     alert("Message sent!");
// // // //     setForm({ name: "", email: "", message: "" });
// // // //   };

// // // //   return (
// // // //     <section
// // // //       id="contact"
// // // //       className="min-h-screen flex items-center justify-center bg-[#0b0b0f]"
// // // //     >
// // // //       <div className="w-full max-w-md bg-[#12121a] p-8 rounded-xl shadow-lg">
// // // //         <h2 className="text-3xl font-bold mb-6 text-center text-white">
// // // //           Contact Me
// // // //         </h2>

// // // //         <form onSubmit={handleSubmit} className="space-y-4">
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Your Name"
// // // //             className="w-full p-3 rounded bg-black border border-gray-700 text-white"
// // // //             value={form.name}
// // // //             onChange={(e) =>
// // // //               setForm({ ...form, name: e.target.value })
// // // //             }
// // // //             required
// // // //           />

// // // //           <input
// // // //             type="email"
// // // //             placeholder="Your Email"
// // // //             className="w-full p-3 rounded bg-black border border-gray-700 text-white"
// // // //             value={form.email}
// // // //             onChange={(e) =>
// // // //               setForm({ ...form, email: e.target.value })
// // // //             }
// // // //             required
// // // //           />

// // // //           <textarea
// // // //             placeholder="Your Message"
// // // //             rows={4}
// // // //             className="w-full p-3 rounded bg-black border border-gray-700 text-white"
// // // //             value={form.message}
// // // //             onChange={(e) =>
// // // //               setForm({ ...form, message: e.target.value })
// // // //             }
// // // //             required
// // // //           />

// // // //           <button
// // // //             type="submit"
// // // //             className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition rounded text-white font-medium"
// // // //           >
// // // //             Send Message
// // // //           </button>
// // // //         </form>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }
// // // "use client";

// // // import { useState } from "react";

// // // export default function Contact() {
// // //   const [form, setForm] = useState({
// // //     name: "",
// // //     email: "",
// // //     message: "",
// // //   });

// // //   const [loading, setLoading] = useState(false);
// // //   const [success, setSuccess] = useState("");

// // //   const handleChange = (
// // //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// // //   ) => {
// // //     setForm({ ...form, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async (
// // //     e: React.FormEvent<HTMLFormElement>
// // //   ) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setSuccess("");

// // //     try {
// // //       await fetch("https://script.google.com/macros/s/AKfycbwfG9v7tUJ-u7BWAmQGl1JlsPFblhP7Qin6qv9RRL4ruGHSwHSRcEWLND1dvaWzEguuYg/exec", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify(form),
// // //       });

// // //       setSuccess("Message sent successfully!");
// // //       setForm({ name: "", email: "", message: "" });
// // //     } catch (error) {
// // //       alert("Something went wrong. Please try again.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <section
// // //       id="contact"
// // //       className="min-h-screen flex items-center justify-center px-6"
// // //     >
// // //       <div className="w-full max-w-md bg-white/5 backdrop-blur border border-white/10 p-8 rounded-xl">
// // //         <h2 className="text-3xl font-bold text-white mb-6 text-center">
// // //           Contact Me
// // //         </h2>

// // //         <form onSubmit={handleSubmit} className="space-y-4">
// // //           <input
// // //             name="name"
// // //             type="text"
// // //             placeholder="Your Name"
// // //             value={form.name}
// // //             onChange={handleChange}
// // //             required
// // //             className="w-full p-3 rounded bg-black border border-gray-700 text-white"
// // //           />

// // //           <input
// // //             name="email"
// // //             type="email"
// // //             placeholder="Your Email"
// // //             value={form.email}
// // //             onChange={handleChange}
// // //             required
// // //             className="w-full p-3 rounded bg-black border border-gray-700 text-white"
// // //           />

// // //           <textarea
// // //             name="message"
// // //             placeholder="Your Message"
// // //             rows={4}
// // //             value={form.message}
// // //             onChange={handleChange}
// // //             required
// // //             className="w-full p-3 rounded bg-black border border-gray-700 text-white"
// // //           />

// // //           <button
// // //             type="submit"
// // //             disabled={loading}
// // //             className="w-full py-3 rounded bg-blue-600 hover:bg-blue-700 transition text-white font-medium disabled:opacity-50"
// // //           >
// // //             {loading ? "Sending..." : "Send Message"}
// // //           </button>

// // //           {success && (
// // //             <p className="text-green-400 text-sm text-center">
// // //               {success}
// // //             </p>
// // //           )}
// // //         </form>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // import { NextResponse } from "next/server";

// // export async function POST(req: Request) {
// //   try {
// //     const body = await req.json();

// //     const response = await fetch(
// //       "https://script.google.com/macros/s/AKfycbwfG9v7tUJ-u7BWAmQGl1JlsPFblhP7Qin6qv9RRL4ruGHSwHSRcEWLND1dvaWzEguuYg/exec",
// //       {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(body),
// //       }
// //     );

// //     return NextResponse.json({ success: true });
// //   } catch (error) {
// //     return NextResponse.json(
// //       { success: false },
// //       { status: 500 }
// //     );
// //   }
// // }
// // fetch("/api/contact", {
// "use client";

// import { useState } from "react";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (
//     e: React.FormEvent<HTMLFormElement>
//   ) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccess("");

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//       });

//       if (!res.ok) throw new Error("Failed");

//       setSuccess("Message sent successfully!");
//       setForm({ name: "", email: "", message: "" });
//     } catch (err) {
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="min-h-screen flex items-center justify-center px-6"
//     >
//       <div className="w-full max-w-md bg-white/5 backdrop-blur border border-white/10 p-8 rounded-xl">
//         <h2 className="text-3xl font-bold text-white mb-6 text-center">
//           Contact Me
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             name="name"
//             type="text"
//             placeholder="Your Name"
//             value={form.name}
//             onChange={handleChange}
//             required
//             className="w-full p-3 rounded bg-black border border-gray-700 text-white"
//           />

//           <input
//             name="email"
//             type="email"
//             placeholder="Your Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             className="w-full p-3 rounded bg-black border border-gray-700 text-white"
//           />

//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows={4}
//             value={form.message}
//             onChange={handleChange}
//             required
//             className="w-full p-3 rounded bg-black border border-gray-700 text-white"
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 rounded bg-blue-600 hover:bg-blue-700 transition text-white font-medium disabled:opacity-50"
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>

//           {success && (
//             <p className="text-green-400 text-sm text-center">
//               {success}
//             </p>
//           )}
//         </form>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess("Message sent successfully! Aryan will contact you soon!!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center 
                 px-4 sm:px-6 md:px-12"
    >
      <div
        className="w-full max-w-md sm:max-w-lg bg-white/5 backdrop-blur 
                   border border-white/10 p-6 sm:p-8 rounded-xl"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl 
                       font-bold text-white mb-6 text-center">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-black border border-gray-700 
                       text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-black border border-gray-700 
                       text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-black border border-gray-700 
                       text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded bg-blue-600 hover:bg-blue-700 
                       transition text-white font-medium disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-sm text-center">
              {success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

