tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "error": "#ffb4ab",
                "tertiary": "#a7cecc",
                "on-tertiary-container": "#183e3d",
                "error-container": "#93000a",
                "primary": "#ffb77b",
                "on-surface": "#e2e2e2",
                "surface-container-high": "#282a2b",
                "surface-container-lowest": "#0c0f0f",
                "secondary-fixed-dim": "#ffacec",
                "surface-tint": "#ffb77b",
                "tertiary-fixed-dim": "#a7cecc",
                "on-tertiary-fixed": "#00201f",
                "on-tertiary": "#0f3635",
                "on-background": "#e2e2e2",
                "on-primary-container": "#592e00",
                "background": "#121414",
                "primary-container": "#AE3708",
                "secondary-fixed": "#ffd7f2",
                "inverse-on-surface": "#2f3131",
                "secondary-container": "#D904CB",
                "tertiary-container": "#173D3C",
                "primary-fixed-dim": "#ffb77b",
                "on-secondary": "#5d0056",
                "outline": "#a48c7b",
                "on-primary-fixed": "#2e1500",
                "on-error-container": "#ffdad6",
                "on-primary": "#ffffff",
                "surface-container-highest": "#333535",
                "surface-variant": "#333535",
                "surface-dim": "#121414",
                "inverse-primary": "#8f4d00",
                "surface-bright": "#38393a",
                "on-tertiary-fixed-variant": "#284d4c",
                "surface-container-low": "#1a1c1c",
                "primary-fixed": "#ffdcc2",
                "on-surface-variant": "#dcc2af",
                "on-secondary-fixed": "#390035",
                "on-primary-fixed-variant": "#6d3a00",
                "tertiary-fixed": "#c3eae8",
                "surface-container": "#1e2020",
                "outline-variant": "#564335",
                "on-secondary-fixed-variant": "#83007a",
                "on-error": "#690005",
                "inverse-surface": "#e2e2e2",
                "surface": "#121414",
                "secondary": "#D904CB",
                "on-secondary-container": "#ffffff"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            "spacing": {
                "xs": "4px",
                "base": "8px",
                "xl": "80px",
                "lg": "48px",
                "sm": "12px",
                "md": "24px",
                "gutter": "24px",
                "container-max": "1280px"
            },
            "fontFamily": {
                "body-lg": ["Spline Sans"],
                "label-caps": ["Space Grotesk"],
                "body-md": ["Spline Sans"],
                "h1": ["Epilogue"],
                "h3": ["Epilogue"],
                "h2": ["Epilogue"]
            },
            "fontSize": {
                "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "label-caps": ["14px", {"lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "600"}],
                "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "h1": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "800"}],
                "h3": ["32px", {"lineHeight": "1.2", "fontWeight": "700"}],
                "h2": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}]
            }
        }
    }
}