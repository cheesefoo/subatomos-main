// @ts-ignore
import Tooltip from './Tooltip.svelte';
import type { SvelteComponent } from 'svelte';

export interface TippyProps {
	animateFill?: boolean;
	animation?: false | string;
	appendTo?: string | Element;
	aria?: any;
	arrow?: boolean | Element | string;
	delay?: number | number[];
	duration?: number | number[];
	followCursor?: boolean | 'horizontal' | 'vertical' | 'initial';
	getReferenceClientRect?: null | Function;
	hideOnClick?: boolean | 'toggle';
	inlinePositioning?: boolean;
	interactive?: boolean;
	interactiveBorder?: number;
	interactiveDebounce?: number;
	maxWidth?: number | string;
	offset?: number[];
	onAfterUpdate?: Function;
	onBeforeUpdate?: Function;
	onClickOutside?: Function;
	onCreate?: Function;
	onDestroy?: Function;
	onHidden?: Function;
	onHide?: Function;
	onMount?: Function;
	onShow?: Function;
	onShown?: Function;
	onTrigger?: Function;
	onUntrigger?: Function;
	placement?:
		| 'top'
		| 'top-start'
		| 'top-end'
		| 'right'
		| 'right-start'
		| 'right-end'
		| 'bottom'
		| 'bottom-start'
		| 'bottom-end'
		| 'left'
		| 'left-start'
		| 'left-end'
		| 'auto'
		| 'auto-start'
		| 'auto-end';
	showOnCreate?: boolean;
	sticky?: boolean | 'reference' | 'popper';
	theme?: string;
	trigger?: string;
	triggerTarget?: Element | Element[];
	zIndex?: number;
	props?: any;
	component: SvelteComponent;
}

export function popover(anchorNode, props: TippyProps) {
	if (props === null) return;
	props = {
		appendTo: anchorNode,
		interactive: true,
		followCursor: false,
		arrow: false,
		...props
	};
	return tooltip(anchorNode, props);
}

export function tooltip(anchorNode, props: TippyProps) {
	if (props === null) return;
	const tooltipComponent = new Tooltip({
		target: document.body,
		props: { anchorNode, ...props }
	});

	const show = () => (tooltipComponent.show = true);
	const hide = () => (tooltipComponent.show = false);
	const showEvents = ['mouseenter', 'focus'];
	const hideEvents = ['mouseleave', 'blur'];

	showEvents.forEach((event) => anchorNode.addEventListener(event, show));
	hideEvents.forEach((event) => anchorNode.addEventListener(event, hide));

	return {
		destroy() {
			showEvents.forEach((event) => anchorNode.removeEventListener(event, show));
			hideEvents.forEach((event) => anchorNode.removeEventListener(event, hide));
		}
	};
}

export default tooltip;
