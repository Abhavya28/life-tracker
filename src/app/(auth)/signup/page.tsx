
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";
import { createClient } from "@/src/lib/supbase/client";

export default function SignupPage() {
    const router = useRouter();
    const supabase = createClient();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignup = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setError("");
        setMessage("");
        setLoading(true);

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: name,
                },
            },
        });

        if (error) {
            setError(error.message);
            setLoading(false);
            return;
        }

        if (data.session) {
            router.replace("/user/dashboard");
            router.refresh();
            return;
        }

        setMessage(
            "Account created! Please verify your email before logging in."
        );
        setLoading(false);
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#FAF9FF] px-6 py-12">

            <div className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-violet-100/40">

                <Link href="/" className="mb-8 flex items-center justify-center gap-2">
                    <div className="rounded-xl bg-violet-600 p-2 text-white">
                        <Sparkles size={22} />
                    </div>

                    <span className="text-xl font-bold text-gray-900">
                        LifeSync
                    </span>
                </Link>

                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Create your account
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Start building better habits today.
                    </p>
                </div>

                <form onSubmit={handleSignup} className="space-y-5">

                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Full name
                        </label>

                        <input
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Email address
                        </label>

                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Password
                        </label>

                        <input
                            type="password"
                            required
                            minLength={8}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="At least 8 characters"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500"
                        />
                    </div>

                    {error && (
                        <p className="rounded-xl bg-red-50 p-3 text-sm text-red-600">
                            {error}
                        </p>
                    )}

                    {message && (
                        <p className="rounded-xl bg-green-50 p-3 text-sm text-green-700">
                            {message}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-xl bg-violet-600 py-3.5 font-semibold text-white hover:bg-violet-700 disabled:opacity-60"
                    >
                        {loading ? "Creating account..." : "Create Account"}
                    </button>

                </form>

                <p className="mt-8 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link href="/login" className="font-semibold text-violet-600">
                        Login
                    </Link>
                </p>

            </div>
        </main>
    );
}
