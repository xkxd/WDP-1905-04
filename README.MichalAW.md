# WDP190504-11

## Description

This task applies to the main menu (search and "Home",)
On tablets, the search is to be under the menu, and on smaller screens it is to be searched and next to it the icon of the mobile menu, which after unfolding is to show a dropdown covering the page content.

## Details

As for the rest of the css properties, all that I have changed, I gave to the file: \_product-box.scss, you have to place it on these files. The problem was mainly that you did not have a flex wrap, which if only the elements do not fit it gives them a new line (you must remember that on sub-elements you have to give some min-width so that the parent element knows when to write). Here you have to download (I removed the bar menu section because it did not work properly RWD, you have to limit the number of elements in this section according to your discretion):

## Project initiation

install the required packages with the `npm install` command.

Now you can start working using the prepared tasks `npm run watch`

## NPM Scripts

- `watch`: starts `browser-sync` and observes changes in the main folder and rebuilds the project
