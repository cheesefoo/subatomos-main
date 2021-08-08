<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	export let min = 0;
	export let max = 100;
	export let step = 2;
	export let current = 0;
	export let vertical = false;
	let sliding = false;

	$: progress = current / max;

	let slider;
	let scale;
	onMount(() => {
		scale = slider.clientWidth / (max / step);

		function handleResize() {
			scale = slider.clientWidth / (max / step);
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});

	$: dispatch('change', { value: current });

	function handleMouseMove(e) {
		if (sliding) {
			const distance = e.clientX - slider.getBoundingClientRect().left;
			const value = Math.round(distance / scale) * step;
			current = Math.max(Math.min(value, max), min);
		}
	}

	async function handleMouseDown(e) {
		sliding = true;

		const distance = e.clientX - slider.getBoundingClientRect().left;
		const value = Math.round(distance / scale) * step;
		current = value;
	}

	function handleKeydown(e) {
		if (e.keyCode === 37 || e.keyCode === 40) {
			e.preventDefault();
			const nextValue = current - step;
			current = Math.max(nextValue, min);
		} else if (e.keyCode === 38 || e.keyCode === 39) {
			e.preventDefault();
			const nextValue = current + step;
			current = Math.min(nextValue, max);
		}
	}

	function handleMouseup(e) {
		sliding = false;
	}
</script>

<svelte:body
	on:mousemove={handleMouseMove}
	on:mouseup={handleMouseup}
	on:mouseleave={handleMouseup} />
<div
	aria-valuemax={max}
	aria-valuemin={min}
	aria-valuenow={current}
	aria-orientation="horizontal"
	role="slider"
	bind:this={slider}
	class="slider"
	on:mousedown={handleMouseDown}
	on:keydown={handleKeydown}
>
	<div class="rail">
		<!--		<div class='ball' style='left: calc({current / max * 100}% - 8.5px)'>-->
		<!--		</div>-->
		<!--		<div class='fill' style="transform:{vertical ? 'scaleY':'scaleX'}:({progress})">-->
		<div class="fill" style="transform:scaleX({progress})" />
	</div>
</div>

<style lang="scss">
	.slider {
		position: relative;
		width: 100%;
		height: 8px;
		cursor: pointer;
		display: flex;
		align-items: center;
	}

	.rail {
		width: 100%;
		height: 8px;
		background-color: $ivory;
		border-radius: 8px;
		overflow: hidden;
	}

	.fill {
		width: 100%;
		height: 8px;
		background-color: $green;
		transform-origin: left;
		transform: scaleX(0);
	}

	.ball {
		position: absolute;
		z-index: 2;
		top: calc(50% - 8.5px);
		left: -3px;
		width: 17px;
		height: 17px;
		border-radius: 50%;
		background-color: $salmon;
	}
</style>
