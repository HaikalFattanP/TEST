tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "primary": "#ffb77b",
                "on-secondary": "#5d0056",
                "secondary-container": "#f737e5",
                "outline-variant": "#564335",
                "error-container": "#93000a",
                "secondary-fixed-dim": "#ffacec",
                "on-surface": "#e2e2e2",
                "surface-container-high": "#282a2b",
                "on-tertiary-container": "#183e3d",
                "inverse-surface": "#e2e2e2",
                "secondary": "#ffacec",
                "surface-variant": "#333535",
                "on-primary": "#4d2700",
                "outline": "#a48c7b",
                "inverse-on-surface": "#2f3131",
                "surface-container-lowest": "#0c0f0f",
                "inverse-primary": "#8f4d00",
                "error": "#ffb4ab",
                "surface-container-highest": "#333535",
                "surface": "#121414",
                "on-tertiary-fixed": "#00201f",
                "surface-tint": "#ffb77b",
                "tertiary": "#a7cecc",
                "on-error": "#690005",
                "on-tertiary": "#0f3635",
                "on-primary-fixed-variant": "#6d3a00",
                "on-secondary-container": "#51004b",
                "on-secondary-fixed-variant": "#83007a",
                "surface-container-low": "#1a1c1c",
                "on-surface-variant": "#dcc2af",
                "background": "#121414",
                "on-tertiary-fixed-variant": "#284d4c",
                "surface-dim": "#121414",
                "tertiary-fixed": "#c3eae8",
                "secondary-fixed": "#ffd7f2",
                "tertiary-fixed-dim": "#a7cecc",
                "on-error-container": "#ffdad6",
                "on-background": "#e2e2e2",
                "surface-bright": "#38393a",
                "primary-fixed-dim": "#ffb77b",
                "surface-container": "#1e2020",
                "primary-container": "#AE3708", /* Rust */
                "primary-fixed": "#ffdcc2",
                "on-primary-container": "#592e00",
                "tertiary-container": "#173D3C", /* Teal */
                "secondary-container-alt": "#D904CB", /* Magenta */
                "on-secondary-fixed": "#390035",
                "on-primary-fixed": "#2e1500"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            "spacing": {
                "xs": "4px",
                "xl": "80px",
                "md": "24px",
                "container-max": "1280px",
                "lg": "48px",
                "base": "8px",
                "sm": "12px",
                "gutter": "24px"
            },
            "fontFamily": {
                "h3": ["Epilogue"],
                "h2": ["Epilogue"],
                "body-lg": ["Spline Sans"],
                "label-caps": ["Space Grotesk"],
                "body-md": ["Spline Sans"],
                "h1": ["Epilogue"]
            },
            "fontSize": {
                "h3": ["32px", {"lineHeight": "1.2", "fontWeight": "700"}],
                "h2": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "label-caps": ["14px", {"lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "600"}],
                "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "h1": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "800"}]
            }
        }
    }
}