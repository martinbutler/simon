# Simons Foundation Project

[Live site for the project](http://simonsfoundation.herokuapp.com/)


In addition to building the search tool, I have included the following:

1. NavBar
  * files:
    - navbar.html
    - navbar.scss
    - navbar.controller.js
  * description: This was to mimic the current Simons Foundation Website NavBar. I made adjustments to account for the length of the navbar items.  The navbar items will collapse at 850px instead of 768px.  This prevents the wrapping of the items to addition lines between 768 and 850 to provide a better UX.

2. Footer:
  * files
    - footer.html
    - footer.scss
    - footer.controller.js
  * description: This was to mimic the current Simons Foundation Website footer. I made adjustments to account for the length of the footer items.  The footer items will collapse at 850px instead of 768px.  This prevents the wrapping of the items to addition lines between 768 and 850 to provide a better UX.

3. Sidebar:
  * files
    - sidebar.html
    - sidebar.scss
    - sidebar.controller.js
  * description: This was to mimic the current Simons Foundation Website sidebar when doing a search. (i.e. https://www.simonsfoundation.org/?s=autism&submit= ).  I made adjustments on the responsiveness. When the sidebar is moved below the body, the image and text associated with it will expand to fit the window width and maintain its persistence on mobile devices to provide a better UX.

## Search Tool Design:
1. Image: For aesthetics and to allow for the user search option interface to be placed to its right.

2. User Search Options:
  * Search By: is a select that contains the two fields the user can select on.
    - Defaults to Chromosome. Given there were two fields, I made it alphabetical.  I would adjust this based on users, such that one field would be more utilized than another.
    - On change, it will clear the Enter Search Criteria.

  * Enter Search Criteria: input box
    - Typeahead: includes a typeahead option, should the search field have a limited number of distinct values, which is the case for the 'chrom' field.  I implemented this feature to give users a selectable option, in addition to ensuring more accurate queries
      - Typeahead dropdown: for better UX, height has been limited, but scrollable.  Is responsive and will adjust height on mobile devices.
      - Typeahead items: are sorted using a natural sort factory I created to provide the user with a more natural ordering of the data.
    - Validation: includes validation rules:
      - search criteria must be at least one character
      - if there is typeahead data, then the search criteria must be a member of that typeahead data
    - Keyboard events: if user presses the enter key while the focus is in the input box, it will fire an event to perform the search query if the search criteria passes validation.  This option provides the user with a more natural interaction and eliminates the need for the user to click the search button.

  * Search Button: remains disabled until search criteria has been met in the Enter Search Criteria input box.

  * Select Style: is a select that the user can select from 4 different styles for their results table.
    - Will only be enabled if the search query garners results.

  * Error Msg: will be displayed if the query garners no results.
    - will include the user's search criteria in the message.

3. Results area:
  * will only display if there are results from a query
  * Export to CSV Button: Gives the user the flexibility of downloading their results into a CSV file, which will inlcude a header row.
  * Clear Sorting Button: gives the user the option to reset any sorting they may have done.
  * Table:
    - Header: All fields are sortable, both ascending and descending.
    - Table View Options:
      - Pagination: will be displayed if the number records exceeds the page count. Also a previous and next button are provided and are enabled and disabled based on the which page is active.
      - Page Count Options. Defaults to 10 rows per page, but options include 25, 50, and 100.
    - CSS Styling:
      - includes 4 options
      - Default option is to mimic the look and feel of the current Simons Foundation website.
      - Zebra Striping: every other row will have different shading for easier viewing.

## Install

1) git clone https://github.com/martinbutler/simon.git

2) cd simon

3) bower install

4) npm install

5) source importGeneData.sh

6) grunt serve
