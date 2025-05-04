<template>
	<div class="wnd d-flex flex-column align-items-center justify-content-center">
		<div class="loader"></div>
		<p>Loading</p>
	</div>
</template>

<style scoped>
	.wnd {
		z-index: 999;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: white;
	}

	html.dark .wnd {
		background-color: black;
	}

	.loader {
		width: 40px;
		aspect-ratio: 1;
		outline: 2px solid #fff;
		background:
			radial-gradient(farthest-side,#000 90%,#0000) 0 0/8px 8px no-repeat,
			conic-gradient(from  90deg at 10px 10px,#0000 90deg,#fff 0),
			conic-gradient(from -90deg at 30px 30px,#0000 90deg,#fff 0);
		animation: l3 1.5s infinite;
	}

	@keyframes l3 {
		0%   {background-position:0    0   ;clip-path:circle(15px at left  4px top    4px)}
		25%  {background-position:100% 0   ;clip-path:circle(15px at right 4px top    4px)}
		50%  {background-position:100% 100%;clip-path:circle(15px at right 4px bottom 4px)}
		75%  {background-position:0    100%;clip-path:circle(15px at left  4px bottom 4px)}
		100% {background-position:0    0   ;clip-path:circle(15px at left  4px top    4px)}
	}
</style>