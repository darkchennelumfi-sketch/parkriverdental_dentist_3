"use client";

import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Mail,
  Phone,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteData } from "@/lib/site-data";

const interests = [
  "New patient",
  "Existing patient",
  "Dental emergency",
  "Financing or insurance",
  "Something else",
] as const;

const preferredTimes = ["Morning", "Afternoon", "No preference"] as const;

const appointmentSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "Please keep your name under 80 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(140, "Please use a shorter email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number we can reach you at.")
    .max(30, "Please use a shorter phone number."),
  interest: z.enum(interests),
  preferredTime: z.enum(preferredTimes),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little about what you need.")
    .max(1500, "Please keep your message under 1,500 characters."),
  consent: z.boolean().refine((value) => value, {
    message: "Please confirm that we may contact you about this request.",
  }),
});

type AppointmentValues = z.infer<typeof appointmentSchema>;

const defaultValues: AppointmentValues = {
  name: "",
  email: "",
  phone: "",
  interest: "New patient",
  preferredTime: "No preference",
  message: "",
  consent: false,
};

const fieldClass =
  "flex h-12 w-full appearance-none rounded-xl border border-ink/12 bg-cream/70 px-4 pr-10 text-[0.95rem] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-[border-color,box-shadow,background-color] duration-200 hover:border-ink/22 focus-visible:border-royal focus-visible:bg-cream focus-visible:ring-4 focus-visible:ring-royal/12 focus-visible:outline-none aria-[invalid=true]:border-copper";

export function AppointmentForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [mailto, setMailto] = React.useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues,
    mode: "onTouched",
  });

  const onSubmit = (values: AppointmentValues) => {
    const subject = encodeURIComponent(
      `Appointment request — ${values.name}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone}`,
        `I am a: ${values.interest}`,
        `Preferred time: ${values.preferredTime}`,
        "",
        values.message,
      ].join("\n"),
    );

    const link = `mailto:${siteData.email}?subject=${subject}&body=${body}`;
    setMailto(link);
    setSubmitted(true);
    window.location.assign(link);
  };

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex h-full min-h-[34rem] flex-col justify-center rounded-[1.75rem] border border-moss/30 bg-moss/[0.07] p-7 sm:p-9"
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-moss/15 text-moss">
          <CheckCircle2 className="size-7" strokeWidth={1.7} />
        </span>
        <p className="eyebrow mt-7 text-[0.58rem] text-brand">
          Request prepared
        </p>
        <h3 className="mt-3 font-display text-[2rem] leading-[1.08] font-light tracking-[-0.03em] text-ink">
          Your message is
          <br />
          ready to send.
        </h3>
        <p className="mt-4 max-w-md text-[0.9rem] leading-[1.75] text-ink/65">
          Your email app should open with the details filled in. If it does not,
          use the button below or contact us directly at{" "}
          <a
            href={`mailto:${siteData.email}`}
            className="font-semibold text-brand underline decoration-brand/25 underline-offset-4"
          >
            {siteData.email}
          </a>
          .
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="primary" size="lg" className="group">
            <a href={mailto}>
              <Mail className="size-4" strokeWidth={1.8} />
              Open email again
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => {
              setSubmitted(false);
              reset(defaultValues);
            }}
          >
            Start a new request
          </Button>
        </div>

        <div className="mt-7 flex items-center gap-2 border-t border-ink/10 pt-5 text-[0.75rem] text-ink/65">
          <Phone className="size-3.5" strokeWidth={1.8} />
          Prefer to call?{" "}
          <a
            href={siteData.phone.href}
            className="font-semibold text-ink/70 transition-colors hover:text-brand"
          >
            {siteData.phone.display}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="relative rounded-[1.75rem] border border-ink/10 bg-paper p-6 shadow-[0_40px_90px_-60px_rgba(17,18,37,0.4)] sm:p-8"
    >
      <div className="flex flex-col gap-2">
        <p className="eyebrow text-[0.58rem] text-brand">
          Appointment request
        </p>
        <h3 className="font-display text-[1.9rem] leading-[1.08] font-light tracking-[-0.03em] text-ink">
          Tell us how we can help.
        </h3>
        <p className="text-[0.82rem] leading-relaxed text-ink/65">
          Share a few details and a member of our team will respond momentarily.
        </p>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Your full name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name ? (
            <p id="name-error" className="text-[0.72rem] text-copper-ink">
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email ? (
            <p id="email-error" className="text-[0.72rem] text-copper-ink">
              {errors.email.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(701) 000-0000"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone ? (
            <p id="phone-error" className="text-[0.72rem] text-copper-ink">
              {errors.phone.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="preferredTime">Preferred time</Label>
          <div className="relative">
            <select
              id="preferredTime"
              className={fieldClass}
              aria-invalid={Boolean(errors.preferredTime)}
              {...register("preferredTime")}
            >
              {preferredTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-ink/65"
              strokeWidth={1.6}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="interest">I am a</Label>
          <div className="relative">
            <select
              id="interest"
              className={fieldClass}
              aria-invalid={Boolean(errors.interest)}
              {...register("interest")}
            >
              {interests.map((interest) => (
                <option key={interest} value={interest}>
                  {interest}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-ink/65"
              strokeWidth={1.6}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="message">How can we help?</Label>
          <Textarea
            id="message"
            placeholder="Tell us a little about your dental needs or questions."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          {errors.message ? (
            <p id="message-error" className="text-[0.72rem] text-copper-ink">
              {errors.message.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5 flex items-start gap-3">
        <Controller
          control={control}
          name="consent"
          render={({ field }) => (
            <Checkbox
              id="consent"
              checked={field.value}
              onCheckedChange={(checked) => field.onChange(checked === true)}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "consent-error" : undefined}
            />
          )}
        />
        <div>
          <Label htmlFor="consent" className="leading-snug">
            I agree to be contacted by Park River Dental about this request.
          </Label>
          {errors.consent ? (
            <p id="consent-error" className="mt-1 text-[0.72rem] text-copper-ink">
              {errors.consent.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" variant="primary" className="group">
          {isSubmitting ? "Preparing…" : "Send request"}
          <Send
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.8}
          />
        </Button>
        <p className="max-w-[15rem] text-[0.68rem] leading-relaxed text-ink/65">
          Please do not include sensitive medical information in this form.
        </p>
      </div>
    </form>
  );
}
