import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ThumbsUp,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Contact Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>

          <p className="text-xl leading-relaxed opacity-90">
            Ready to take your business to the next level? Get in touch with our
            expert team today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-[#1e3a8a]">
                Get in Touch
              </h2>
              <h3 className="text-xl font-semibold text-[#1e3a8a]">
                I'd like to hear from you!
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                If you have any inquiries, want more information, or just want
                to say hi, please use the contact form!
              </p>
            </div>

            {/* Right Column - Form */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <ContactForm />
            </div>
          </div>

          {/* Divider */}
          <div className="my-16 border-t-2 border-green-700" />

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Details */}
            <div className="space-y-6">
              <p className="text-xl text-gray-700">
                Or contact me:{" "}
                <span className="font-bold text-[#1e3a8a]">Sanjiv Ranchod</span>
              </p>

              <div className="space-y-4 text-gray-700">
                <p>Tel: +27 (0)41 368 5700</p>
                <p>
                  Cell:{" "}
                  <a
                    href="https://wa.me/27836294050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1e3a8a] hover:underline transition-colors"
                  >
                    +27 (0)83 629 4050
                  </a>
                </p>
                <p>Email: info@ranchodconsulting.co.za</p>
              </div>

              <div className="flex gap-4 pt-4">
                <ThumbsUp className="w-6 h-6 text-[#1e3a8a]" />
                <Facebook className="w-6 h-6 text-[#1e3a8a]" />
                <Instagram className="w-6 h-6 text-[#1e3a8a]" />
                <Phone className="w-6 h-6 text-[#1e3a8a]" />
                <Linkedin className="w-6 h-6 text-[#1e3a8a]" />
                <Youtube className="w-6 h-6 text-[#1e3a8a]" />
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 overflow-hidden rounded-xl bg-gray-200">
                {/* Placeholder for Sanjiv's image */}
              
                {/* Uncomment and update src when image is available */}
                <Image
                               src="/images/profile.webp"
                               alt="Company Foundation"
                               width={800}
                               height={500}
                               className="w-full aspect-[1/1.5] object-cover rounded-lg shadow-md"
                             />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
