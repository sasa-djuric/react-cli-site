export const pageview = (url: string) => {
	gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!, {
		page_path: url
	});
};

interface Event {
	action: string;
	params: Gtag.ControlParams | Gtag.EventParams;
}

const event = ({ action, params }: Event) => {
	gtag('event', action, params);
};
