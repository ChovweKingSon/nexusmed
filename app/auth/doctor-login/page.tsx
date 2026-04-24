'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function DoctorLogin() {
  const [formData, setFormData] = useState({
    licenseNumber: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.licenseNumber.trim()) {
      newErrors.licenseNumber = 'Medical license number is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setSuccess(true);
        setIsLoading(false);
        setFormData({
          licenseNumber: '',
          email: '',
          password: '',
        });
        setTimeout(() => setSuccess(false), 3000);
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center relative">
              <span className="text-base font-bold text-primary-foreground">N</span>
              <Heart className="w-3 h-3 text-primary-foreground absolute -bottom-0.5 -right-0.5 fill-current" />
            </div>
            <span className="text-2xl font-bold text-primary">NeXusMed</span>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Doctor Portal</h1>
          <p className="text-muted-foreground">
            Log in to manage your consultations
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
            Login successful! Redirecting to your dashboard...
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          {/* License Number */}
          <div>
            <Label htmlFor="licenseNumber" className="text-sm font-medium mb-1 block">
              Medical License Number
            </Label>
            <Input
              id="licenseNumber"
              name="licenseNumber"
              type="text"
              value={formData.licenseNumber}
              onChange={handleChange}
              placeholder="e.g., ML123456"
              className={errors.licenseNumber ? 'border-red-500' : ''}
              disabled={isLoading}
            />
            {errors.licenseNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.licenseNumber}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-sm font-medium mb-1 block">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="doctor@example.com"
              className={errors.email ? 'border-red-500' : ''}
              disabled={isLoading}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <Label htmlFor="password" className="text-sm font-medium block">
                Password
              </Label>
              <Link
                href="#"
                className="text-xs text-primary hover:underline"
              >
                Forgot?
              </Link>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className={errors.password ? 'border-red-500' : ''}
              disabled={isLoading}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 font-semibold disabled:opacity-50"
          >
            {isLoading ? 'Logging in...' : 'Log In'}
          </Button>
        </form>

        {/* Apply Link */}
        <div className="text-center mb-6 border-t border-border pt-6">
          <p className="text-muted-foreground text-sm mb-3">
            Want to become a NeXusMed doctor?
          </p>
          <Link href="#">
            <Button
              variant="outline"
              className="w-full border-border text-foreground"
            >
              Apply Now
            </Button>
          </Link>
        </div>

        {/* Patient Login */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            Looking for patient login?{' '}
            <Link href="/auth/patient-login" className="text-primary hover:underline font-semibold">
              Click here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
