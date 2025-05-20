'use server';

import { redirect } from 'next/navigation';

export async function handleSubmit(state: unknown, data: FormData): Promise<{ error: string | null }> {
    // Retrieve form data
    const username = data.get('username')?.toString();
    const email = data.get('email')?.toString();
    const password = data.get('password')?.toString();

    // Validate inputs
    if (!username || !email || !password) {
        return { error: 'All fields are required' };
    }

    // In a real app, you’d save to a database here
    // Since localStorage is client-side, we’ll handle it on the client
    console.log('Server: Validated user data:', { username, email });

    // Redirect to dashboard
    redirect('/Dashboard');

    // Return success state (though redirect will typically prevent this from being used)
    return { error: null };
}