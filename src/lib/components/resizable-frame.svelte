<script lang="ts">
  import { frameWidth, selectedTheme } from '$lib/stores';
  import { onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();

  const MIN_WIDTH = 400;
  const MAX_WIDTH = 920;
  const INSTAGRAM_DEFAULT_WIDTH = 720;

  let windowRef: HTMLDivElement | undefined = $state();
  let isResizing = $state(false);
  let currentHandle: 'left' | 'right' | null = $state(null);
  let startWidth = $state(0);
  let startX = $state(0);

  let isInstagramTheme = $derived($selectedTheme?.brand === 'instagram');
  let effectiveWidth = $derived($frameWidth ?? (isInstagramTheme ? INSTAGRAM_DEFAULT_WIDTH : null));

  function handleMouseDown(event: MouseEvent, handle: 'left' | 'right') {
    if (!windowRef) return;

    currentHandle = handle;
    startWidth = windowRef.offsetWidth;
    startX = event.clientX;
    isResizing = true;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }

  function handleMouseMove(event: MouseEvent) {
    if (!isResizing) return;

    let newWidth: number;

    // Multiply by 2 so width increases on both sides
    if (currentHandle === 'left') {
      newWidth = startWidth - (event.clientX - startX) * 2;
    } else {
      newWidth = startWidth + (event.clientX - startX) * 2;
    }

    // Clamp to min/max
    newWidth = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, newWidth));

    frameWidth.set(newWidth);
  }

  function handleMouseUp() {
    isResizing = false;
    currentHandle = null;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);

    // Clear any text selection that may have happened during drag
    const selection = document.getSelection();
    if (selection) {
      selection.removeAllRanges();
    }
  }

  function resetWidth() {
    frameWidth.set(null);
  }

  // Clean up event listeners on unmount (only in browser)
  onDestroy(() => {
    if (browser) {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
  });
</script>

<div class="resizable-frame" class:is-resizing={isResizing}>
  <!-- Ruler showing current width -->
  {#if isResizing && $frameWidth}
    <div class="ruler">
      <span>{$frameWidth} px</span>
    </div>
  {/if}

  <!-- Reset button -->
  {#if $frameWidth && !isResizing}
    <div class="reset-container">
      <button class="reset-button" onclick={resetWidth}>Set to auto width</button>
    </div>
  {/if}

  <!-- Left drag handle -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="drag-handle left"
    onmousedown={(e) => handleMouseDown(e, 'left')}
  ></div>

  <!-- Right drag handle -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="drag-handle right"
    onmousedown={(e) => handleMouseDown(e, 'right')}
  ></div>

  <!-- Content wrapper -->
  <div
    bind:this={windowRef}
    class="frame-content"
    style="width: {effectiveWidth ? `${effectiveWidth}px` : 'auto'}; {isInstagramTheme ? 'aspect-ratio: 4 / 5;' : ''}"
  >
    {@render children()}
  </div>
</div>

<style>
  .resizable-frame {
    position: relative;
    display: inline-block;
  }

  .resizable-frame.is-resizing {
    user-select: none;
  }

  .drag-handle {
    position: absolute;
    z-index: 10;
    top: 50%;
    width: 24px;
    height: 24px;
    cursor: col-resize;
    transform: translate(var(--translate-x), -50%);
    user-select: none;
  }

  .drag-handle::after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: white;
    content: "";
    transform: translate(-50%, -50%);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  :global(html:not(.dark)) .drag-handle::after {
    background: #333;
  }

  .drag-handle.left {
    left: 0;
    --translate-x: -50%;
  }

  .drag-handle.right {
    right: 0;
    --translate-x: 50%;
  }

  .frame-content {
    max-width: 100%;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .reset-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    transform: translateY(calc(-100% - 0.25rem));
    animation: fadeIn 200ms ease-out;
  }

  .reset-button {
    padding: 0;
    color: rgba(0, 0, 0, 0.4);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 11px;
    transition: color 200ms;
  }

  .reset-button:hover {
    color: rgba(0, 0, 0, 0.7);
  }

  .ruler {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    transform: translateY(calc(-100% - 0.25rem));
    border-left: 1px solid var(--ruler-color);
    border-right: 1px solid var(--ruler-color);
    color: var(--ruler-color);
    font-size: 11px;
    text-align: center;
    --ruler-color: rgba(255, 255, 255, 0.3);
    animation: fadeIn 200ms ease-out;
  }

  :global(html:not(.dark)) .ruler {
    --ruler-color: rgba(0, 0, 0, 0.3);
  }

  .ruler > span {
    display: inline-block;
    padding: 0 1em;
    background-color: var(--bg-color, #0d0d0d);
  }

  :global(html:not(.dark)) .ruler > span {
    --bg-color: var(--color-parchment-200);
  }

  .ruler::before {
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 0;
    right: 0;
    border-top: 1px solid var(--ruler-color);
    content: "";
  }
</style>
