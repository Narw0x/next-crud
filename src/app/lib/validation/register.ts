interface FormData {
    name: string;
    email: string;
    password: string;
    password2: string;
}

interface ValidationErrors {
    name?: string;
    email?: string;
    password?: string;
    password2?: string;
}

export function validateRegisterForm(data: FormData): ValidationErrors | null {
    const errors: ValidationErrors = {};

    if (!data.name.trim()) {
        errors.name = 'Name is required';
    } else if (data.name.length < 2) {
        errors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
        errors.email = 'Email is required';
    } else if (!emailRegex.test(data.email)) {
        errors.email = 'Invalid email format';
    }

    if (!data.password) {
        errors.password = 'Password is required';
    } else if (data.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
    }

    if (data.password !== data.password2) {
        errors.password2 = 'Passwords do not match';
    }

    return Object.keys(errors).length > 0 ? errors : null;
}