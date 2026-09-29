1. Describe the user flow. A user clicks a tab; jump to the comtent of the tab.

2. Split it: what's an action, what's a change on screen? Actions become event handlers. Things that change on screen become state.

3. What's the smallest thing you can store? Not "which items are open" — one at a time, so a single index is enough.

4. Name it. i use activeindex and handleClick because i want to show one at a time

5. Where does it live? Does anything else reasonably need it? live in tab page, i think it will be useful to display mutipl card in one page so you do not have to switch pagem also add css to make it more visible for user to know what tab they're on

