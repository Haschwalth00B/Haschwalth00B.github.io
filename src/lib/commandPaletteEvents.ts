// Shared event mechanism for the command palette.
// Used by Navbar (to open) and CommandPalette (to listen).

const CMD_PALETTE_EVENT = 'toggle-command-palette';

export function openCommandPalette() {
    window.dispatchEvent(new CustomEvent(CMD_PALETTE_EVENT));
}

export function onCommandPaletteToggle(callback: () => void): () => void {
    const handler = () => callback();
    window.addEventListener(CMD_PALETTE_EVENT, handler);
    return () => window.removeEventListener(CMD_PALETTE_EVENT, handler);
}
