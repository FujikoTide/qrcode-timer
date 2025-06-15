# TODO

- make interface like this:

  - button: add message
  - button: add due date
  - button: add location
  - generate qrcode button (only appears if at least one piece of information is added)

- when user clicks on above buttons, change button area to relevant component

- message area:

  - message input and submit message button
  - user enters text then presses enter key or submit message button

- date area:

  - date picker and associated submit date button

- location area:

  - google maps and somehow I get the location data from it???????? submit location button

- when submitted the original buttons are now two buttons: edit and delete for each section

- generate qrcode button does its stuff and you get a link/qrcode

- display data page:
  - show the relevant data as applicable:
    - message
    - due date
    - time until due date
    - location

## UI stuff (non exhaustive):

### Primitives

`Flex: A component that provides display: flex and props to control all flexbox properties (justify, align, gap, direction). It has no color, margin, or padding of its own.`
`Grid: A component that provides display: grid and props to control grid properties (grid-template-columns, gap).`
`Stack: A specialized version of Flex that is always flex-col with a consistent gap.`
`Portal: A component that renders its children into a different part of the DOM (e.g., for modals or tooltips).`
`VisuallyHidden: A component that visually hides its children but keeps them accessible to screen readers.`
`AspectRatio: A component that maintains a specific aspect ratio for its child (e.g., for images or video embeds).`

### Atoms

`Button / ActionButton / LinkButton: The styled <button> and <a> tags.`
`Input: A styled <input> element.`
`Label: A styled <label> element.`
`Text / Heading: Components that render <p>, <span>, or <h1>-<h6> tags with consistent font sizes, weights, and colors.`
`Icon: A component that renders an SVG icon.`
`Avatar: A styled <img> or <div> for displaying user profile pictures or initials.`
`Logo: Your site's logo.`
`Spinner: A loading indicator.`
`Badge / Tag: A small, styled element for displaying status or keywords.`

### Molecules

`FormField: The classic molecule. A combination of a Label atom and an Input atom.`
`SearchForm: A combination of an Input atom and a Button atom.`
`ButtonGroup: A group of Button atoms arranged with a consistent gap (built with your Flex primitive).`
`Alert: A combination of an Icon atom and a Text atom, used for displaying messages (success, error, warning).`
`StatDisplay: A combination of a Heading atom (for a number) and a Text atom (for a label), like "1,204 Views".`
`ContentColumn: Your layout molecule for constraining content width.`
`ButtonContainer: Your layout molecule for positioning button groups.`

### Organisms

`Header / SiteNav: The main site navigation bar, composed of a Logo atom, LinkButton atoms, and maybe a SearchForm molecule.`
`Footer: The site footer.`
`Sidebar: A navigation or filter sidebar.`
`ProductCard: A complex component showing a product image, title, price, and an "Add to Cart" button.`
`UserProfileCard: Your example, showing an Avatar, user name, and other details.`
`DataTable: A full table with headers, rows, and pagination controls.`
`MainContainer: Your layout organism that provides the main content wrapper for a page.`
