"use client";

import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Building2, Mail, MapPin, MessageSquare, Phone, Send, User } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  businessName: z.string().min(2, 'Please enter your business name.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().min(7, 'Please enter a phone number.'),
  message: z.string().min(10, 'Please add a message.')
});

type ContactFormValues = z.infer<typeof schema>;

export function ContactForm() {
  const emailTarget = useMemo(() => 'contact.aamnivora@gmail.com', []);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', businessName: '', email: '', phone: '', message: '' }
  });

  const onSubmit = handleSubmit((values) => {
    const subject = encodeURIComponent(`Aamnivora inquiry from ${values.businessName}`);
    const body = encodeURIComponent(
      [`Name: ${values.name}`, `Business: ${values.businessName}`, `Email: ${values.email}`, `Phone: ${values.phone}`, '', values.message].join('\n')
    );
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailTarget)}&su=${subject}&body=${body}`;
    window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
  });

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-purple">Contact</p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-7xl">
            Start a conversation about your next digital step.
          </h1>
          <p className="mt-6 max-w-xl text-[1.05rem] font-medium leading-8 text-slate-600 sm:text-lg">
            Tell us what your business needs, and we&apos;ll respond with a practical path forward.
          </p>

          <div className="mt-10 space-y-4">
            <Card className="flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-purple"><Mail className="h-5 w-5" /></div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Email</p>
                <a className="text-[0.95rem] font-semibold text-navy" href={`mailto:${emailTarget}`}>{emailTarget}</a>
              </div>
            </Card>
            <Card className="flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-purple"><Phone className="h-5 w-5" /></div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Phone</p>
                <p className="text-[0.95rem] font-semibold text-navy">Available by request</p>
              </div>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="p-6 sm:p-8">
            <form className="grid gap-5" onSubmit={onSubmit} noValidate>
              <div>
                <Label htmlFor="name">Name</Label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-purple" />
                  <Input id="name" autoComplete="name" className="pl-12" {...register('name')} />
                </div>
                {errors.name ? <p className="mt-2 text-sm text-purple">{errors.name.message}</p> : null}
              </div>
              <div>
                <Label htmlFor="businessName">Business Name</Label>
                <div className="relative">
                  <Building2 className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-purple" />
                  <Input id="businessName" autoComplete="organization" className="pl-12" {...register('businessName')} />
                </div>
                {errors.businessName ? <p className="mt-2 text-sm text-purple">{errors.businessName.message}</p> : null}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-purple" />
                  <Input id="email" type="email" autoComplete="email" className="pl-12" {...register('email')} />
                </div>
                {errors.email ? <p className="mt-2 text-sm text-purple">{errors.email.message}</p> : null}
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <div className="relative">
                  <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-purple" />
                  <Input id="phone" autoComplete="tel" className="pl-12" {...register('phone')} />
                </div>
                {errors.phone ? <p className="mt-2 text-sm text-purple">{errors.phone.message}</p> : null}
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <div className="relative">
                  <MessageSquare className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-purple" />
                  <Textarea id="message" className="min-h-36 pl-12 pt-4" {...register('message')} />
                </div>
                {errors.message ? <p className="mt-2 text-sm text-purple">{errors.message.message}</p> : null}
              </div>
              <Button type="submit" className="mt-2 w-full text-base font-semibold" disabled={isSubmitting}>
                {isSubmitting ? 'Preparing message...' : 'Send Message'}
                <Send className="ml-2 h-4 w-4" />
              </Button>
              {isSubmitSuccessful ? <p className="text-center text-sm font-medium text-slate-500">Opening Gmail compose window now.</p> : null}
            </form>
          </Card>

          <Card className="overflow-hidden">
            <div className="border-b border-slate-200 bg-mist px-6 py-4">
              <div className="flex items-center gap-3 text-sm font-semibold text-navy">
                <MapPin className="h-4 w-4 text-purple" />
                Google Maps Placeholder
              </div>
            </div>
            <div className="flex min-h-[260px] items-center justify-center bg-[linear-gradient(135deg,rgba(8,27,58,0.03),rgba(107,70,255,0.05))] p-6 text-center">
              <div>
                <MapPin className="mx-auto h-10 w-10 text-purple" />
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Future location embed</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  This space is reserved for a Google Maps embed when the business location is finalized.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
