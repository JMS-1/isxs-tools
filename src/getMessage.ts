export function getMessage(error: any, defaultMessage: string = 'failed'): string {
    return ((typeof error === 'string' ? error : error && `${error.message}`) || '').trim() || defaultMessage
}
