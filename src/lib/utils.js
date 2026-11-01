import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

/**
 * Resolves an image or media path:
 * - If it is a web URL (http://, https://, //, data:, blob:), returns it directly
 *   (normalizing Google Cloud Storage URLs when needed).
 * - Otherwise, loads it from the `public/images/` folder respecting Vite's BASE_URL.
 */
export function resolveMediaUrl(path) {
    if (!path || typeof path !== 'string') return path;

    const trimmed = path.trim();
    if (!trimmed) return null;

    const isExternalUrl = /^(https?:\/\/|\/\/|data:|blob:)/i.test(trimmed);

    if (isExternalUrl) {
        if (trimmed.includes('storage.cloud.google.com')) {
            return trimmed.replace('storage.cloud.google.com', 'storage.googleapis.com');
        }
        return trimmed;
    }

    const baseUrl = import.meta.env.BASE_URL || '/';
    const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

    // Strip leading slashes, optional "public/", or duplicate base path prefix
    let cleanPath = trimmed.replace(/^\/+/, '');
    const baseWithoutSlashes = normalizedBase.replace(/^\/+|\/+$/g, '');
    if (baseWithoutSlashes && cleanPath.startsWith(`${baseWithoutSlashes}/`)) {
        cleanPath = cleanPath.slice(baseWithoutSlashes.length + 1);
    }
    cleanPath = cleanPath.replace(/^public\//, '');

    if (!cleanPath.startsWith('images/')) {
        cleanPath = `images/${cleanPath}`;
    }

    return `${normalizedBase}${cleanPath}`;
}

