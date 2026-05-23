tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "inverse-surface": "#e2e2e2",
                "tertiary": "#173D3C", 
                "primary-fixed": "#ffdcc2",
                "surface": "#121414",
                "outline": "#a48c7b",
                "surface-container-highest": "#333535",
                "on-secondary-container": "#ffffff",
                "inverse-on-surface": "#2f3131",
                "on-primary-fixed-variant": "#6d3a00",
                "surface-container-high": "#282a2b",
                "tertiary-fixed": "#c3eae8",
                "primary": "#AE3708", 
                "primary-fixed-dim": "#AE3708",
                "on-tertiary-fixed-variant": "#284d4c",
                "background": "#121414",
                "surface-variant": "#333535",
                "surface-container": "#1e2020",
                "tertiary-fixed-dim": "#173D3C",
                "on-secondary-fixed-variant": "#83007a",
                "on-secondary-fixed": "#390035",
                "surface-container-low": "#1a1c1c",
                "secondary-fixed": "#ffd7f2",
                "on-surface": "#e2e2e2",
                "inverse-primary": "#8f4d00",
                "on-surface-variant": "#dcc2af",
                "error-container": "#93000a",
                "primary-container": "#AE3708",
                "on-tertiary-fixed": "#00201f",
                "surface-bright": "#38393a",
                "outline-variant": "#564335",
                "secondary": "#D904CB", 
                "on-background": "#e2e2e2",
                "on-secondary": "#ffffff",
                "tertiary-container": "#173D3C",
                "secondary-fixed-dim": "#D904CB",
                "on-tertiary": "#ffffff",
                "on-error": "#690005",
                "surface-dim": "#121414",
                "surface-tint": "#AE3708",
                "on-primary": "#ffffff",
                "on-primary-container": "#ffffff",
                "surface-container-lowest": "#0c0f0f",
                "secondary-container": "#D904CB",
                "on-primary-fixed": "#2e1500",
                "error": "#ffb4ab",
                "on-tertiary-container": "#ffffff",
                "on-error-container": "#ffdad6"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            "spacing": {
                "lg": "48px",
                "base": "8px",
                "gutter": "24px",
                "container-max": "1280px",
                "sm": "12px",
                "md": "24px",
                "xs": "4px",
                "xl": "80px"
            },
            "fontFamily": {
                "h1": ["Epilogue"],
                "body-md": ["Spline Sans"],
                "h3": ["Epilogue"],
                "body-lg": ["Spline Sans"],
                "label-caps": ["Space Grotesk"],
                "h2": ["Epilogue"]
            },
            "fontSize": {
                "h1": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "800"}],
                "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "h3": ["32px", {"lineHeight": "1.2", "fontWeight": "700"}],
                "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "label-caps": ["14px", {"lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "600"}],
                "h2": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}]
            }
        }
    }
};