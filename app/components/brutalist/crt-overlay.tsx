/*
  TACTICAL TELEMETRY — CRT SCANLINE + NOISE OVERLAY
  Applied at the root level. pointer-events: none.
*/
import React from "react";

export function CrtOverlay() {
	return (
		<>
			<div className="crt-overlay" aria-hidden="true" />
			<div className="noise-overlay" aria-hidden="true" />
		</>
	);
}
