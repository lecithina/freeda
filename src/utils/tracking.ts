const TRACKING_ENDPOINT = 'https://formsubmit.co/ajax/mail@heyfreeda.com';

/**
 * Send an anonymous tracking ping. Fire-and-forget, never blocks the UI.
 * No personal data is sent — only the event name, section, language, and timestamp.
 */
export function trackEvent(event: string, details: Record<string, string | number> = {}): void {
    const formData = new FormData();
    formData.append('email', 'mail@heyfreeda.com');
    formData.append('_subject', `[Tracking] ${event}`);
    formData.append('_captcha', 'false');
    formData.append('_template', 'box');

    const body = [
        `Event: ${event}`,
        `Time: ${new Date().toISOString()}`,
        ...Object.entries(details).map(([k, v]) => `${k}: ${v}`)
    ].join('\n');

    formData.append('message', body);

    fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        body: formData
    }).catch(() => {});
}
