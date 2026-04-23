<script lang="ts">
  export let size: number = 16
  export let color: string = 'currentColor'
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
>
  <rect x="3" y="3" width="18" height="18" rx="5" stroke={color} stroke-width="2" />
  <circle cx="12" cy="12" r="4" stroke={color} stroke-width="2" />
  <circle cx="17.5" cy="6.5" r="1.25" fill={color} />
</svg>
