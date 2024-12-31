import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="space-y-8 md:w-1/2">
          <h2 className="text-2xl font-bold">Art of Yoga Therapy</h2>
          <div className="space-y-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>123 Yoga Street, Wellness City, ST 12345</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>info@artofyogatherapy.com</span>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          <div className="flex justify-center space-x-6 md:justify-end">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="mailto:info@artofyogatherapy.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-6 w-6" />
            </Link>
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground md:text-right">
            &copy; {new Date().getFullYear()} Art of Yoga Therapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}