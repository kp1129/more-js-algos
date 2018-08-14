/* Many content management sites (CMS) have the titles of a post added to part of the URL. 

Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. 
You can use any of the methods covered in this section, and don't use .replace(). 

Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces */

function urlSlug(title) {
    //lowercase and split into array, delimiter being any non-letter character
    let splitTitle = title.toLowerCase().split(/[^a-zA-Z]/);
    //filter for non-empty array items, then join them with a hyphen
    let result = splitTitle.filter((s) => s !== "").join("-");
    //return the resulting string
    return result;
}
