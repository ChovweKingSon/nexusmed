'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Users, MessageSquare, Calendar, Shield, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center relative">
              <span className="text-sm font-bold text-primary-foreground">N</span>
              <Heart className="w-3 h-3 text-primary-foreground absolute -bottom-0.5 -right-0.5 fill-current" />
            </div>
            <span className="text-xl font-bold text-primary">NeXusMed</span>
          </div>
          <div className="flex gap-4">
            <Link href="/auth/patient-login">
              <Button variant="ghost">Log In</Button>
            </Link>
            <Link href="/auth/patient-signup">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-secondary text-secondary-foreground mb-4">
              Healthcare Made Simple
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
              Connect with doctors online
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Get instant access to qualified healthcare professionals. Consult, diagnose, and get prescriptions delivered to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/auth/patient-signup">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-base py-6 px-8">
                  Get Started Free
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-border text-foreground text-base py-6 px-8"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-xl overflow-hidden border-2 border-border shadow-lg">
            <Image
              src="/images/hero-consultation.jpg"
              alt="Black patient having a video consultation with a doctor"
              width={500}
              height={400}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary/30 py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-balance">
              Healthcare at your fingertips
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience seamless, affordable, and accessible healthcare services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/images/feature-easy-booking.jpg"
                alt="Black woman booking an appointment on mobile"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
                <p className="text-muted-foreground">
                  Schedule appointments with verified doctors in seconds, no waiting rooms needed.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/images/feature-video-consultation.jpg"
                alt="Black man on video consultation with doctor"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Video Consultation</h3>
                <p className="text-muted-foreground">
                  Connect with doctors via secure video calls anytime, anywhere.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/images/feature-secure-records.jpg"
                alt="Black woman viewing secure health records on tablet"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Secure Records</h3>
                <p className="text-muted-foreground">
                  All your health records encrypted and stored securely on our platform.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/images/feature-quick-prescriptions.jpg"
                alt="Black man receiving prescription from doctor"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Quick Prescriptions</h3>
                <p className="text-muted-foreground">
                  Get prescriptions instantly and have medications delivered to you.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/images/feature-expert-doctors.jpg"
                alt="Professional black male and female doctors"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
                <p className="text-muted-foreground">
                  Access to verified, experienced healthcare professionals.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/images/feature-affordable-care.jpg"
                alt="Black family happy with affordable healthcare"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Affordable Care</h3>
                <p className="text-muted-foreground">
                  Quality healthcare at prices that won&apos;t break the bank.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10K+</div>
            <p className="text-muted-foreground">Active Users</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Verified Doctors</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <p className="text-muted-foreground">Consultations Done</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to take control of your health?
          </h2>
          <p className="text-lg opacity-90 mb-8 text-balance">
            Join thousands of Nigerians who are already experiencing better healthcare
          </p>
          <Link href="/auth/patient-signup">
            <Button className="bg-white text-primary hover:bg-gray-100">
              Start Your Free Consultation Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center relative">
                  <span className="text-xs font-bold text-primary-foreground">N</span>
                  <Heart className="w-2 h-2 text-primary-foreground absolute -bottom-0.5 -right-0.5 fill-current" />
                </div>
                <span className="font-bold text-primary">NeXusMed</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Making healthcare accessible to everyone
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Features</a></li>
                <li><a href="#" className="hover:text-primary">Pricing</a></li>
                <li><a href="#" className="hover:text-primary">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">About</a></li>
                <li><a href="#" className="hover:text-primary">Blog</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Privacy</a></li>
                <li><a href="#" className="hover:text-primary">Terms</a></li>
                <li><a href="#" className="hover:text-primary">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 NeXusMed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
