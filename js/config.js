/**
 * The updated reveal.js config object with enhanced aesthetics.
 */
export default {
  // Presentation size
  width: 960,
  height: 700,

  // Margins
  margin: 0.04,

  // Scaling bounds
  minScale: 0.5,
  maxScale: 1.5,

  // Controls
  controls: true,
  controlsTutorial: true,
  controlsLayout: "bottom-right",
  controlsBackArrows: "visible",

  // Progress bar and slide numbers
  progress: true,
  slideNumber: "h.v",
  showSlideNumber: "all",

  // Hash management
  hash: true,
  respondToHashChanges: true,

  // Navigation
  jumpToSlide: true,
  history: true,
  keyboard: true,
  keyboardCondition: "focused",
  disableLayout: false,
  overview: true,
  center: true,
  touch: true,
  loop: false,
  rtl: false,
  navigationMode: "grid",
  shuffle: false,

  // Fragments and visibility
  fragments: true,
  fragmentInURL: true,
  embedded: false,
  help: true,
  pause: true,
  showNotes: false,
  showHiddenSlides: false,

  // Media settings
  autoPlayMedia: false,
  preloadIframes: true,
  autoAnimate: true,
  autoAnimateEasing: "ease-in-out",
  autoAnimateDuration: 0.8,
  autoAnimateUnmatched: true,
  autoAnimateStyles: [
    "opacity",
    "color",
    "background-color",
    "padding",
    "font-size",
    "line-height",
    "letter-spacing",
    "border-width",
    "border-color",
    "border-radius",
    "outline",
    "outline-offset",
  ],

  // Auto-slide settings
  autoSlide: 5000,
  autoSlideStoppable: true,
  autoSlideMethod: null,

  // Timing and mouse wheel
  defaultTiming: null,
  mouseWheel: true,

  // Link previews
  previewLinks: true,

  // API and events
  postMessage: true,
  postMessageEvents: true,
  focusBodyOnPageVisibilityChange: true,

  // Transitions
  transition: "slide", // none/fade/slide/convex/concave/zoom
  transitionSpeed: "fast", // default/fast/slow
  backgroundTransition: "fade", // none/fade/slide/convex/concave/zoom

  // Parallax effects
  parallaxBackgroundImage: "path/to/your/image.jpg", // Replace with your image path
  parallaxBackgroundSize: "2000px 1500px",
  parallaxBackgroundRepeat: "no-repeat",
  parallaxBackgroundPosition: "center center",
  parallaxBackgroundHorizontal: 100,
  parallaxBackgroundVertical: 50,

  // View settings
  view: "scroll",
  scrollLayout: "full",
  scrollSnap: "mandatory",
  scrollProgress: "auto",
  scrollActivationWidth: 600,

  // PDF settings
  pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
  pdfSeparateFragments: true,
  pdfPageHeightOffset: -1,

  // View distance
  viewDistance: 3,
  mobileViewDistance: 2,

  // Display mode
  display: "block",

  // Cursor settings
  hideInactiveCursor: true,
  hideCursorTime: 3000,

  // Fragment sorting
  sortFragmentsOnSync: true,

  // Dependencies and plugins
  dependencies: [],
  plugins: [],
};
