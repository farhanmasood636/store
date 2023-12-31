import { FormData } from '@/components/contact-form';

export function sendEmail(data: FormData) {
    const apiEndpoint = '/api/email';

    fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((response) => {
            return true;
        })
        .catch((err) => {
            alert(err);
            return false;
        });
}