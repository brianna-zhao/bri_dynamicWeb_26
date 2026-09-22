1. Describe the user flow. A user clicks a section header; that section expands and the others collapse.

2. Split it: what's an action, what's a change on screen? Actions become event handlers. Things that change on screen become state.

3. What's the smallest thing you can store? Not "which items are open" — one at a time, so a single index is enough.

4. Name it. expandedIndex, and handleClick for the handler. Convention, not law, but stick to it.

5. Where does it live? Does anything else reasonably need it? No — so it lives inside Accordion. And the handler goes wherever the state it changes lives.

